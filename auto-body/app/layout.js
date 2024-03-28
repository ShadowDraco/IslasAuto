import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Islas AutoBody',
  description: 'More than an Automotive Body Shop!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} FadeMeIn`}>{children}</body>
    </html>
  )
}
