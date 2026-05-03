import type { Metadata } from 'next'
import '@/styles/globals.css'
import { RootLayoutClient } from './layout-client'

export const metadata: Metadata = {
  title: 'AI Freelancer Operating System',
  description: 'Automate proposals, manage clients, track deadlines, and grow your freelance income.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}