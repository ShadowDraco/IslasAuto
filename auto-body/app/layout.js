import './globals.css'
import { Inter } from 'next/font/google'

import MainHeadingBanner from './components/MainHeading'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react'
import { Divider } from '@mui/material'

export const metadata = {
  title: 'Islas AutoBody',
  description: 'The Best Auto Body Service in the Inland Empire! All insurance claims, Financing, Collision, Paint, Fiberglass, we do it All!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`} style={{ backgroundColor: 'black'}}>
          <MainHeadingBanner />
            <Divider />
            {children}
          <Footer />
      </body>
      <Analytics />
    </html>
  )
}
