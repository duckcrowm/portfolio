'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { profile } from '@/lib/portfolio-data'

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false })
}

export function SiteFooter() {
  const { t } = useLanguage()
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    setTime(formatTime(new Date()))
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:gap-3 sm:py-6">
        <p className="text-center sm:text-left">
          {'© '}
          {new Date().getFullYear()} {t.hero.name}
        </p>
        <p className="flex flex-wrap justify-center gap-x-4 sm:justify-end">
          <span>
            {t.footer.serverTime}: <time className="text-primary">{time}</time>
          </span>
          <span>
            {t.footer.coordinates}: {profile.coordinates}
          </span>
        </p>
      </div>
    </footer>
  )
}
