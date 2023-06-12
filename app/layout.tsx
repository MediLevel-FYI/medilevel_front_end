import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MediLevels.fyi',
  description: 'Discover comprehensive compensation data for healthcare providers. Compare salaries, bonuses, and stock compensation based on specialty, years of experience, location, and more. Make informed decisions about your career in healthcare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
