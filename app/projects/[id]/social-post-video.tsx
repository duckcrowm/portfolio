'use client'

import { Play, X } from 'lucide-react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { withBasePath } from '@/lib/base-path'

export function SocialPostVideo({ src, title, className }: { src: string; title: string; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const player = useRef<HTMLVideoElement>(null)
  const videoSrc = withBasePath(src)

  function openVideo() {
    dialog.current?.showModal()
    void player.current?.play().catch(() => {
      // Native controls remain available if the browser declines playback.
    })
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`Phát video ${title}`}
        onClick={openVideo}
        className={cn('image-zoom group relative block aspect-square w-full overflow-hidden rounded-2xl border border-border bg-black hover:border-primary', className)}
      >
        <video aria-hidden="true" src={videoSrc} preload="metadata" muted playsInline className="pointer-events-none absolute inset-0 size-full object-contain" />
        <span aria-hidden="true" className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
        <span aria-hidden="true" className="absolute inset-0 grid place-items-center transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="rounded-full border border-white/30 bg-black/75 p-3 text-white">
            <Play className="size-6" fill="currentColor" />
          </span>
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label={`Video ${title}`}
        onClose={() => player.current?.pause()}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-black text-white"
      >
        <video
          ref={player}
          aria-label={title}
          src={videoSrc}
          controls
          playsInline
          preload="none"
          className="absolute inset-x-0 top-14 h-[calc(100%-3.5rem)] w-full object-contain"
        />
        <button
          type="button"
          aria-label="Đóng video"
          onClick={() => dialog.current?.close()}
          className="absolute top-3 right-3 grid size-11 place-items-center rounded-full border border-white/30 bg-black/75 transition-colors hover:bg-white hover:text-black"
        >
          <X className="size-6" aria-hidden="true" />
        </button>
      </dialog>
    </>
  )
}
