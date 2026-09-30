"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Msg = { id: string; who: "user" | "bot" | "typing"; text: string };

const SUGGESTIONS = [
  "What does BotBeaver do?",
  "Do you offer SEO and AEO?",
  "How fast can we go live?",
  "Which industries do you serve?",
];

const WELCOME =
  "Hi! I'm the BotBeaver demo agent. Ask about website chat, SEO/AEO, or booking a demo.";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
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
        "I hit a snag answering that — try again, or book a demo and we'll go deeper.";

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
      <div className="bb-shell relative flex h-80 flex-col sm:h-[28rem]">
        <div className="relative z-10 shrink-0 border-b border-white/10 px-5 py-4">
          <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-circuit">
            <span className="inline-flex h-[7px] w-[7px] rounded-full bg-circuit" />
            Online — responding in under 3s
          </p>
        </div>

        <div
          ref={bodyRef}
          className="relative z-10 min-h-0 flex-1 space-y-3 overflow-y-auto px-5 pb-3"
        >
          {messages.map((m) => {
            if (m.who === "typing") {
              return (
                <div
                  key={m.id}
                  className="max-w-[82%] self-start rounded-[14px] rounded-bl-[4px] bg-white/[0.09] px-[15px] py-[11px] text-sm text-[#E7ECF5]"
                >
                  Typing…
                </div>
              );
            }

            const mine = m.who === "user";
            return (
              <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-[15px] py-[11px] text-[14px] leading-relaxed ${
                    mine
                      ? "rounded-[14px] rounded-br-[4px] bg-accent text-white"
                      : "rounded-[14px] rounded-bl-[4px] bg-white/[0.09] text-[#E7ECF5]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}

          {showSuggestions && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-sm border border-white/15 bg-white/[0.06] px-3 py-1.5 text-left text-[12px] text-[#E7ECF5] hover:border-accent hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative z-10 shrink-0 p-4">
          <form
            className="flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.06] p-1.5 pl-3.5"
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
              placeholder="Message the demo agent…"
              disabled={busy}
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-[#E7ECF5] outline-none placeholder:text-[#8FA3C4] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent text-white hover:bg-accent-dim disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
            >
              <SendIcon />
            </button>
          </form>
          <p className="mt-2.5 text-center font-mono text-[10px] tracking-wide text-[#8FA3C4]">
            Demo agent ·{" "}
            <Link href="/contact" className="text-accent no-underline hover:underline">
              Book a demo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
