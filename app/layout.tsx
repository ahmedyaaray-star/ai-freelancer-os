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
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}