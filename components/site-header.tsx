'use client'

import { Home, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
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
  const menuButton = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const [activeHref, setActiveHref] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

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
    <nav
      ref={navRef}
      aria-label="Điều hướng chính"
      className="pointer-events-none fixed inset-x-3 top-3 z-50 flex items-center justify-between gap-2 sm:pointer-events-auto sm:inset-x-auto sm:top-5 sm:left-1/2 sm:-translate-x-1/2 sm:rounded-[2rem] sm:border sm:border-border sm:bg-card/80 sm:px-4 sm:py-2 sm:shadow-sm sm:backdrop-blur-md"
    >
      <div
        role="group"
        aria-label="Ngôn ngữ"
        className="pointer-events-auto flex w-fit items-center rounded-full border border-border p-0.5 font-mono text-[11px] font-semibold max-sm:bg-card/90 max-sm:backdrop-blur-md sm:order-last"
      >
        {languages.map((l) => (
          <button
            key={l.value}
            type="button"
            aria-pressed={lang === l.value}
            onClick={() => setLang(l.value)}
            className={cn(
              'min-h-11 min-w-11 rounded-full px-2.5 py-1.5 transition-colors whitespace-nowrap sm:min-h-8',
              lang === l.value
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        ref={menuButton}
        type="button"
        aria-label={menuOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
        aria-controls={menuId}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="touch-target pointer-events-auto grid place-items-center rounded-[8px] border border-border bg-card/90 text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-primary sm:hidden"
      >
        {menuOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <span aria-hidden="true" className="grid gap-[5px]">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        )}
      </button>

      <div
        id={menuId}
        className={cn(
          'gap-2 sm:flex sm:items-center',
          'pointer-events-auto max-sm:absolute max-sm:top-[calc(100%+0.5rem)] max-sm:right-0 max-sm:max-h-[calc(100dvh-5rem)] max-sm:w-64 max-sm:max-w-[calc(100vw-1.5rem)] max-sm:flex-col max-sm:overflow-y-auto max-sm:rounded-2xl max-sm:border max-sm:border-border max-sm:bg-card max-sm:p-2 max-sm:shadow-lg',
          menuOpen ? 'max-sm:flex' : 'max-sm:hidden',
        )}
      >
        <Link
          href={onHomePage ? '#home' : '/#home'}
          aria-current={onHomePage && activeHref === '#home' ? 'location' : undefined}
          onClick={() => setMenuOpen(false)}
          className={cn(navLinkClass, 'max-sm:min-h-11 max-sm:rounded-xl')}
        >
          <Home className="size-3.5" aria-hidden="true" />
          Trang chủ
        </Link>

        <div className="flex gap-1 max-sm:flex-col sm:items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={onHomePage ? item.href : `/${item.href}`}
              aria-current={onHomePage && activeHref === item.href ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
              className={cn(navLinkClass, 'max-sm:min-h-11 max-sm:rounded-xl')}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
