import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpotlightWrapper from "@/components/Spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QRify",
  description: "Scan, Create Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpotlightWrapper />
        {children}
      </body>
    </html>
  );
}
