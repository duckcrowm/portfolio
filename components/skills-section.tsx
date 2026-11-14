'use client'

import { Camera, ChevronRight, GraduationCap, Palette, Sparkles, Target, type LucideIcon } from 'lucide-react'
import { matchesCategory, useCategory } from '@/components/category-provider'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { ToolIcon } from '@/components/tool-icon'
import { tools, type SkillId } from '@/lib/portfolio-data'

const skillIcons: Record<SkillId, LucideIcon> = {
  'design-2d': Palette,
  campaign: Target,
  shooting: Camera,
  ai: Sparkles,
  learning: GraduationCap,
}

export function SkillsSection() {
  const { t } = useLanguage()
  const { activeCategory } = useCategory()
  const s = t.skills

  const visibleCards = s.cards.filter((card) => matchesCategory(card.categories, activeCategory))

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24">
        <SectionHeading id="skills-title" title={s.title} code={s.code} />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">{s.toolsTitle}</h3>
            <ul className="flex flex-col gap-4">
              {tools.map((tool) => (
                <li key={tool.id} className="group">
                  <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                    <span className="flex items-center gap-2.5">
                      <ToolIcon id={tool.id} className="text-primary" />
                      {tool.name}
                    </span>
                    <span className="text-muted-foreground">{tool.level}%</span>
                  </div>
                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-muted"
                    role="progressbar"
                    aria-label={s.toolLevel(tool.name)}
                    aria-valuenow={tool.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full rounded-full bg-primary transition-all duration-500 group-hover:bg-primary/80" style={{ width: `${tool.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">{s.skillsTitle}</h3>
            <p className="mb-6 mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {s.skillsHint}
            </p>
            {activeCategory !== 'all' ? (
              <p className="mb-4 font-mono text-xs text-primary">{t.filter.active(t.categories[activeCategory])}</p>
            ) : null}
            {visibleCards.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t.filter.empty}</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {visibleCards.map((card) => {
                  const Icon = skillIcons[card.id]
                  const isLinkCard = !['campaign', 'shooting', 'ai', 'learning'].includes(card.id)

                  return (
                    <li key={card.id}>
                      {isLinkCard ? (
                        <a
                          href={`/skills/${card.id}`}
                          className="group flex w-full items-center gap-4 rounded-xl border border-border bg-background/40 px-5 py-4 text-left transition-colors hover:border-primary hover:bg-accent/50"
                        >
                          <Icon className="size-5 shrink-0 text-primary transition-transform group-hover:rotate-90" aria-hidden="true" />
                          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                            <span
                              className={
                                card.subtitle ? 'text-base font-medium text-primary' : 'text-base text-foreground'
                              }
                            >
                              {card.title}
                            </span>
                            {card.subtitle ? (
                              <span className="text-sm text-muted-foreground">{card.subtitle}</span>
                            ) : null}
                          </span>
                          <ChevronRight
                            className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        <div className="group flex w-full items-center gap-4 rounded-xl border border-border bg-background/40 px-5 py-4 text-left transition-colors hover:border-primary hover:bg-accent/50">
                          <Icon className="size-5 shrink-0 text-primary transition-transform group-hover:rotate-90" aria-hidden="true" />
                          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                            <span
                              className={`text-base font-medium ${['campaign', 'shooting', 'ai', 'learning'].includes(card.id) ? 'text-black' : 'text-primary'}`}
                            >
                              {card.title}
                            </span>
                            {card.subtitle ? (
                              <span className="text-sm text-muted-foreground">{card.subtitle}</span>
                            ) : null}
                          </span>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
