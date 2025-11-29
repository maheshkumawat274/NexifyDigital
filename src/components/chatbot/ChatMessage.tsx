// src/components/ChatMessage.tsx
import React from 'react';
import type { ChatMessage as ChatMessageType } from '../types/Chat';

export const ChatMessage: React.FC<{ msg: ChatMessageType }> = ({ msg }) => {
  const isUser = msg.sender === 'user';
  // system messages have different look
  if (msg.sender === 'system') {
    return (
      <div className="flex justify-center my-2">
        <div className="text-xs bg-yellow-50 border border-yellow-100 px-3 py-2 rounded-md text-gray-700">
          {msg.text}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`} aria-live="polite">
      <div
        className={`max-w-[78%] px-3 py-2 rounded-lg text-sm leading-5 shadow-sm ${
          isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
        role="article"
        aria-label={`${msg.sender} message`}
      >
        {msg.text}
        <div className="text-[10px] opacity-60 mt-1 text-right">{new Date(msg.time).toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
