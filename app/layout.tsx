import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purshotam Yadav — Data Strategist & Frontend Developer",
  description:
    "Data Strategist and Frontend Developer based in Bremen, Germany. React, TypeScript and Next.js paired with Python automation, SQL and data-driven SEO.",
  keywords: ["Purshotam Yadav", "Frontend Developer Bremen", "Data Strategist Germany", "React Developer", "Next.js", "TypeScript", "SEO", "Python"],
  authors: [{ name: "Purshotam Yadav", url: "https://github.com/PYadav0210" }],
  creator: "Purshotam Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Purshotam Yadav",
    title: "Purshotam Yadav — Data Strategist & Frontend Developer",
    description: "SEO, data analytics and the web. Based in Bremen, Germany.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purshotam Yadav — Data Strategist & Frontend Developer",
    description: "SEO, data analytics and the web. Based in Bremen, Germany.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#08080a]" suppressHydrationWarning>{children}</body>
    </html>
  );
}