'use client'

import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
          window.history.back()
        } else {
          window.location.href = '/'
        }
      }}
      className={cn(
        'touch-target flex items-center gap-2 rounded-full border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary hover:border-primary',
      )}
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      Quay lại
    </button>
  )
}
