import Link from "next/link";
import Image from "next/image";
import FlagStripe from "@/components/ui/FlagStripe";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B3D38] text-white">
      <FlagStripe />
      <div className="site-wrap site-section relative z-10">
        <div className="grid min-w-0 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.png"
                alt="BotBeaver"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-display text-base font-bold text-white">BotBeaver</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              An American AI automation firm. We build the agent that&apos;s
              always there — chatbot, voice, CRM, and growth — so no lead goes
              quiet. Serving companies across the United States, UK, Canada,
              Australia and Europe.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ED4C8]">
              Core AI Services
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/crm" className="text-sm text-white/75 no-underline hover:text-white">CRM</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Voice AI</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Chat Widget / Conversation AI</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Websites, Funnels &amp; Landing Pages</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Webinar Funnels</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Call Tracking</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Inbound SMS &amp; Social DMs</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Social Planner</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Missed Call Text-Back</Link>
              <Link href="/services" className="text-sm text-white/75 no-underline hover:text-white">Ad Manager (Google/FB/Insta)</Link>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ED4C8]">
              Growth &amp; AI Visibility
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">SMM — Social Media Marketing</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">SEO — Search Engine Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">AEO — Answer Engine Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">GEO — Generative Engine Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">AIO — AI Overview Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">Email Marketing Automation</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">Sales Funnel Automation</Link>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ED4C8]">
              Build, Automation &amp; Strategy
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">AI-Powered Web Development</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">iOS App Development</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">Android App Development</Link>
              <Link href="/crm" className="text-sm text-white/75 no-underline hover:text-white">HubSpot CRM Integration</Link>
              <Link href="/crm" className="text-sm text-white/75 no-underline hover:text-white">Salesforce CRM Integration</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">Business Process Automation</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">Workflow Automation</Link>
              <Link href="/enterprise" className="text-sm text-white/75 no-underline hover:text-white">AI Business Consulting</Link>
              <Link href="/enterprise" className="text-sm text-white/75 no-underline hover:text-white">Enterprise Digital Transformation</Link>
              <Link href="/services#capabilities" className="text-sm text-white/75 no-underline hover:text-white">Technical Writing</Link>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ED4C8]">
              Company
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/why" className="text-sm text-white/75 no-underline hover:text-white">Why BotBeaver</Link>
              <Link href="/values" className="text-sm text-white/75 no-underline hover:text-white">Our Values</Link>
              <Link href="/about" className="text-sm text-white/75 no-underline hover:text-white">About Us</Link>
              <Link href="/process" className="text-sm text-white/75 no-underline hover:text-white">Our Process</Link>
              <Link href="/demo" className="text-sm text-white/75 no-underline hover:text-white">Live Demo</Link>
              <Link href="/see-it-work" className="text-sm text-white/75 no-underline hover:text-white">See It Work</Link>
              <Link href="/proof" className="text-sm text-white/75 no-underline hover:text-white">Proof &amp; Live Stats</Link>
              <Link href="/resources" className="text-sm text-white/75 no-underline hover:text-white">Resources</Link>
              <Link href="/pricing" className="text-sm text-white/75 no-underline hover:text-white">Pricing</Link>
              <Link href="/contact" className="text-sm text-white/75 no-underline hover:text-white">Contact</Link>
              <span className="text-sm text-white/55">Lahore, Pakistan</span>
              <span className="text-sm text-white/55">hello@arqonnect.com</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <span className="text-xs text-white/55">
            © 2026 BotBeaver. All rights reserved.
          </span>
          <span className="text-xs uppercase tracking-[0.14em] text-white/55">
            Built for American businesses
          </span>
        </div>
      </div>
    </footer>
  );
}
