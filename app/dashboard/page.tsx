'use client'
export const dynamic = "force-dynamic";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/store'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { AIClientReplyGenerator } from '@/components/dashboard/AIReplyGenerator'

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
      <AIClientReplyGenerator />
    </DashboardLayout>
  )
}