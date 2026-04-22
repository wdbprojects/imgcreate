import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const figtree = Figtree({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Create",
  description: "Complete image generation app with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} h-screen antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
