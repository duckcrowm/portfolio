'use client'

import Image from 'next/image'
import { ArrowDown, Sun } from 'lucide-react'
import { HeroCategoryTabs } from '@/components/hero-category-tabs'
import { useLanguage } from '@/components/language-provider'
import { TypedRole } from '@/components/typed-role'
import { Typewriter } from '@/components/typewriter'

export function HeroSection() {
  const { lang, t } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-10 pt-14 md:grid-cols-[1.3fr_1fr] md:pt-16">
        <div className="relative z-10 flex flex-col gap-6 py-2">
          <p className="font-mono text-lg font-semibold">
            <span className="text-foreground">{`> ${h.greeting} `}</span>
            <span className="text-primary">{h.name}</span>
          </p>
          <h1 className="text-balance font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {h.headline}
          </h1>
          <p className="font-display text-2xl font-medium text-muted-foreground sm:text-3xl">
            <TypedRole key={lang} roles={h.roles} />
          </p>
          <div className="flex max-w-xl flex-col gap-4 text-pretty text-base leading-relaxed text-muted-foreground">
            <p className="text-primary">{h.hello}</p>
            <p>
              {h.introBefore}
              <span className="text-primary">{h.highlight}</span>
              {h.introAfter}
            </p>
            <p>{h.intro2}</p>
            <p className="flex items-center gap-2 font-medium text-foreground">
              {h.motto}
              <Sun className="size-4 shrink-0 text-primary" aria-hidden="true" />
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="touch-target rounded-full bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#projects"
              className="touch-target flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
            >
              {h.ctaSecondary}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-sm md:mx-0 md:max-w-none bg-glow">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_color-mix(in_oklab,var(--primary)_25%_,transparent)_0%_,transparent_70%)] opacity-35 blur-[64px] pointer-events-none" />
          <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <div className="border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">
              <Typewriter key={lang} text={h.caption} />
            </div>
            <div className="relative min-h-[420px] flex-1">
              <Image
                src="/images/hero.jpg"
                alt={h.imageAlt}
                fill
                priority
                sizes="(min-width: 768px) 480px, 90vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pb-12">
        <HeroCategoryTabs />
      </div>
    </section>
  )
}
