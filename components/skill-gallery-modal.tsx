'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { skillImages, type SkillCard } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SkillGalleryModal({ card, onClose }: { card: SkillCard; onClose: () => void }) {
  const { t } = useLanguage()
  const g = t.skills.gallery
  const images = skillImages[card.id]
  const [index, setIndex] = useState(0)
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const go = useCallback(
    (delta: number) => setIndex((current) => (current + delta + images.length) % images.length),
    [images.length],
  )

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      opener?.focus()
    }
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') return onClose()
      if (event.key === 'ArrowRight') return go(1)
      if (event.key === 'ArrowLeft') return go(-1)
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [go, onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className="flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-2xl sm:p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 id={titleId} className="font-display text-lg font-semibold text-primary">
              {card.title}
            </h3>
            {card.subtitle ? <p className="text-sm text-muted-foreground">{card.subtitle}</p> : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={g.close}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted sm:aspect-[16/10]">
          <Image
            key={images[index]}
            src={images[index]}
            alt={card.imageAlts[index] ?? card.title}
            fill
            sizes="(min-width: 768px) 720px, 95vw"
            className="object-cover"
          />
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={g.prev}
                className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-primary"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={g.next}
                className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-primary"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-mono text-xs text-muted-foreground" aria-live="polite">
            {g.counter(index + 1, images.length)}
          </p>
          <div className="flex gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={g.goTo(i + 1)}
                aria-current={i === index}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/40 hover:bg-muted-foreground',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
