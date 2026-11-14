'use client'

import { Briefcase, CheckCircle2, Laptop } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { matchesCategory, useCategory } from '@/components/category-provider'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import type { Project, ProjectType } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

type Filter = 'all' | ProjectType

const groupTypes: ProjectType[] = ['work', 'freelance']

export function ProjectsSection() {
  const { t } = useLanguage()
  const p = t.projects
  const { activeCategory } = useCategory()
  const [filter, setFilter] = useState<Filter>('all')

  const visibleItems = p.items.filter((item) => matchesCategory(item.categories, activeCategory))

  const tabs: { value: Filter; label: string; count: number }[] = [
    { value: 'all', label: p.all, count: visibleItems.length },
    ...groupTypes.map((type) => ({
      value: type,
      label: p.groups[type].title,
      count: visibleItems.filter((e) => e.type === type).length,
    })),
  ]

  const groups = groupTypes
    .filter((type) => filter === 'all' || filter === type)
    .map((type) => ({ type, items: visibleItems.filter((e) => e.type === type) }))
    .filter((group) => group.items.length > 0)

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24">
        <SectionHeading id="projects-title" title={p.title} code={p.code} />

        <div role="tablist" aria-label={p.filterAria} className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={filter === tab.value}
              onClick={() => setFilter(tab.value)}
              className={cn(
                'rounded-full border px-4 py-2 font-mono text-xs transition-all touch-target',
                filter === tab.value
                  ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-accent/50',
              )}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {activeCategory !== 'all' ? (
          <p className="-mt-6 mb-6 font-mono text-xs text-primary">{t.filter.active(t.categories[activeCategory])}</p>
        ) : null}

        {groups.length === 0 ? <p className="text-sm text-muted-foreground">{t.filter.empty}</p> : null}

        <div className="flex flex-col gap-16">
          {groups.map(({ type, items }) => {
              const group = p.groups[type]
              const Icon = type === 'work' ? Briefcase : Laptop
              return (
                <div key={type}>
                  <div className="mb-6 flex items-end justify-between gap-2">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
                        <Icon className="size-5 text-primary" aria-hidden="true" />
                        {group.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{`// ${group.code}`}</p>
                    </div>
                  </div>
                  <ol className="grid gap-4 md:grid-cols-2">
                    {items.map((item) => (
                      <ProjectCard key={`${item.company}-${item.period}`} item={item} resultLabel={p.result} />
                    ))}
                  </ol>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ item, resultLabel }: { item: Project; resultLabel: string }) {
  return (
    <li className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10">
      <Link
        href={`/projects/${item.id}`}
        className="flex flex-col gap-1 h-full"
      >
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-primary">{item.period}</p>
          <h4 className="font-display text-lg font-semibold">{item.role}</h4>
          <p className="text-sm text-muted-foreground">{item.company}</p>
        </div>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
          {item.tasks.map((task) => (
            <li key={task} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                {'-'}
              </span>
              {task}
            </li>
          ))}
        </ul>
        <div className="mt-auto rounded-lg bg-muted p-4">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider">{resultLabel}</p>
          <ul className="flex flex-col gap-1.5 text-sm">
            {item.results.map((result) => (
              <li key={result} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  )
}
