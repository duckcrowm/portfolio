'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

const languages: { value: 'vi' | 'en'; label: string }[] = [
  { value: 'vi', label: 'VIE' },
  { value: 'en', label: 'ENG' },
]

const navItems = [
  { href: '/#skills', label: 'Kỹ năng' },
  { href: '/#projects', label: 'Dự án' },
  { href: '/#experience', label: 'Kinh nghiệm' },
  { href: '/#contact', label: 'Liên hệ' },
]

export function SubNavbar({ compactOnMobile = false }: { compactOnMobile?: boolean }) {
  const router = useRouter()
  const { lang, setLang } = useLanguage()

  const handleHome = () => {
    router.push('/')
  }

  return (
    <nav className={cn(
      'fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-[2rem] border border-border bg-card/80 px-4 py-2 shadow-sm shadow-slate-200/50 backdrop-blur-md',
      compactOnMobile && 'max-md:top-3 max-md:w-[calc(100%-1.5rem)] max-md:max-w-md max-md:rounded-2xl max-md:px-2',
    )}>
      <div className={cn('flex items-center gap-2', compactOnMobile && 'max-md:flex-wrap')}>
        <button
          onClick={handleHome}
          className="flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-mono font-medium text-muted-foreground transition-all hover:bg-accent hover:text-primary hover:border-primary"
        >
          <Home className="size-3.5" aria-hidden="true" />
          Trang chủ
        </button>

        <div className={cn(
          'flex items-center gap-1',
          compactOnMobile && 'max-md:order-last max-md:w-full max-md:justify-between max-md:gap-0 max-md:[&_a]:px-1.5',
        )}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-mono font-medium text-muted-foreground transition-all hover:bg-accent hover:text-primary hover:border-primary whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          role="group"
          aria-label="Ngôn ngữ"
          className={cn(
            'flex h-9 items-center rounded-full border border-border p-0.5 font-mono text-[11px] font-semibold',
            compactOnMobile && 'max-md:ml-auto',
          )}
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
