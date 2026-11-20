'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'

export function BackButton() {
  const router = useRouter()
  const { lang } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
          window.history.back()
        } else {
          router.push('/')
        }
      }}
      className={cn(
        'touch-target flex items-center gap-2 rounded-full border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary hover:border-primary',
      )}
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      {lang === 'en' ? 'Back' : 'Quay lại'}
    </button>
  )
}
