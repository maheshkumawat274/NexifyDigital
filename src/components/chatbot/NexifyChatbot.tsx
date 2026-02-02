// NexifyChatbot.tsx
import { useEffect, useRef, useState } from "react";
import { X, Trash2 } from "lucide-react";

// ---------------------------
// Type Definitions
// ---------------------------
type Sender = "bot" | "user";

type Message = {
  id: string;
  sender: Sender;
  text: string;
};

export default function NexifyChatbot({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<number>(0);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom
  const scrollBottom = () => {
    if (!bodyRef.current) return;
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollBottom();
  }, [messages, isTyping]);


  // ---------------------------
  // Helper: Send user message (Instant)
  // API PLACEHOLDER marked
  // ---------------------------
  const pushUser = (text: string) => {
    const msg: Message = {
      id: String(Date.now()) + Math.random(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, msg]);

    // -------------------------------------
    // API: Save each USER message to server
    // -------------------------------------
    /*
    fetch("/api/chat/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, msg }),
    });
    */
  };


  // ---------------------------
  // Helper: Send bot message with Typing
  // API PLACEHOLDER marked
  // ---------------------------
  const sendBot = (text: string, forceTime?: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const base = 400;
    const perChar = 25;
    const calc = Math.min(3000, base + text.length * perChar);
    const delay = Math.max(forceTime || 0, calc);

    setIsTyping(true);

    timerRef.current = window.setTimeout(() => {
      setIsTyping(false);

      const msg: Message = {
        id: String(Date.now()) + Math.random(),
        sender: "bot",
        text,
      };

      setMessages((prev) => [...prev, msg]);

      // -------------------------------------
      // API: Save each BOT message to server
      // -------------------------------------
      /*
      fetch("/api/chat/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg),
      });
      */

      timerRef.current = null;
    }, delay);
  };


  // ---------------------------
  // Initial Bot Greeting
  // ---------------------------
  useEffect(() => {
    sendBot("Can we help you with something?", 3000);
    setStep(0);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);


  // ---------------------------
  // Validation Helpers
  // ---------------------------
  const validatePhone = (n: string) => /^[0-9]{10,15}$/.test(n);
  const validateEmail = (e: string) =>
    /^[\w-.]+@[\w-]+\.[A-Za-z]{2,}$/.test(e);


  // ---------------------------
  // Chat Flow Handlers
  // ---------------------------
  const handleYesHelp = () => {
    pushUser("Yes");
    sendBot("We offer Website Development, Mobile Apps, UI/UX, SEO and more. Would you like to proceed?");
    setStep(1);
  };

  const handleYesServices = () => {
    pushUser("Yes");
    sendBot("Thanks for your interest 🙏. I just need a few details to get started.");
    setStep(2);
  };

  const handleOkDetails = () => {
    pushUser("Okay");
    sendBot("Great — what's your name?");
    setStep(3);
  };

  const handleSubmitName = () => {
    if (!name.trim()) {
      sendBot("Please enter your name.");
      return;
    }

    pushUser(name);

    // -----------------------------------------
    // API: SEND USER NAME TO YOUR BACKEND
    // -----------------------------------------
    /*
    fetch("/api/lead/name", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    */

    sendBot("Shall we give you a call?");
    setStep(4);
  };

  const handleCallYes = () => {
    pushUser("Yes");
    sendBot("Please enter your contact number:");
    setStep(5);
  };

  const handleCallNo = () => {
    pushUser("No");
    sendBot("That's fine. Can we get in touch with you via email?");
    setStep(6);
  };

  const handleSubmitPhone = () => {
    const digits = phone.replace(/\D/g, "");

    if (!validatePhone(digits)) {
      sendBot("Please enter a valid phone number (10–15 digits).");
      return;
    }

    pushUser(digits);

    // -------------------------------------------
    // API: SAVE PHONE NUMBER TO BACKEND
    // -------------------------------------------
    /*
    fetch("/api/lead/phone", {
      method: "POST",
      body: JSON.stringify({ phone: digits }),
    });
    */

    sendBot("Thanks — we'll call you soon! 🙌");
    setStep(99);
  };

  const handleEmailYes = () => {
    pushUser("Yes");
    sendBot("Please enter your email address:");
    setStep(7);
  };

  const handleEmailNo = () => {
    pushUser("No");
    sendBot("Hmm… We need a way to contact you. Don't worry we won’t spam you.");
    sendBot("Ok then");
    setStep(8);
  };

  const handleOkThen = () => {
    pushUser("Ok then");
    sendBot("Please enter an email address:");
    setStep(7);
  };

  const handleSubmitEmail = () => {
    if (!validateEmail(email)) {
      sendBot("Please enter a valid email address.");
      return;
    }

    pushUser(email);

    // -------------------------------------------
    // API: SAVE EMAIL + COMPLETE LEAD DATA
    // -------------------------------------------
    /*
    fetch("/api/lead/email", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        email,
        chat: messages,
      }),
    });
    */

    sendBot("Thank you — we'll contact you via email. 🙏");
    setStep(99);
  };


  // ---------------------------
  // Buttons Renderer
  // ---------------------------
  const renderButtons = () => {
    const btn = "hover:bg-[#233AA7] border-2 border-[#233AA7] text-black hover:text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition cursor-pointer";
    const outline = "border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer";

    switch (step) {
      case 0:
        return <button className={btn} onClick={handleYesHelp}>Yes</button>;
      case 1:
        return <button className={btn} onClick={handleYesServices}>Yes</button>;
      case 2:
        return <button className={btn} onClick={handleOkDetails}>Okay</button>;

      case 3:
        return (
          <div className="flex gap-2">
            <input
              className="border px-3 py-2 rounded w-full"
              value={name}
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
            <button className={btn} onClick={handleSubmitName}>Submit</button>
          </div>
        );

      case 4:
        return (
          <div className="flex gap-2">
            <button className={btn} onClick={handleCallYes}>Yes</button>
            <button className={outline} onClick={handleCallNo}>No</button>
          </div>
        );

      case 5:
        return (
          <div className="flex gap-2">
            <input
              className="border px-3 py-2 rounded w-full"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className={btn} onClick={handleSubmitPhone}>Submit</button>
          </div>
        );

      case 6:
        return (
          <div className="flex gap-2">
            <button className={btn} onClick={handleEmailYes}>Yes</button>
            <button className={outline} onClick={handleEmailNo}>No</button>
          </div>
        );

      case 7:
        return (
          <div className="flex gap-2">
            <input
              className="border px-3 py-2 rounded w-full"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={btn} onClick={handleSubmitEmail}>Submit</button>
          </div>
        );

      case 8:
        return <button className={btn} onClick={handleOkThen}>Ok then</button>;

      default:
        return null;
    }
  };


  // ---------------------------
  // Render Chat UI
  // ---------------------------
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#233AA7] text-white">
        
        <div className="flex items-center gap-3">
          <img src="/imgs/new update.png" className="w-10 h-10 bg-white rounded-full object-cover" />
          <div>
            <div className="font-semibold">NexifyDigital Chat</div>
            <div className="text-xs opacity-80">Quick • Friendly • Smart</div>
          </div>
        </div>

        <div className="flex gap-2">
          
          {/* CLEAR CHAT */}
          <button
            onClick={() => {
              // Future API: clear conversation from server
              /*
              fetch("/api/chat/clear", { method: "POST" });
              */
              setMessages([]);
              sendBot("Can we help you with something?", 2000);
              setStep(0);
            }}
            className="p-2 hover:bg-white/10 rounded cursor-pointer"
          >
            <Trash2 size={18} />
          </button>

          {/* CLOSE CHAT */}
          <button
            onClick={() => onClose?.()}
            className="p-2 hover:bg-white/10 rounded cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

      </div>


      {/* Body */}
      <div ref={bodyRef} className="h-80 overflow-auto p-4 bg-gray-50 space-y-3">

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 text-white flex items-center justify-center rounded-full text-sm font-bold">
              <img src="/imgs/new update.png" className="w-10 h-10 rounded-full"/>
            </div>
            <div className="px-4 py-2 bg-white border rounded-lg">
              Typing...
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((m, i) => {
          const isBot = m.sender === "bot";
          const isLastBot =
            isBot && i === messages.length - 1 && !isTyping;

          return (
            <div key={m.id}>
              <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
                
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-lg whitespace-pre-line ${
                    isBot ? "bg-white border text-gray-800" : "bg-[#233AA7] text-white"
                  }`}
                >
                  {m.text}
                </div>

              </div>

              {/* Buttons appear right below last bot message */}
              {isLastBot && (
                <div className="mt-2">{renderButtons()}</div>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
}
