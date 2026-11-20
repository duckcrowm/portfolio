'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from '@/lib/portfolio-data'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

const storageKey = 'portfolio-lang'
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('vi')

  // Restore the chosen language so it survives full page loads (static export pages).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved === 'vi' || saved === 'en') setLangState(saved)
    } catch {
      // Storage can be blocked; Vietnamese stays the default.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // Ignore: the choice still applies for this page view.
    }
  }, [])

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Renders the Vietnamese or English variant; usable from server components. */
export function L({ vi, en }: { vi: ReactNode; en: ReactNode }) {
  const { lang } = useLanguage()
  return <>{lang === 'en' ? en : vi}</>
}
