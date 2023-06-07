import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MediLevels.FYI',
  description: 'Discover comprehensive compensation data for healthcare providers. Compare salaries, bonuses, and stock compensation based on specialty, years of experience, location, and more. Make informed decisions about your career in healthcare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
