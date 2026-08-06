import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyMsgSender | Premium Marketing Automation",
  description: "Connect, engage, and grow your audience with EasyMsgSender. The ultimate platform for premium marketing automation and customer engagement.",
  openGraph: {
    title: "EasyMsgSender | Premium Marketing Automation",
    description: "The ultimate platform for premium marketing automation and customer engagement.",
    url: "https://easymsgsender.com",
    siteName: "EasyMsgSender",
    images: [
      {
        url: "https://easymsgsender.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EasyMsgSender Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyMsgSender | Premium Marketing Automation",
    description: "The ultimate platform for premium marketing automation and customer engagement.",
    images: ["https://easymsgsender.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
