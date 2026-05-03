'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import { useAppStore } from '@/store'
import { useAuth } from '@/hooks/useAuth'

export const metadata: Metadata = {
  title: 'AI Freelancer Operating System',
  description: 'Automate proposals, manage clients, track deadlines, and grow your freelance income.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { setUser } = useAppStore()
  const { user } = useAuth()

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    }
  }, [setUser]);

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
        {children}
      </body>
    </html>
  )
}