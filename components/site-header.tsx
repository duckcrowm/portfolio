'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

const languages: { value: 'vi' | 'en'; label: string }[] = [
  { value: 'vi', label: 'VIE' },
  { value: 'en', label: 'ENG' },
]

const navItems = [
  { href: '#skills', label: 'Kỹ năng' },
  { href: '#projects', label: 'Dự án' },
  { href: '#experience', label: 'Kinh nghiệm' },
  { href: '#contact', label: 'Liên hệ' },
]

const navLinkClass = 'relative isolate flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary aria-[current=location]:text-primary before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-primary/15 before:opacity-0 before:content-[""] motion-safe:before:transition-opacity aria-[current=location]:before:opacity-100'

export function SiteHeader({ onHomePage = true }: { onHomePage?: boolean }) {
  const { lang, setLang } = useLanguage()
  const navRef = useRef<HTMLElement>(null)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    if (!onHomePage) return
    const nav = navRef.current
    if (!nav) return

    const sections = navItems.flatMap(({ href }) => {
      const section = document.getElementById(href.slice(1))
      return section ? [{ href, section }] : []
    })
    let frame: number | null = null

    const update = () => {
      frame = null
      const readingLine = nav.getBoundingClientRect().bottom + 36
      let current = '#home'

      for (const { href, section } of sections) {
        if (section.getBoundingClientRect().top > readingLine) break
        current = href
      }

      const scrollEnd = document.documentElement.scrollHeight - window.innerHeight
      if (scrollEnd > 0 && window.scrollY >= scrollEnd - 2) {
        current = sections.at(-1)?.href ?? current
      }
      setActiveHref(current)
    }

    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(nav)
    const main = document.querySelector('main')
    if (main) resizeObserver.observe(main)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    scheduleUpdate()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [onHomePage])

  return (
    <nav ref={navRef} className="fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-[2rem] border border-border bg-card/80 px-4 py-2 shadow-sm shadow-slate-200/50 backdrop-blur-md max-sm:top-2 max-sm:w-[calc(100%-1.5rem)] max-sm:rounded-2xl max-sm:px-2">
      <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:gap-y-1">
        <Link
          href={onHomePage ? '#home' : '/#home'}
          aria-current={onHomePage && activeHref === '#home' ? 'location' : undefined}
          className={navLinkClass}
        >
          <Home className="size-3.5" aria-hidden="true" />
          Trang chủ
        </Link>

        <div className="flex items-center gap-1 max-sm:order-last max-sm:w-full max-sm:justify-between max-sm:gap-0">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={onHomePage ? item.href : `/${item.href}`}
              aria-current={onHomePage && activeHref === item.href ? 'location' : undefined}
              className={cn(navLinkClass, 'max-sm:px-2')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          role="group"
          aria-label="Ngôn ngữ"
          className="flex h-9 items-center rounded-full border border-border p-0.5 font-mono text-[11px] font-semibold max-sm:ml-auto"
        >
          {languages.map((l) => (
            <button
              key={l.value}
              type="button"
              aria-pressed={lang === l.value}
              onClick={() => setLang(l.value)}
              className={cn(
                'touch-target rounded-full px-2.5 py-1.5 transition-colors whitespace-nowrap',
                lang === l.value
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
