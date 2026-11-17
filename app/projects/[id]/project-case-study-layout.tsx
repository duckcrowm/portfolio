import Image from 'next/image'
import type { ReactNode } from 'react'
import { BackButton } from '@/components/back-button'
import { SiteHeader } from '@/components/site-header'
import { withBasePath } from '@/lib/base-path'

export const projectSectionHeadingClass = 'mb-6 flex items-center gap-3 font-display text-3xl font-bold tracking-tight sm:text-4xl before:h-px before:w-8 before:shrink-0 before:bg-primary'

export function ProjectCaseStudyLayout({
  title,
  banner,
  details,
  children,
}: {
  title: string
  banner: { src: string; alt: string; width: number; height: number }
  details?: { label: string; value: string }[]
  children: ReactNode
}) {
  return (
    <main className="pt-18 sm:pt-24">
      <SiteHeader onHomePage={false} />

      <div className="image-zoom border-y border-border">
        <Image
          {...banner}
          src={withBasePath(banner.src)}
          priority
          sizes="(min-width: 1920px) 1920px, 100vw"
          className="mx-auto block h-auto w-full max-w-[1920px]"
        />
      </div>

      <article className="mx-auto max-w-7xl px-5 pt-6 pb-14 sm:px-8 sm:pt-12 sm:pb-28">
        <BackButton />

        <header className="mt-5 mb-8 sm:mt-7 sm:mb-12">
          <h1 className="mb-7 font-display text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          {details && (
            <dl className="grid grid-cols-2 gap-y-5 rounded-2xl border border-dashed border-primary/35 bg-card px-2 py-5 text-center md:grid-cols-5 md:py-6">
              {details.map(({ label, value }) => (
                <div key={label} className="px-2 max-md:last:col-span-2 md:px-3">
                  <dt className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">{label}</dt>
                  <dd className="mt-1.5 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        {children}
      </article>
    </main>
  )
}
