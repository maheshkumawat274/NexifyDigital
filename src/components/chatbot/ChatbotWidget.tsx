// ChatbotWidget.tsx
import React, { useState, useEffect } from "react";
import NexifyChatbot from "./NexifyChatbot";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  // Show popup only once per user
  useEffect(() => {
    const alreadyShown = localStorage.getItem("chatPopupShown");

    if (!alreadyShown) {
      // Delay bubble by 1.5 sec for nicer UX
      setTimeout(() => {
        setShowBubble(true);
      }, 1500);
    }
  }, []);

  const closeBubble = () => {
    setShowBubble(false);
    localStorage.setItem("chatPopupShown", "true");
  };

  return (
    <>
      {/* One-time popup bubble */}
      {showBubble && (
        <div className="fixed bottom-20 right-5 bg-white shadow-xl border rounded-lg p-3 w-64 z-50 animate-slide-up">
          <div className="flex justify-between items-start">
            <p className="text-gray-700 text-sm">
              Hi 👋 Need any help? Click here to chat!
            </p>

            {/* Close bubble button */}
            <button
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={closeBubble}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setOpen((s) => !s);
          closeBubble(); // bubble should hide if user opens chat
        }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 bg-[#233AA7] text-white p-3.5 rounded-full shadow-2xl hover:bg-indigo-700 transition-transform transform-gpu hover:-translate-y-0.5 cursor-pointer z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat popup with slide-up animation */}
      <div className="fixed bottom-20 right-5 w-80 md:w-96 z-50 pointer-events-none">
        <div
          className={`transform-gpu transition-all duration-300 ease-in-out pointer-events-auto ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {open && <NexifyChatbot onClose={() => setOpen(false)} />}
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>{`
        .animate-slide-up {
          animation: slideUp 0.35s ease-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
