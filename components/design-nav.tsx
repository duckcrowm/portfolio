'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const links = [
  { href: '#hero-2d', label: 'Tổng quan' },
  { href: '#software-2d', label: 'Công cụ' },
  { href: '#gallery-2d', label: 'Thư viện' },
]

export function Design2dNav() {
  const [activeId, setActiveId] = useState('hero-2d')
  const router = useRouter()

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0% -80% 0%',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) setActiveId(id)
        }
      })
    }, observerOptions)

    const targets = document.querySelectorAll('section[id]')
    targets.forEach((el) => observer.observe(el))

    return () => targets.forEach((el) => observer.unobserve(el))
  }, [])

  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(href.replace('#', ''))
    } else {
      router.push(href)
    }
  }

  return (
    <nav className="mx-auto max-w-6xl px-5 mb-8 flex items-center gap-1 rounded-[2rem] border border-border bg-card/80 px-4 py-2.5 backdrop-blur-md shadow-sm">
      {links.map((link) => (
        <button
          key={link.href}
          onClick={() => handleClick(link.href)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeId === link.href.replace('#', '')
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'text-muted-foreground hover:bg-accent hover:text-foreground hover:bg-accent/50'
          }`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  )
}
