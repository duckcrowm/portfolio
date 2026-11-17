'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const controlClass = 'inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-semibold hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40'

export function ProjectImageGallery({
  title,
  images,
  width,
  height,
}: {
  title: string
  images: [string, ...string[]]
  width: number
  height: number
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [page, setPage] = useState(1)
  const hasSlides = images.length > 1

  function move(delta: number) {
    setPage((current) => Math.min(images.length, Math.max(1, current + delta)))
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => {
          setPage(1)
          dialog.current?.showModal()
        }}
        className="image-zoom group relative block w-full cursor-zoom-in rounded-2xl border border-border bg-card text-left hover:border-primary"
      >
        <Image
          src={images[0]}
          alt={hasSlides ? `Trang bìa ${title}` : title}
          width={width}
          height={height}
          sizes="(min-width: 1280px) 590px, (min-width: 768px) 48vw, 100vw"
          className="h-auto w-full"
        />
        {!hasSlides && (
          <span aria-hidden="true" className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
        )}
        <span className={cn(
          'absolute inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-sm group-hover:text-primary',
          hasSlides ? 'right-3 bottom-3' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity pointer-fine:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
        )}>
          <Maximize2 className="size-4" aria-hidden="true" />
          Xem chi tiết
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        className={cn(
          'fixed inset-0 text-foreground backdrop:bg-black/80',
          hasSlides
            ? 'm-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-6xl overflow-auto rounded-2xl border border-border bg-card p-3 shadow-2xl sm:p-5'
            : 'm-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-black text-white',
        )}
        onKeyDown={(event) => {
          if (hasSlides && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
            event.preventDefault()
            move(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        {hasSlides ? <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 id={titleId} className="font-display text-lg font-bold">{title}</h3>
            <button type="button" onClick={() => dialog.current?.close()} className={controlClass}>
              <X className="size-4" aria-hidden="true" />
              Đóng
            </button>
          </div>

          <div
            className="image-zoom relative mx-auto max-h-[calc(100dvh-11rem)] w-full rounded-lg bg-muted"
            style={{ aspectRatio: `${width} / ${height}` }}
          >
            <Image
              src={images[page - 1]}
              alt={`${title}, trang ${page}`}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <button type="button" onClick={() => move(-1)} disabled={page === 1} className={controlClass}>
              <ChevronLeft className="size-4" aria-hidden="true" />
              Quay lại
            </button>
            <p aria-live="polite" className="font-mono text-xs text-muted-foreground">{page} / {images.length}</p>
            <button type="button" onClick={() => move(1)} disabled={page === images.length} className={controlClass}>
              Tiếp theo
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div> : (
          <>
            <h3 id={titleId} className="sr-only">{title}</h3>
            <div className="image-zoom absolute inset-x-2 top-14 bottom-2 sm:inset-3">
              <Image src={images[0]} alt={title} fill unoptimized className="pointer-events-none object-contain p-[min(2.5vw,2.5dvh)]" />
            </div>
            <button
              type="button"
              aria-label="Đóng"
              onClick={() => dialog.current?.close()}
              className="absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/75 text-white transition-colors hover:bg-white hover:text-black"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </>
        )}
      </dialog>
    </>
  )
}
