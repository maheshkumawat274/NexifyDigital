// src/components/ChatbotWidget.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';
import type { ChatMessage as ChatMessageType } from '../types/Chat';
import ChatMessage from './ChatMessage';
import { mockApi } from '../utils/MockApi';
import { QUICK_REPLIES } from '../data/KnowledgeBase';

const STORAGE_KEY = 'nexify_chat_history_v1';
// type Lead = { name: string; email?: string; phone: string; message?: string };

export const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  // const [showLeadForm, setShowLeadForm] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setMessages(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const pushMessage = (msg: ChatMessageType) => {
    setMessages((s) => [...s, msg]);
  };

  const handleSend = async (text?: string) => {
    const payload = (text ?? input).trim();
    if (!payload) return;

    const userMsg: ChatMessageType = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: payload,
      time: Date.now(),
    };

    pushMessage(userMsg);
    setInput('');
    setSending(true);

    try {
      const botReply = await mockApi.sendMessage(payload);
      pushMessage(botReply);

    } catch (err) {
      pushMessage({
        id: `err_${Date.now()}`,
        sender: 'bot',
        text: 'Sorry, something went wrong. Please try again later.',
        time: Date.now(),
      });

    } finally {
      setSending(false);
    }
  };

  const handleQuickReply = (q: string) => handleSend(q);

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          aria-label="Open chat"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <FaComments size={22} />
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className={`
    fixed 
    bottom-20 right-4 sm:right-6 
    z-50 
    w-[90%] sm:w-80 md:w-96 
    h-[70vh] sm:h-[72vh] md:h-[75vh]
    bg-white 
    rounded-2xl 
    shadow-2xl 
    border 
    flex flex-col
    overflow-hidden
    transition-all
    ${open ? "slide-up" : "slide-down"}
  `}>
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-semibold text-xs">
              <img src='/imgs/img.png'/>
              </div>
              <div>
                <div className="text-sm font-semibold">Nexify Digital — Support</div>
                <div className="text-[10px] opacity-80">Web · App · Software · Marketing</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                title="Clear"
                onClick={clearChat}
                className="text-white/80 hover:text-white cursor-pointer text-xs"
              >
                Clear
              </button>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-white/10 cursor-pointer">
                <FaTimes size={12} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-hidden px-3 py-2">
            <div ref={scrollRef} className="h-full overflow-y-auto pr-2">
              {messages.length === 0 && (
                <div className="text-sm text-gray-600 p-4 rounded-md border border-dashed">
                  Welcome! I can assist you with Website Development, App Development, Software, Digital Marketing & more.
                </div>
              )}

              {messages.map((m) => (
                <ChatMessage key={m.id} msg={m} />
              ))}

              {sending && (
                <div className="my-2">
                  <div className="max-w-[60%] px-3 py-2 rounded-lg text-sm shadow-sm bg-gray-100 text-gray-700">
                    Typing...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer + input */}
          <div className="px-3 pb-3 border-t bg-white">
            
            <div className="flex flex-wrap gap-2 mb-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickReply(q)}
                  className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 rounded-full border border-gray-200 text-sm"
                placeholder="Type your message..."
              />

              <button
                onClick={() => handleSend()}
                disabled={sending}
                className="w-10 h-10 cursor-pointer rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:scale-105 transition"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
