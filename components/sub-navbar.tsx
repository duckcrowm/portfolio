'use client'

import { Home, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
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

export function SubNavbar() {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang } = useLanguage()

  const handleHome = () => {
    router.push('/')
  }

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 rounded-[2rem] border border-border px-4 py-2 bg-card/80 backdrop-blur-md shadow-sm shadow-slate-200/50">
      <div className="flex items-center gap-2">
        <button
          onClick={handleHome}
          className="flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-mono font-medium text-muted-foreground transition-all hover:bg-accent hover:text-primary hover:border-primary"
        >
          <Home className="size-3.5" aria-hidden="true" />
          Trang chủ
        </button>

        <div className="flex items-center gap-1">
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
          className="flex h-9 items-center rounded-full border border-border p-0.5 font-mono text-[11px] font-semibold"
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

        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="touch-target flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Đổi giao diện sáng/tối"
        >
          <Sun className="size-4 dark:hidden" aria-hidden="true" />
          <Moon className="hidden size-4 dark:block" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}
