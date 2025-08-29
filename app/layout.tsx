import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunny Teotia | Full Stack Developer",
  description: "Full Stack Developer & DSA Enthusiast with expertise in Next.js, React, and backend technologies.",
  metadataBase: new URL("https://sunnyteotia.dev/"),

  // Basic metadata
  applicationName: "Sunny Teotia Portfolio",
  authors: [{ name: "Sunny Teotia" }],
  keywords: ["Full Stack Developer", "Web development", "DSA", "Next.js", "React", "Node.js"],

  openGraph: {
    type: "website",
    url: "https://sunnyteotia.dev/",
    title: "Sunny Teotia | Full Stack Developer",
    description: "Full Stack Developer & DSA Enthusiast with expertise in Next.js, React, and backend technologies.",
    siteName: "Sunny Teotia",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunny Teotia - Portfolio",
      },
    ],
  },
  
  // icons: {
  //   // icon: [
  //   //   { url: "/favicon.ico" },
  //   //   // { url: "/icon.png", type: "image/png" },
  //   // ],
  //   // apple: { url: "/apple-touch-icon.png" },
  // },
  
  alternates: {
    canonical: "https://sunnyteotia.dev/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}