import type { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Sign In - AI Freelancer OS',
  description: 'Sign in to your account',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <LoginClient />
}