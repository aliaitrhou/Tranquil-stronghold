import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Steadfast haven",
  description: "Empowering youth through art, film, and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-neutral-50 min-h-screen text-black"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
