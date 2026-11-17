'use client'

import { ArrowUpRight, Mail, Phone, UserRound as Linkedin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function ContactSection() {
  const { t } = useLanguage()
  const c = t.contact

  const channels = [
    { label: c.email, value: profile.email, icon: Mail },
    { label: c.phone, value: profile.phone, icon: Phone },
    { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, icon: Linkedin },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-18 border-t border-border sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-7 sm:py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="bg-grid flex flex-col gap-4 p-5 sm:p-12">
            <p className="font-mono text-xs text-muted-foreground">{'// contact'}</p>
            <h2 id="contact-title" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {c.title}
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
          <ul className="grid gap-px border-t border-border bg-border lg:grid-cols-[1.2fr_0.8fr_1fr]">
            {channels.map((ch) => {
              const Channel = ch.href ? 'a' : 'div'
              return (
                <li key={ch.label} className="min-w-0 bg-card">
                  <Channel
                    {...(ch.href ? { href: ch.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={cn(
                      'group flex items-center gap-3 p-4 sm:gap-4 sm:p-8',
                      ch.href && 'transition-all hover:bg-accent hover:shadow-md hover:shadow-primary/5',
                    )}
                  >
                    <span className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-primary sm:size-10',
                      ch.href && 'transition-colors group-hover:border-primary group-hover:bg-primary/10',
                    )}>
                      <ch.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="font-mono text-xs text-muted-foreground">{ch.label}</span>
                      <span className="font-medium wrap-anywhere text-foreground max-sm:text-sm">{ch.value}</span>
                    </span>
                    {ch.href && (
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </Channel>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
