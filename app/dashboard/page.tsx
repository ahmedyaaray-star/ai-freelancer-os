'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/store'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { DashboardOverview } from '@/components/dashboard/OverviewDashboard'

export const metadata: Metadata = {
  title: 'Dashboard - AI Freelancer OS',
  description: 'Your freelance business dashboard',
}

export default function Dashboard() {
  const router = useRouter()
  const { isAuthenticated } = useAppStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}