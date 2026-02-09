"use client";

import { useState } from "react";

function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
    >
      {children}
    </a>
  );
}

function XIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-muted" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const TWEETS = [
  {
    handle: "@bondexapp",
    text: "Bondex acquires Remote3.co — Adding 100,000+ monthly visitors and 20,500 profiles to our ecosystem.",
    date: "Nov 13, 2025",
    url: "https://x.com/bondexapp/status/1988925324831433160",
  },
  {
    handle: "@marclou",
    text: "$85,000 acquisition on TrustMRR — @yogesharc discovered his job board was getting traffic from ChatGPT, so he built a tool to monitor when AI tools mention your service.",
    date: "Jan 29, 2026",
    url: "https://x.com/marclou/status/2016892441237082209",
  },
];

function SoldText() {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow((s) => !s)}
    >
      <span className="cursor-default underline decoration-dotted underline-offset-4 decoration-border">
        both sold
      </span>
      {show && (
        <span
          className="absolute left-1/2 bottom-full mb-0 z-50 flex flex-col gap-0 w-[300px] -translate-x-1/2"
          style={{ animation: "fadeIn 0.15s ease-out" }}
        >
          <span className="rounded-xl border border-border bg-background shadow-sm overflow-hidden">
            {TWEETS.map((tweet, i) => (
              <a
                key={tweet.url}
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 hover:bg-black/[0.02] transition-colors no-underline ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <span className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-medium text-foreground">{tweet.handle}</span>
                  <XIcon />
                </span>
                <span className="block text-[13px] leading-relaxed text-foreground/80">
                  {tweet.text}
                </span>
                <span className="block text-xs text-muted mt-2">{tweet.date}</span>
              </a>
            ))}
          </span>
          {/* Invisible bridge so cursor can travel from text to popover */}
          <span className="block h-2" />
        </span>
      )}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 sm:px-8">
      <div className="max-w-lg">
        <h1 className="text-lg font-medium tracking-tight mb-8">Bootstrapped</h1>
        <div className="text-base leading-[1.8] space-y-6">
          <p>
            An independent software company. We make tools that are simple,
            fast, and useful — things we&apos;d want to use ourselves.
          </p>

          <p>
            We&apos;re behind{" "}
            <Link href="https://www.supalytics.co?utm_source=bootstrapped-llc">Supalytics</Link>,{" "}
            <Link href="https://www.revenuesurf.com?utm_source=bootstrapped-llc">Revenuesurf</Link>, and{" "}
            <Link href="https://redlightgreenlight.dev?utm_source=bootstrapped-llc">Redlight Greenlight</Link>.
            We also built{" "}
            <Link href="https://remote3.co?utm_source=bootstrapped-llc">Remote3</Link> and{" "}
            <Link href="https://www.promptmonitor.io?utm_source=bootstrapped-llc">Promptmonitor</Link>,{" "}
            <SoldText />.
          </p>

          <p>
            Founded and run by{" "}
            <Link href="https://yogesh.co?utm_source=bootstrapped-llc">Yogesh</Link>.
          </p>
        </div>

        <div className="flex items-center justify-between text-muted text-sm pt-12">
          <span>&copy; 2022&ndash;{new Date().getFullYear()} Bootstrapped LLC</span>
          <a
            href="mailto:support@bootstrapped.llc"
            className="underline underline-offset-4 decoration-border hover:decoration-muted transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
