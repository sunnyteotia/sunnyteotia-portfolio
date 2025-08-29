// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sunny Teotia | Portfolio",
  description: "Full Stack Developer & Problem Solver",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};