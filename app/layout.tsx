import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// *
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Air BnB - Project by Zaid",
  description: "Air BnB description",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
        lang="en"
        suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} h-full font-raleway antialiased`}
     >
        <Navbar />
        <body className="min-h-full flex flex-col">{children}</body>
        {/*<Footer />*/}
    </html>
  );
}
