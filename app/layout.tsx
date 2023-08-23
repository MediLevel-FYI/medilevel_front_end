import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { MobileMenuContextProvider } from "@/context/mobile-menu.context";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MedPay",
  description:
    "Discover comprehensive compensation data for healthcare providers. Compare salaries, bonuses, and stock compensation based on specialty, years of experience, location, and more. Make informed decisions about your career in healthcare.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body
        className={`${inter.className} scrollbar-thin scrollbar-thumb-[#012060]`}
      >
        <MobileMenuContextProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </MobileMenuContextProvider>
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}
