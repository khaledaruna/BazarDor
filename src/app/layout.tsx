import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import ToastProvider from "@/components/provider/ToastProvider";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "বাজার দর",
    template: "%s | বাজার দর",
  },
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বর্তমান বাজারদর এক নজরে দেখুন।",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <html 
      lang="bn" 
      className={`${hindSiliguri.variable} antialiased`} 
      data-scroll-behavior="smooth" 
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Navbar />
        <ToastProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;