import './globals.css'
import { Inter } from 'next/font/google'

import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react'
export const metadata = {
  title: 'Islas AutoBody',
  description: 'More than an Automotive Body Shop!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} FadeMeIn`}>
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
