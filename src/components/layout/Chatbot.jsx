
import React, { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ArrowUpRight,
  LoaderCircle,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const WHATSAPP_NUMBER = "919452792607";

const initialMessage = {
  role: "assistant",
  content:
    "Hi there! 👋 Welcome to NAZARRA.\n\nI'm your digital assistant. I can help you explore our services, understand how we work, or discuss your business requirements.\n\nWhat can I help you with today?",
};

const suggestions = [
  "What services do you offer?",
  "I need a website",
  "How does pricing work?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([initialMessage]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text = input) => {
    const trimmed = text.trim();

    if (!trimmed || loading) return;

    if (trimmed.length > 2000) {
      return;
    }

    const updatedMessages = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((message) =>
              ["user", "assistant"].includes(message.role)
            )
            .slice(-10),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to get a response.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);

    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please try again or contact our team on WhatsApp.",
        },
      ]);
      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello NAZARRA! I'd like to discuss a project."
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#171717] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B69B78]"
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={26} />}

        {!isOpen && (
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-[#F5F5F2] bg-[#B69B78]" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <section
          className="fixed bottom-24 right-4 z-[100] flex h-[min(620px,calc(100dvh-125px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-[24px] border border-[#E7E4DD] bg-[#F9F8F5] shadow-[0_20px_70px_rgba(0,0,0,0.18)] sm:right-6"
          aria-label="NAZARRA AI Assistant"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#171717] px-5 py-5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B69B78]">
                <Sparkles size={20} />
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wide">
                  NAZARRA Assistant
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9AC49B]" />
                  <span className="text-[10px] text-white/65">
                    AI-powered support
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>

          {/* Intro */}
          <div className="border-b border-[#E7E4DD] px-5 py-3">
            <p className="text-[11px] text-[#858585]">
              Your business deserves to be seen.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-[#171717] text-white"
                      : "rounded-bl-md border border-[#E7E4DD] bg-white text-[#353535]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    disabled={loading}
                    className="rounded-full border border-[#DED8CD] bg-white px-3 py-2 text-[11px] text-[#555] transition hover:border-[#B69B78] hover:text-[#967B59]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#858585]">
                <LoaderCircle size={15} className="animate-spin" />
                NAZARRA is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp CTA */}
          <div className="px-4 pb-3">
            <button
              type="button"
              onClick={openWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#E7E4DD] bg-white py-2.5 text-xs font-medium text-[#555] transition hover:border-[#B69B78] hover:text-[#967B59]"
            >
              Talk to our team on WhatsApp
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-[#E7E4DD] bg-white p-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-[#E7E4DD] bg-[#F9F8F5] py-1.5 pl-4 pr-1.5 transition focus-within:border-[#B69B78]">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask us anything..."
                maxLength={2000}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent text-xs text-[#222] outline-none placeholder:text-[#A4A09A]"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white transition hover:bg-[#B69B78] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>

            <p className="mt-2 text-center text-[9px] text-[#A4A09A]">
              Powered by AI · NAZARRA Digital Growth & AI Solutions
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default Chatbot;
