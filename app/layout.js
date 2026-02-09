import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bootstrapped — An independent software company",
  description: "We make tools that are simple, fast, and useful.",
  metadataBase: new URL("https://bootstrapped.llc"),
  openGraph: {
    title: "Bootstrapped — An independent software company",
    description: "We make tools that are simple, fast, and useful.",
    url: "https://bootstrapped.llc",
    siteName: "Bootstrapped",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bootstrapped — An independent software company",
    description: "We make tools that are simple, fast, and useful.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
