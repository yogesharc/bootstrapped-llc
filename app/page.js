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

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 sm:px-8">
      <div className="text-base leading-[1.8] space-y-6 max-w-lg">
        <p>
          Bootstrapped is an independent software company. We make tools
          that are simple, fast, and useful — things we&apos;d want to use
          ourselves.
        </p>

        <p>
          We&apos;re behind{" "}
          <Link href="https://www.supalytics.co">Supalytics</Link>,{" "}
          <Link href="https://www.revenuesurf.com">Revenuesurf</Link>, and{" "}
          <Link href="https://redlightgreenlight.dev">Redlight Greenlight</Link>.
          We also built{" "}
          <Link href="https://remote3.co">Remote3</Link> and{" "}
          <Link href="https://www.promptmonitor.io">Promptmonitor</Link>,
          both sold.
        </p>

        <p>
          Founded and run by{" "}
          <Link href="https://yogesh.co">Yogesh</Link>.
        </p>

        <p>
          <a
            href="mailto:support@bootstrapped.llc"
            className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            Email
          </a>
        </p>

        <p className="text-muted text-sm">
          &copy; 2022&ndash;{new Date().getFullYear()} Bootstrapped LLC
        </p>
      </div>
    </main>
  );
}
