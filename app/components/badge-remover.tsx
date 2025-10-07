"use client"

import { Suspense, useEffect } from "react"
import type React from "react"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const badge = document.querySelector('a[href*="v0.dev"]')
    if (badge) badge.remove()
  }, [])

  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
