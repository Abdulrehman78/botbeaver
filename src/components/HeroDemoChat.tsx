"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Msg = { id: string; who: "user" | "bot" | "typing"; text: string };

const SUGGESTIONS = [
  "What does BotBeaver do?",
  "How much does it cost?",
  "Can it answer phone calls?",
  "How fast can we go live?",
];

const WELCOME =
  "Hi — I'm Ava. I can answer questions about BotBeaver's chat & voice agents, pricing, CRM, and how we'd fit your business. What should we cover?";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function BotAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-sm";
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center rounded-full bg-[#0B3D38] font-bold text-white ${dim}`}
    >
      A
      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#C45E28]" />
    </span>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type HeroDemoChatProps = {
  ready?: boolean;
  enterDelay?: number;
  className?: string;
};

export default function HeroDemoChat({
  className = "mx-auto mt-12 w-full max-w-3xl",
}: HeroDemoChatProps): React.ReactElement {
  const [messages, setMessages] = useState<Msg[]>([
    { id: "welcome", who: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const showSuggestions =
    !busy && messages.some((m) => m.who === "bot") && !messages.some((m) => m.who === "user");

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
    });
  }, [messages]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const history = messages
      .filter((m) => m.who === "user" || m.who === "bot")
      .map((m) => ({
        role: m.who === "user" ? ("user" as const) : ("assistant" as const),
        content: m.text,
      }));

    setBusy(true);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: uid(), who: "user", text: trimmed },
      { id: "typing", who: "typing", text: "" },
    ]);

    try {
      const res = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = (await res.json()) as { reply?: string };
      const reply =
        data.reply?.trim() ||
        "I hit a snag answering that — try again, or book a demo and a specialist will go deeper.";

      setMessages((prev) => [
        ...prev.filter((m) => m.who !== "typing"),
        { id: uid(), who: "bot", text: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => m.who !== "typing"),
        {
          id: uid(),
          who: "bot",
          text: "Connection blip on my side. Ask again, or open the full demo while I reconnect.",
        },
      ]);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className={className}>
      <div className="relative flex h-80 flex-col overflow-hidden border border-white/25 bg-white sm:h-[28rem]">
        <div className="relative shrink-0 border-b border-line bg-[#0B3D38] px-4 py-3.5">
          <div className="relative flex items-center gap-3">
            <BotAvatar />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-[15px] font-semibold tracking-tight text-white">
                  Ava
                </h2>
                <span className="rounded-none bg-[#C45E28] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  AI
                </span>
              </div>
              <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-white/75">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#2A9B8F]" />
                Online · replies instantly
              </p>
            </div>
          </div>
        </div>

        <div
          ref={bodyRef}
          className="relative min-h-0 flex-1 space-y-4 overflow-y-auto bg-[#F4F7F4] px-3.5 py-3 sm:px-4"
        >
          {messages.map((m) => {
            if (m.who === "typing") {
              return (
                <div key={m.id} className="flex items-end gap-2">
                  <BotAvatar size="sm" />
                  <div className="rounded-none border border-line bg-white px-4 py-3 text-sm text-text-dim">
                    Typing…
                  </div>
                </div>
              );
            }

            const mine = m.who === "user";
            return (
              <div
                key={m.id}
                className={`flex items-end gap-2 ${mine ? "flex-row-reverse" : ""}`}
              >
                {!mine && <BotAvatar size="sm" />}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 text-[13px] leading-relaxed sm:max-w-[70%] sm:text-sm ${
                    mine
                      ? "rounded-none bg-[#C45E28] text-white"
                      : "rounded-none border border-line bg-white text-text"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}

          {showSuggestions && (
            <div className="flex flex-wrap gap-2 pt-1 pl-9">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-none border border-line bg-white px-3 py-1.5 text-left text-[11px] text-text hover:border-[#0B3D38] hover:text-[#0B3D38]"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative shrink-0 border-t border-line bg-white p-3">
          <form
            className="flex items-center gap-2 border border-line bg-white p-1.5 pl-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Ava…"
              disabled={busy}
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-text outline-none placeholder:text-text-dimmer disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#C45E28] text-white hover:bg-[#9A4318] disabled:cursor-not-allowed disabled:bg-text/10 disabled:text-text/30"
            >
              <SendIcon />
            </button>
          </form>
          <p className="mt-2.5 text-center text-[10px] tracking-wide text-text-dimmer">
            Demo agent ·{" "}
            <Link href="/contact" className="text-[#0B3D38] no-underline hover:underline">
              Book a human demo
            </Link>
            {" · "}
            <Link href="/demo" className="text-[#0B3D38] no-underline hover:underline">
              Full demo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
