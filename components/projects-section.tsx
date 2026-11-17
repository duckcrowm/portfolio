'use client'

import { ArrowRight, Briefcase, Laptop } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { matchesCategory, useCategory } from '@/components/category-provider'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import type { Project, ProjectType } from '@/lib/portfolio-data'
import { withBasePath } from '@/lib/base-path'
import { cn } from '@/lib/utils'

type Filter = 'all' | ProjectType

const groupTypes: ProjectType[] = ['work', 'freelance']

export function ProjectsSection() {
  const { t, lang } = useLanguage()
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
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-18 border-t border-border sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-7 sm:py-24">
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
                      <p className="mt-1 font-mono text-xs wrap-anywhere text-muted-foreground">{`// ${group.code}`}</p>
                    </div>
                  </div>
                  <ol className="grid gap-6 md:grid-cols-2">
                    {items.map((item) => (
                      <ProjectCard key={item.id} item={item} detailLabel={lang === 'vi' ? 'Xem chi tiết' : 'View details'} />
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

function ProjectCard({ item, detailLabel }: { item: Project; detailLabel: string }) {
  return (
    <li className="flex flex-col gap-3">
      <h4 id={`project-title-${item.id}`} className="font-display text-lg font-semibold">
        {item.title}
      </h4>
      <Link
        href={`/projects/${item.id}`}
        aria-labelledby={`project-title-${item.id}`}
        className="image-zoom group relative block aspect-video rounded-xl border border-border bg-muted transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <Image
          src={withBasePath(item.cover)}
          alt=""
          fill
          sizes="(min-width: 1280px) 540px, (min-width: 768px) 45vw, 90vw"
          className="object-cover"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
        <span className="absolute top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-sm transition-opacity pointer-fine:opacity-0 group-hover:text-primary group-hover:opacity-100 group-focus-visible:opacity-100">
          {detailLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </Link>
    </li>
  )
}
