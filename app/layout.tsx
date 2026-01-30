import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { init } from '@plausible-analytics/tracker'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '30s - Encrypted handoffs in seconds.',
  description: 'Send secrets like a message —  end-to-end encrypted and expiring by default. A CLI-first alternative to pasting tokens in Slack.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  init({ domain: '30s.sh' });

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
