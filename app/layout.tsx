import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components/index";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hovsep Meytikhanyan",
  description: "Developing Websites",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={
          font.className +
          " antialiased flex flex-col justify-between min-h-screen max-w-screen bg-[#030505] overflow-hidden  text-white transition-colors duration-300"
        }
      >
        <Components>{children}</Components>
      </body>
    </html>
  );
}

// https://aether-ai-saas-template.aura.build/

/////// fix all bugs of reviews swiper.
