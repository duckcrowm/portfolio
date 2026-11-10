'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { CategoryId } from '@/lib/portfolio-data'

type CategoryContextValue = {
  activeCategory: CategoryId
  setActiveCategory: (category: CategoryId) => void
}

const CategoryContext = createContext<CategoryContextValue | null>(null)

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')
  const value = useMemo(() => ({ activeCategory, setActiveCategory }), [activeCategory])

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}

export function useCategory() {
  const ctx = useContext(CategoryContext)
  if (!ctx) throw new Error('useCategory must be used within CategoryProvider')
  return ctx
}

export function matchesCategory(categories: CategoryId[], active: CategoryId) {
  return active === 'all' || categories.includes(active)
}
