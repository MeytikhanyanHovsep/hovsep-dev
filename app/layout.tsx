import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";

export const metadata: Metadata = {
    title: "Hovsep Meytikhanyan",
    description: "Developing Websites",
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
        <html className="dark nunito">
            <body className="antialiased max-w-screen overflow-hidden bg-dark text-white transition-colors duration-300">
                <Components>{children}</Components>
            </body>
        </html>
    );
}
