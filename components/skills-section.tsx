'use client'

import { Camera, ChevronRight, GraduationCap, Palette, Sparkles, Target, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { matchesCategory, useCategory } from '@/components/category-provider'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { SkillGalleryModal } from '@/components/skill-gallery-modal'
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
  const [selectedId, setSelectedId] = useState<SkillId | null>(null)

  const visibleCards = s.cards.filter((card) => matchesCategory(card.categories, activeCategory))
  const selectedCard = s.cards.find((card) => card.id === selectedId)

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="skills-title" title={s.title} code={s.code} />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">{s.toolsTitle}</h3>
            <ul className="flex flex-col gap-4">
              {tools.map((tool) => (
                <li key={tool.id}>
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
                    <div className="h-full rounded-full bg-primary" style={{ width: `${tool.level}%` }} />
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
                  return (
                    <li key={card.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(card.id)}
                        aria-haspopup="dialog"
                        className="group flex w-full items-center gap-4 rounded-xl border border-border bg-background/40 px-5 py-4 text-left transition-colors hover:border-primary"
                      >
                        <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
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
                          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      {selectedCard ? <SkillGalleryModal card={selectedCard} onClose={() => setSelectedId(null)} /> : null}
    </section>
  )
}
