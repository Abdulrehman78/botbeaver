"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ported from the original static build's assets/main.js.
 *
 * Split into two effects:
 *  - a "global" effect that runs once, for chrome that lives in the
 *    shared layout (loader, spotlight, nav scroll state, magnetic
 *    buttons via delegation).
 *  - a "per-route" effect that re-initializes on every navigation,
 *    since each page mounts a different set of section components
 *    (hero canvas, scene engine, tickers, demo widgets, etc. only
 *    exist on the pages that use them).
 */
export default function SiteScripts() {
  const pathname = usePathname();

  // Chrome motion (spotlight, magnetic buttons, scroll progress) is disabled.

  // ---- per-route, re-run on every navigation ----
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const intervals: Array<ReturnType<typeof setInterval>> = [];

    // cost calculator (pricing page)
    const calcMinutes = document.getElementById(
      "calcMinutes"
    ) as HTMLInputElement | null;
    if (calcMinutes) {
      const calcMinutesValue = document.getElementById("calcMinutesValue")!;
      const calcTiers = document.querySelectorAll<HTMLElement>(".calc-tier");
      const calcCPM = document.getElementById("calcCPM")!;
      const calcVoiceCost = document.getElementById("calcVoiceCost")!;
      const calcCrmCost = document.getElementById("calcCrmCost")!;
      const calcTeleCost = document.getElementById("calcTeleCost")!;
      const calcTotal = document.getElementById("calcTotal")!;
      let calcRate = 0.09;
      const updateCalc = () => {
        const mins = parseInt(calcMinutes.value, 10);
        calcMinutesValue.textContent = mins.toLocaleString() + " min";
        const voice = calcRate * 0.5;
        const crm = calcRate * 0.33;
        const tele = calcRate * 0.17;
        calcCPM.textContent = calcRate.toFixed(3);
        calcVoiceCost.textContent = "$" + voice.toFixed(3) + "/min";
        calcCrmCost.textContent = "$" + crm.toFixed(3) + "/min";
        calcTeleCost.textContent = "$" + tele.toFixed(3) + "/min";
        calcTotal.textContent = "$" + Math.round(calcRate * mins).toLocaleString();
      };
      calcMinutes.addEventListener("input", updateCalc);
      cleanups.push(() => calcMinutes.removeEventListener("input", updateCalc));
      const tierHandlers: Array<[HTMLElement, () => void]> = [];
      calcTiers.forEach((btn) => {
        const h = () => {
          calcTiers.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          calcRate = parseFloat(btn.dataset.rate || "0.09");
          updateCalc();
        };
        btn.addEventListener("click", h);
        tierHandlers.push([btn, h]);
      });
      cleanups.push(() =>
        tierHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
      );
      updateCalc();
    }

    // founder video play
    const founderPlay = document.getElementById("founderPlay");
    if (founderPlay) {
      const onClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".play-btn")) return;
        const vid = founderPlay.querySelector<HTMLVideoElement>(
          ".founder-video-el"
        );
        if (vid && (vid.querySelector("source") || vid.getAttribute("src"))) {
          (founderPlay.querySelector(".founder-poster") as HTMLElement)!.style.display =
            "none";
          (founderPlay.querySelector(".play-btn") as HTMLElement)!.style.display =
            "none";
          vid.style.display = "block";
          vid.play();
        } else {
          const btn = founderPlay.querySelector<HTMLElement>(".play-btn");
          if (btn) {
            btn.style.transform = "scale(0.9)";
            timers.push(setTimeout(() => (btn.style.transform = ""), 200));
          }
        }
      };
      founderPlay.addEventListener("click", onClick);
      cleanups.push(() => founderPlay.removeEventListener("click", onClick));
    }

    // chat demo
    const chatBody = document.getElementById("chatDemoBody");
    if (chatBody) {
      const chatForm = document.getElementById(
        "chatDemoForm"
      ) as HTMLFormElement;
      const chatInput = document.getElementById(
        "chatDemoInput"
      ) as HTMLInputElement;
      const chatSuggestions = document.getElementById("chatSuggestions")!;

      const chatAddMsg = (text: string, who: string) => {
        const d = document.createElement("div");
        d.className = "chat-msg " + who;
        d.textContent = text;
        chatBody.appendChild(d);
        chatBody.scrollTop = chatBody.scrollHeight;
        return d;
      };
      const chatReplyFor = (text: string) => {
        const t = text.toLowerCase();
        if (
          t.includes("price") ||
          t.includes("cost") ||
          t.includes("$") ||
          t.includes("pricing")
        ) {
          return "Everything — CRM, voice AI, chat, SEO, the works — runs $97/month once you're set up, replacing $1,600+ of separate tools. Want the full comparison?";
        }
        if (
          t.includes("book") ||
          t.includes("demo") ||
          t.includes("call") ||
          t.includes("meeting")
        ) {
          return "I can get you on the calendar right now — mornings or afternoons this week both have openings. Which works better for you?";
        }
        if (t.includes("voice") || t.includes("phone")) {
          return "Yep — try the Voice AI tab above, it's the same agent that answers real client calls. Sounds human, books appointments, works 24/7.";
        }
        if (t.includes("hi") || t.includes("hello") || t.includes("hey")) {
          return "Hey there! I can tell you about pricing, book you a demo, or walk you through what we automate. What's on your mind?";
        }
        if (
          t.includes("seo") ||
          t.includes("aeo") ||
          t.includes("geo") ||
          t.includes("rank")
        ) {
          return "We run SEO, AEO, GEO and AIO together — so you show up in Google, Perplexity, and AI Overviews, not just classic search.";
        }
        return "Good question — I've flagged that for the team, and a real specialist can go deeper on a quick call. Want me to book that in?";
      };
      const chatSend = (text: string) => {
        if (!text.trim()) return;
        chatAddMsg(text, "user");
        chatInput.value = "";
        const typing = document.createElement("div");
        typing.className = "chat-msg bot typing";
        typing.innerHTML = "<span></span><span></span><span></span>";
        chatBody.appendChild(typing);
        chatBody.scrollTop = chatBody.scrollHeight;
        timers.push(
          setTimeout(() => {
            typing.remove();
            chatAddMsg(chatReplyFor(text), "bot");
          }, 900 + Math.random() * 500)
        );
      };
      const onSubmit = (e: Event) => {
        e.preventDefault();
        chatSend(chatInput.value);
      };
      const onSuggestionClick = (e: Event) => {
        const btn = (e.target as HTMLElement).closest(".suggestion");
        if (btn) chatSend(btn.textContent || "");
      };
      chatForm.addEventListener("submit", onSubmit);
      chatSuggestions.addEventListener("click", onSuggestionClick);
      cleanups.push(() => {
        chatForm.removeEventListener("submit", onSubmit);
        chatSuggestions.removeEventListener("click", onSuggestionClick);
      });
    }

    // voice demo
    const voiceCallBtn = document.getElementById("voiceCallBtn");
    if (voiceCallBtn) {
      const voiceTranscript = document.getElementById("voiceTranscript")!;
      const voiceStatusText = document.getElementById("voiceStatusText")!;
      const voiceTimer = document.getElementById("voiceTimer")!;
      const voiceAvatar = document.getElementById("voiceAvatar")!;
      const callScript: Array<[string, string, string]> = [
        [
          "agent",
          "Agent",
          "Thanks for calling BotBeaver Dental, this is Ava — how can I help you today?",
        ],
        [
          "caller",
          "Caller",
          "Hi, I need to get a cleaning booked, my tooth has been sensitive.",
        ],
        [
          "agent",
          "Agent",
          "Sorry to hear that — I can get you seen this week. Does Wednesday at 2 PM work?",
        ],
        ["caller", "Caller", "Yeah, 2 PM Wednesday is perfect."],
        [
          "agent",
          "Agent",
          "You are all set for Wednesday at 2 PM. I will text a confirmation now — anything else?",
        ],
        ["caller", "Caller", "Nope, that is everything. Thanks!"],
        ["agent", "Agent", "Anytime — see you Wednesday!"],
      ];
      let voiceActive = false;
      let voiceInterval: ReturnType<typeof setInterval> | null = null;
      let voiceSeconds = 0;
      let voiceStepTimer: ReturnType<typeof setTimeout> | null = null;

      const resetVoiceDemo = () => {
        voiceActive = false;
        if (voiceInterval) clearInterval(voiceInterval);
        if (voiceStepTimer) clearTimeout(voiceStepTimer);
        voiceSeconds = 0;
        voiceTimer.textContent = "00:00";
        voiceStatusText.textContent = "Ready to call";
        voiceAvatar.classList.remove("live");
        voiceCallBtn.textContent = "Start Demo Call →";
        voiceTranscript.innerHTML =
          '<p class="voice-hint">Press "Start Demo Call" to hear how BotBeaver\'s Voice AI handles a real booking call — live transcript will appear here.</p>';
      };

      const startVoiceDemo = () => {
        voiceActive = true;
        voiceTranscript.innerHTML = "";
        voiceStatusText.textContent = "Live — connected";
        voiceAvatar.classList.add("live");
        voiceCallBtn.textContent = "End Call";
        voiceInterval = setInterval(() => {
          voiceSeconds++;
          const m = String(Math.floor(voiceSeconds / 60)).padStart(2, "0");
          const sSec = String(voiceSeconds % 60).padStart(2, "0");
          voiceTimer.textContent = m + ":" + sSec;
        }, 1000);
        intervals.push(voiceInterval);

        let i = 0;
        const nextLine = () => {
          if (!voiceActive || i >= callScript.length) {
            if (voiceActive) {
              voiceStatusText.textContent = "Call ended";
              voiceAvatar.classList.remove("live");
              if (voiceInterval) clearInterval(voiceInterval);
              voiceCallBtn.textContent = "Start Demo Call →";
              voiceActive = false;
            }
            return;
          }
          const [cls, label, line] = callScript[i];
          const el = document.createElement("div");
          el.className = "voice-line " + cls;
          el.innerHTML = "<b>" + label + "</b><span></span>";
          voiceTranscript.appendChild(el);
          voiceTranscript.scrollTop = voiceTranscript.scrollHeight;
          const span = el.querySelector("span")!;
          let ci = 0;
          const typeInterval = setInterval(() => {
            span.textContent += line[ci];
            ci++;
            voiceTranscript.scrollTop = voiceTranscript.scrollHeight;
            if (ci >= line.length) clearInterval(typeInterval);
          }, 16);
          intervals.push(typeInterval);
          i++;
          voiceStepTimer = setTimeout(nextLine, 1900 + line.length * 10);
          timers.push(voiceStepTimer);
        };
        voiceStepTimer = setTimeout(nextLine, 500);
        timers.push(voiceStepTimer);
      };

      const onVoiceClick = () => {
        if (voiceActive) resetVoiceDemo();
        else startVoiceDemo();
      };
      voiceCallBtn.addEventListener("click", onVoiceClick);
      cleanups.push(() => {
        voiceCallBtn.removeEventListener("click", onVoiceClick);
        if (voiceInterval) clearInterval(voiceInterval);
        if (voiceStepTimer) clearTimeout(voiceStepTimer);
      });
    }

    // demo tabs (chat / voice)
    const demoTabBtns = document.querySelectorAll<HTMLElement>(".demo-tab-btn");
    const demoTabHandlers: Array<[HTMLElement, () => void]> = [];
    demoTabBtns.forEach((btn) => {
      const h = () => {
        demoTabBtns.forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".demo-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.demo-panel[data-demopanel="${btn.dataset.demo}"]`)
          ?.classList.add("active");
      };
      btn.addEventListener("click", h);
      demoTabHandlers.push([btn, h]);
    });
    cleanups.push(() =>
      demoTabHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    // agent template tabs
    const tmplTabBtns = document.querySelectorAll<HTMLElement>(".tmpl-tab-btn");
    const tmplTabHandlers: Array<[HTMLElement, () => void]> = [];
    tmplTabBtns.forEach((btn) => {
      const h = () => {
        tmplTabBtns.forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".tmpl-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.tmpl-panel[data-tmplpanel="${btn.dataset.tmpl}"]`)
          ?.classList.add("active");
      };
      btn.addEventListener("click", h);
      tmplTabHandlers.push([btn, h]);
    });
    cleanups.push(() =>
      tmplTabHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    // capability tabs
    const tabBtns = document.querySelectorAll<HTMLElement>(".tab-btn");
    const tabStage = document.querySelector<HTMLElement>(".tab-stage");
    const tabHandlers: Array<[HTMLElement, () => void]> = [];
    tabBtns.forEach((btn) => {
      const h = () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".tab-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`)
          ?.classList.add("active");
        if (tabStage)
          tabStage.style.setProperty(
            "--stage-accent",
            getComputedStyle(btn).getPropertyValue("--accent")
          );
      };
      btn.addEventListener("click", h);
      tabHandlers.push([btn, h]);
    });
    if (tabStage && tabBtns[0]) {
      tabStage.style.setProperty(
        "--stage-accent",
        getComputedStyle(tabBtns[0]).getPropertyValue("--accent")
      );
    }
    cleanups.push(() =>
      tabHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    // language ticker — rendered by LanguageTicker component (home + proof)
    // industry pulse ticker
    const pulseItems = [
      "AI Overviews are changing how people search — GEO is no longer optional",
      "Voice agents are closing the gap between chatbots and real conversations",
      "Missed calls are still the most common way service businesses lose leads",
      "Agencies are consolidating five tools into one AI-run stack",
      "Answer engines like Perplexity now cite structured FAQ content directly",
      "Response speed has become a bigger conversion lever than ad spend",
    ];
    const pulseChipTrack = document.getElementById("pulseChipTrack");
    if (pulseChipTrack) {
      [...pulseItems, ...pulseItems].forEach((c) => {
        const sEl = document.createElement("span");
        sEl.className = "chip";
        sEl.innerHTML = "<b>◆</b> " + c;
        pulseChipTrack.appendChild(sEl);
      });
      cleanups.push(() => (pulseChipTrack.innerHTML = ""));
    }

    // integration chip ticker
    const chips = [
      "WhatsApp",
      "Stripe",
      "Shopify",
      "TikTok",
      "LinkedIn",
      "Google",
      "Slack",
      "Instagram",
      "WooCommerce",
      "Meta Ads",
      "Zapier",
      "QuickBooks",
    ];
    const chipTrack = document.getElementById("chipTrack");
    if (chipTrack) {
      [...chips, ...chips].forEach((c) => {
        const sEl = document.createElement("span");
        sEl.className = "chip";
        sEl.innerHTML = "<b>●</b> " + c;
        chipTrack.appendChild(sEl);
      });
      cleanups.push(() => (chipTrack.innerHTML = ""));
    }

    // services ticker
    const serviceChips = [
      "CRM",
      "Voice AI",
      "Websites & Funnels",
      "Webinar Funnels",
      "Chat Widget / Conversation AI",
      "Call Tracking",
      "Inbound SMS & Social DMs",
      "Social Planner",
      "Missed Call Text-Back",
      "Ad Manager",
      "SMM",
      "SEO",
      "AEO",
      "GEO",
      "AIO",
      "AI Business Consultancy",
      "Technical Writing",
      "AI Web Development",
      "AI Mobile Development",
    ];
    const serviceChipTrack = document.getElementById("serviceChipTrack");
    if (serviceChipTrack) {
      [...serviceChips, ...serviceChips].forEach((c) => {
        const sEl = document.createElement("span");
        sEl.className = "chip";
        sEl.innerHTML = "<b>●</b> " + c;
        serviceChipTrack.appendChild(sEl);
      });
      cleanups.push(() => (serviceChipTrack.innerHTML = ""));
    }

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach((t) => clearTimeout(t));
      intervals.forEach((i) => clearInterval(i));
    };
  }, [pathname]);

  return null;
}
