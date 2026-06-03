import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import LoadingPage from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'My Dashboard',
description: 'This is my dashboard page handle all my dashboard related page',
openGraph: {
  images: ['https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400,h_1256/https://blog.snappa.com/wp-content/uploads/2024/12/bluesky-banner-og.jpg']
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<LoadingPage/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
