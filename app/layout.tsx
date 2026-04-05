import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior AI Full-Stack & Mobile Developer — Portfolio",
  description: "Senior AI Full-Stack & Mobile Developer with 8+ years shipping LLM-powered applications, native iOS/Android apps, and scalable full-stack systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
