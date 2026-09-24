"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONFIG } from "@/data/translations";

interface ChatMessage {
  id: string;
  sender: "bot" | "client";
  text: string;
  time: string;
}

export default function ChatWidget() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [contactOptional, setContactOptional] = useState("");
  const [showContactPrompt, setShowContactPrompt] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message
    const welcomeText =
      lang === "es"
        ? "Hola. Bienvenido a Swiss Behavioral Health. Este es un chat anónimo y confidencial para responder sus preguntas sobre admisiones y programas. ¿Cómo podemos ayudarle hoy?"
        : "Hello. Welcome to Swiss Behavioral Health. You are in a confidential, anonymous chat with our admissions team. How can we support you today?";
    setMessages([
      {
        id: "msg-1",
        sender: "bot",
        text: welcomeText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || sending) return;

    const userText = input.trim();
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: ChatMessage = {
      id: `client-${Date.now()}`,
      sender: "client",
      text: userText,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: `anon-${Math.random().toString(36).substring(2, 9)}`,
          message: userText,
          contactInfo: contactOptional || "Anonymous",
          isAnonymous: !contactOptional,
        }),
      });
      const data = await res.json();
      const botReplyText =
        lang === "es"
          ? "Gracias por comunicarse con Swiss Behavioral Health. Un representante de admisiones ha sido notificado y le responderá en breve. También puede llamarnos directamente al (656) 232-3504."
          : (data.reply || "Thank you. An SBH representative has been notified.");

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: botReplyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setShowContactPrompt(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text:
            lang === "es"
              ? "Para asistencia inmediata confidencial, por favor llámenos al (656) 232-3504."
              : "For immediate assistance, please call our admissions team directly at (656) 232-3504.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="chat-widget-root">
      {!isOpen && (
        <button
          type="button"
          className="chat-toggle-btn"
          onClick={() => setIsOpen(true)}
          aria-label={lang === "es" ? "Abrir chat con un representante" : "Chat with a representative"}
        >
          <span className="chat-toggle-icon">💬</span>
          <span className="chat-toggle-text">
            {lang === "es" ? "Chat Confidencial" : "Chat with Admissions"}
          </span>
          <span className="chat-online-badge" title="Online"></span>
        </button>
      )}

      {isOpen && (
        <div className="chat-window" role="dialog" aria-label="Admissions chat window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-status-dot"></span>
              <div>
                <strong>Swiss Behavioral Health</strong>
                <p className="chat-status-sub">
                  {lang === "es" ? "Admisiones en línea · Anónimo y seguro" : "Admissions Online · Anonymous & Secure"}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            <div className="chat-disclaimer">
              🔒 {lang === "es" ? "Este chat es 100% anónimo y confidencial. No es para emergencias médicas (llame al 911)." : "This chat is 100% anonymous & confidential. For emergencies dial 911."}
            </div>

            {messages.map((m) => (
              <div key={m.id} className={`chat-bubble-row ${m.sender}`}>
                <div className={`chat-bubble ${m.sender}`}>
                  <p>{m.text}</p>
                  <span className="chat-time">{m.time}</span>
                </div>
              </div>
            ))}

            {showContactPrompt && !contactOptional && (
              <div className="chat-optional-contact-prompt">
                <small>
                  {lang === "es"
                    ? "¿Desea dejar un teléfono o correo opcional para responderle si se desconecta?"
                    : "Optionally leave a phone or email if you'd like a follow-up if you disconnect:"}
                </small>
                <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                  <input
                    type="text"
                    placeholder="Phone or email (optional)"
                    value={contactOptional}
                    onChange={(e) => setContactOptional(e.target.value)}
                    style={{ fontSize: "0.78rem", padding: "6px 8px" }}
                  />
                  <button
                    type="button"
                    className="button button-small button-seafoam"
                    style={{ minHeight: "32px", padding: "4px 10px", fontSize: "0.72rem" }}
                    onClick={() => setShowContactPrompt(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>

          <form className="chat-input-bar" onSubmit={handleSend}>
            <input
              type="text"
              placeholder={lang === "es" ? "Escriba un mensaje anónimo..." : "Type an anonymous message..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={sending}
              autoFocus
            />
            <button type="submit" disabled={sending || !input.trim()} aria-label="Send message">
              ➤
            </button>
          </form>

          <div className="chat-footer-call">
            <span>{lang === "es" ? "¿Prefiere hablar en privado?" : "Prefer to speak in private?"}</span>{" "}
            <a href={`tel:${CONFIG.telHref}`}>{CONFIG.phone}</a>
          </div>
        </div>
      )}
    </div>
  );
}
