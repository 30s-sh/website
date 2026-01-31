import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Plausible } from '@/components/plausible'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '30s - Encrypted handoffs in seconds.',
  description: 'Send secrets like a message — end-to-end encrypted and expiring by default. A CLI-first alternative to pasting tokens in Slack.',
  keywords: [
    'secret sharing',
    'end-to-end encryption',
    'CLI tool',
    'credential sharing',
    'API key sharing',
    'secure handoff',
    'encrypted secrets',
    'developer tools',
    'devops security',
    'ephemeral secrets',
  ],
  authors: [{ name: '30s' }],
  creator: '30s',
  metadataBase: new URL('https://30s.sh'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '30s - Encrypted handoffs in seconds.',
    description: 'Send secrets like a message — end-to-end encrypted and expiring by default. A CLI-first alternative to pasting tokens in Slack.',
    url: 'https://30s.sh',
    siteName: '30s',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/graph.jpg',
        width: 1178,
        height: 736,
        alt: '30s - Encrypted handoffs in seconds.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '30s - Encrypted handoffs in seconds.',
    description: 'Send secrets like a message — end-to-end encrypted and expiring by default. A CLI-first alternative to pasting tokens in Slack.',
    images: ['/graph.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
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

        <Plausible />
      </body>
    </html>
  )
}
