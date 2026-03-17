"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

type FaqEntry = {
  topic: string;
  keywords: string[];
  answer: string;
};

const CONSULT_URL = "https://calendar.notion.so/meet/tomaszwojewoda/aod";

const FAQ_BANK: FaqEntry[] = [
  {
    topic: "what-we-do",
    keywords: ["what", "do", "service", "offer", "employees", "agent", "ai or die"],
    answer:
      "AI or Die deploys AI employees as direct reports to your existing leaders (CMO, CTO, CRO, CFO, CPO, CLO). Your humans keep strategy ownership while AI handles execution 24/7.",
  },
  {
    topic: "pricing",
    keywords: ["price", "pricing", "cost", "setup", "monthly", "bundle", "contract"],
    answer:
      "Pricing starts at $2,000 setup + $500/month per agent. The 3-agent bundle is $5,000 setup + $1,200/month. No long-term contracts — cancel with 30 days notice.",
  },
  {
    topic: "how-it-works",
    keywords: ["how", "works", "process", "steps", "deploy", "implementation"],
    answer:
      "Process is simple: free consult, role architecture, agent build, stack integration, then go-live + optimization. We design around your existing workflows so adoption is fast.",
  },
  {
    topic: "deployment-time",
    keywords: ["time", "timeline", "how long", "weeks", "launch"],
    answer:
      "Typical deployment time is 1–2 weeks from consult to production-ready AI employee.",
  },
  {
    topic: "models",
    keywords: ["model", "anthropic", "openai", "venice", "llm", "brain"],
    answer:
      "We support Anthropic, OpenAI, and Venice AI. Recommended production setups are Anthropic Max 20x or OpenAI Pro, with Venice AI available for private/on-prem workflows.",
  },
  {
    topic: "deployment-options",
    keywords: ["deployment", "options", "tiers", "cloud", "private cloud", "on-premise", "on-prem"],
    answer:
      "We offer 3 deployment tiers: Cloud (public models like Anthropic/OpenAI), Private Cloud (private Venice AI in your dedicated cloud), and On-Premise (everything on your hardware using self-hosted models or Venice on-prem).",
  },
  {
    topic: "data-private",
    keywords: ["is my data private", "data private", "private", "secure", "sensitive", "regulated"],
    answer:
      "Yes — if you need stricter privacy than public cloud, choose Private Cloud or On-Premise. Private Cloud keeps data and models inside your private environment; On-Premise keeps everything on your hardware.",
  },
  {
    topic: "on-premise",
    keywords: ["can you deploy on-premise", "on-premise", "on premise", "data center", "server closet", "air-gapped"],
    answer:
      "Yes. We can deploy fully on-premise: models, agents, orchestration, and data all run on your hardware, including data-center and air-gapped environments.",
  },
  {
    topic: "data-privacy-tiers",
    keywords: ["what about data privacy", "privacy", "compliance", "data leaves", "security levels"],
    answer:
      "Data privacy is tiered by deployment: Cloud = standard cloud security with public AI providers; Private Cloud = data stays in your private cloud with Venice AI; On-Premise = maximum control, nothing leaves your building.",
  },
  {
    topic: "proof",
    keywords: ["proof", "case", "portfolio", "examples", "tombot", "nexora", "any.markets"],
    answer:
      "Live proof includes TomBot (100% AI-run company), Nexora (HK-listed Web3 company scaling with AI), Any.Markets (AI leadership from day one), and AI or Die itself (site run by an AI CMO).",
  },
  {
    topic: "transparency",
    keywords: ["transparency", "human", "ai", "label", "policy", "trust"],
    answer:
      "Transparency policy: human consults are with Tomasz Wojewoda, AI phone interactions are labeled, and all AI-generated content is clearly identified. No blurred lines.",
  },
  {
    topic: "contact",
    keywords: ["contact", "consult", "book", "call", "phone", "email", "reach"],
    answer:
      "Book a free consult with Tomasz: https://calendar.notion.so/meet/tomaszwojewoda/aod or call (786) 998-9310.",
  },
];

function normalize(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9\s.-]/g, " ").replace(/\s+/g, " ").trim();
}

function getBestAnswer(query: string): string {
  const normalized = normalize(query);
  if (!normalized) return "";

  const scored = FAQ_BANK.map((item) => {
    const score = item.keywords.reduce((acc, keyword) => {
      const key = normalize(keyword);
      return normalized.includes(key) ? acc + (key.includes(" ") ? 3 : 1) : acc;
    }, 0);

    return { answer: item.answer, score };
  }).sort((a, b) => b.score - a.score);

  if (!scored.length || scored[0].score === 0) {
    return `I'd love to help with that! Book a free consult with Tomasz for a detailed answer: ${CONSULT_URL}`;
  }

  return scored[0].answer;
}

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [introBounce, setIntroBounce] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Ask me anything about AI or Die — services, pricing, deployment, models, or proof-of-concept companies.",
    },
  ]);

  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIntroBounce(false), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

  const buttonTitle = useMemo(() => (isOpen ? "Close Ask AI" : "Ask AI about AI or Die"), [isOpen]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);

    typingTimerRef.current = setTimeout(() => {
      const reply = getBestAnswer(text);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          text: reply,
        },
      ]);
      setIsTyping(false);
      typingTimerRef.current = null;
    }, 500);
  };

  return (
    <div className="askai-root" aria-live="polite">
      <div className={`askai-panel ${isOpen ? "open" : ""}`}>
        <div className="askai-header">
          <div>
            <h3>Ask AI about AI or Die</h3>
            <p>Powered by AI — answers about our services, pricing, and how AI employees work.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="askai-close"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        <div className="askai-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`askai-bubble ${msg.role}`}>
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className="askai-bubble assistant">
              <div className="askai-typing" aria-label="AI is typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form className="askai-input-wrap" onSubmit={handleSend}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about pricing, deployment, models…"
            aria-label="Ask AI about AI or Die"
          />
          <button type="submit" disabled={!input.trim() || isTyping}>
            Send
          </button>
        </form>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`askai-fab ${introBounce ? "intro" : ""} ${isOpen ? "open" : ""}`}
        aria-label={buttonTitle}
        title={buttonTitle}
      >
        <span className="askai-fab-ring" aria-hidden />
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3C7.03 3 3 6.58 3 11c0 2.05.87 3.92 2.31 5.34L4.5 21l4.9-1.63c.84.2 1.71.3 2.6.3 4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
        </svg>
      </button>

      <style jsx>{`
        .askai-root {
          position: fixed;
          right: 1.1rem;
          bottom: 1.1rem;
          z-index: 70;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .askai-panel {
          width: min(400px, calc(100vw - 1.5rem));
          max-height: min(500px, calc(100vh - 6rem));
          border: 1px solid var(--accent-border);
          border-radius: 1rem;
          background: color-mix(in oklab, var(--bg-card) 76%, transparent);
          backdrop-filter: blur(14px);
          box-shadow: 0 28px 65px -38px rgba(0, 0, 0, 0.65), 0 20px 50px -40px rgba(255, 76, 0, 0.75);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transform: translateY(16px) scale(0.98);
          transform-origin: bottom right;
          opacity: 0;
          pointer-events: none;
          transition: transform 260ms ease, opacity 240ms ease;
        }

        .askai-panel.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: auto;
        }

        .askai-header {
          display: flex;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.8rem 0.9rem 0.7rem;
          border-bottom: 1px solid var(--border);
          background: color-mix(in oklab, var(--bg-secondary) 75%, transparent);
        }

        .askai-header h3 {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.25;
          font-weight: 700;
          color: var(--text-primary);
        }

        .askai-header p {
          margin: 0.25rem 0 0;
          font-size: 0.73rem;
          line-height: 1.45;
          color: var(--text-secondary);
        }

        .askai-close {
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 999px;
          font-size: 1.2rem;
          line-height: 1;
          cursor: pointer;
        }

        .askai-messages {
          padding: 0.85rem;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          background: color-mix(in oklab, var(--bg) 92%, transparent);
        }

        .askai-bubble {
          max-width: 88%;
          border-radius: 0.9rem;
          padding: 0.6rem 0.75rem;
          font-size: 0.84rem;
          line-height: 1.45;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .askai-bubble.user {
          margin-left: auto;
          background: var(--accent);
          color: var(--text-on-accent);
          border-bottom-right-radius: 0.3rem;
        }

        .askai-bubble.assistant {
          margin-right: auto;
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border);
          border-bottom-left-radius: 0.3rem;
        }

        .askai-input-wrap {
          border-top: 1px solid var(--border);
          padding: 0.7rem;
          display: flex;
          gap: 0.55rem;
          background: color-mix(in oklab, var(--bg-card) 88%, transparent);
        }

        .askai-input-wrap input {
          flex: 1;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text-primary);
          border-radius: 0.65rem;
          padding: 0.55rem 0.65rem;
          font-size: 0.84rem;
          outline: none;
        }

        .askai-input-wrap input:focus {
          border-color: var(--accent-border);
          box-shadow: 0 0 0 2px color-mix(in oklab, var(--accent) 18%, transparent);
        }

        .askai-input-wrap button {
          border: none;
          border-radius: 0.65rem;
          padding: 0.55rem 0.8rem;
          background: var(--accent);
          color: var(--text-on-accent);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
        }

        .askai-input-wrap button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .askai-fab {
          position: relative;
          width: 3.4rem;
          height: 3.4rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.36);
          background: linear-gradient(150deg, var(--accent), color-mix(in oklab, var(--accent) 72%, #ff803d));
          color: white;
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow: 0 16px 40px -20px rgba(255, 76, 0, 0.85);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .askai-fab:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 48px -24px rgba(255, 76, 0, 0.9);
        }

        .askai-fab.open {
          transform: scale(0.95);
        }

        .askai-fab.intro {
          animation: askaiBounce 1.4s ease 1;
        }

        .askai-fab-ring {
          position: absolute;
          inset: -5px;
          border-radius: 999px;
          border: 1px solid color-mix(in oklab, var(--accent) 36%, transparent);
          animation: askaiPulse 2.2s ease-out infinite;
          pointer-events: none;
        }

        .askai-fab svg {
          width: 1.45rem;
          height: 1.45rem;
          position: relative;
          z-index: 1;
        }

        .askai-typing {
          display: inline-flex;
          align-items: center;
          gap: 0.28rem;
          min-height: 1rem;
        }

        .askai-typing span {
          width: 0.36rem;
          height: 0.36rem;
          border-radius: 999px;
          background: var(--text-secondary);
          opacity: 0.45;
          animation: askaiDots 1s infinite ease-in-out;
        }

        .askai-typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .askai-typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes askaiDots {
          0%,
          80%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }
          40% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }

        @keyframes askaiPulse {
          0% {
            transform: scale(0.88);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes askaiBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-6px);
          }
          45% {
            transform: translateY(0);
          }
          65% {
            transform: translateY(-3px);
          }
        }

        @media (max-width: 640px) {
          .askai-root {
            right: 0.75rem;
            bottom: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
