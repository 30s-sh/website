import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}

        <script async src="https://plausible.io/js/pa-R2WynkJP_SZSUD4epZIV9.js"></script>
        <script>
          window.plausible=window.plausible||function(){(plausible.q = plausible.q || []).push(arguments)},plausible.init=plausible.init||function(i){plausible.o = i || {}};
          plausible.init()
        </script>
      </body>
    </html>
  )
}
