'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/store'
import { useAuth } from '@/hooks/useAuth'

export function RootLayoutClient({
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

  return <>{children}</>
}