"use client";

function ExternalLink({ href, children }) {
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
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const TWEETS = [
  {
    name: "Marc Lou",
    handle: "marclou",
    avatarUrl: "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
    text: "$85,000 acquisition on TrustMRR — @yogesharc discovered his job board was getting traffic from ChatGPT, so he built a tool to monitor when AI tools mention your service.",
    date: "Jan 29, 2026",
    url: "https://x.com/marclou/status/2016892441237082209",
    likes: "612",
    replies: "48",
  },
  {
    name: "Bondex",
    handle: "bondexapp",
    avatarUrl: "https://pbs.twimg.com/profile_images/2032120322430844929/IIcoyjfe_400x400.jpg",
    text: "Bondex acquires Remote3.co — Adding 100,000+ monthly visitors and 20,500 profiles to our ecosystem.",
    date: "Nov 13, 2025",
    url: "https://x.com/bondexapp/status/1988925324831433160",
    likes: "284",
    replies: "31",
  },
];

function TweetCard({ tweet }) {
  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-border bg-white p-4 hover:bg-black/[0.015] transition-colors no-underline"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={tweet.avatarUrl}
            alt={tweet.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-[15px] font-bold text-foreground leading-tight">
              {tweet.name}
            </div>
            <div className="text-[14px] text-muted leading-tight">
              @{tweet.handle}
            </div>
          </div>
        </div>
        <span className="text-foreground mt-0.5">
          <XIcon />
        </span>
      </div>

      {/* Body */}
      <p className="text-[15px] leading-relaxed text-foreground mb-3">
        {tweet.text}
      </p>

      {/* Date */}
      <div className="text-[14px] text-muted border-t border-border pt-3 mb-3">
        {tweet.date}
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-[14px] text-muted">
        <span>
          <span className="font-semibold text-foreground">{tweet.replies}</span> Replies
        </span>
        <span>
          <span className="font-semibold text-foreground">{tweet.likes}</span> Likes
        </span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 sm:px-8 py-16">
      <div className="max-w-lg w-full">
        <h1 className="text-base mb-4">Bootstrapped</h1>
        <div className="text-base leading-[1.8] space-y-2">
          <p>
            We are an independent software company. We build and sell
            products in analytics, AI, and developer tools.
          </p>

          <p className="text-muted">***</p>

          <div>
            <p className="text-muted mb-2">Projects:</p>
            <p>
              <a
                href="https://www.supalytics.co?utm_source=bootstrapped-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0000EE] hover:text-[#551A8B] underline transition-colors"
              >
                Supalytics.co
              </a>
              <span className="ml-2">- Simple, fast growth analytics</span>
            </p>
            <p>
              <a
                href="https://www.supacortex.ai?utm_source=bootstrapped-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0000EE] hover:text-[#551A8B] underline transition-colors"
              >
                Supacortex.ai
              </a>
              <span className="ml-2">- Share your context across AI</span>
            </p>
          </div>

          <p className="text-muted">***</p>

          <p>
            We sold{" "}
            <ExternalLink href="https://www.promptmonitor.io?utm_source=bootstrapped-llc">
              Promptmonitor
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="https://remote3.co?utm_source=bootstrapped-llc">
              Remote3
            </ExternalLink>
            .
          </p>

          <div className="flex flex-col gap-3 pt-2">
            {TWEETS.map((tweet) => (
              <TweetCard key={tweet.url} tweet={tweet} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-muted text-sm pt-10">
          <span>&copy; 2022&ndash;{new Date().getFullYear()}</span>
          <a
            href="https://x.com/yogesharc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <XIcon />
            <span>@yogesharc</span>
          </a>
        </div>
      </div>
    </main>
  );
}
