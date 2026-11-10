'use client'

import { useCategory } from '@/components/category-provider'
import { useLanguage } from '@/components/language-provider'
import { categoryIds } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function HeroCategoryTabs() {
  const { t } = useLanguage()
  const { activeCategory, setActiveCategory } = useCategory()

  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-xs text-muted-foreground">{`// ${t.filter.hint}`}</p>
      <div
        role="group"
        aria-label={t.filter.tabsLabel}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {categoryIds.map((id) => {
          const isActive = id === activeCategory
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(id)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 font-mono text-sm transition-all',
                isActive
                  ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30'
                  : 'border-transparent bg-muted text-muted-foreground hover:bg-accent hover:text-foreground',
              )}
            >
              {t.categories[id]}
            </button>
          )
        })}
      </div>
    </div>
  )
}
