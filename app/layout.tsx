import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: 'Erick Fernando | Desenvolvedor Full Stack',
  description: 'Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e automações empresariais. Transformando ideias em soluções digitais.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'next.js', 'typescript', 'zoho', 'automação'],
  authors: [{ name: 'Erick Fernando' }],
  icons: [
      {
        url: '/EF  (1).png',
        sizes: '1200x630',
      },
    ],
  openGraph: {
    title: 'Erick Fernando | Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e automações empresariais.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#a855f7',
  width: 'device-width',
  initialScale: 1,
}

import SmoothScroll from "@/components/smooth-scroll"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
       <body className="font-sans antialiased">
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  )
}
