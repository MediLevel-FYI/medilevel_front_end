import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { MobileMenuContextProvider } from '@/context/mobile-menu.context'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MedPay',
  description: 'Discover comprehensive compensation data for healthcare providers. Compare salaries, bonuses, and stock compensation based on specialty, years of experience, location, and more. Make informed decisions about your career in healthcare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-thin scrollbar-thumb-[#012060]`}>
        <MobileMenuContextProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </MobileMenuContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
