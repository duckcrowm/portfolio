'use client'

import { useEffect } from 'react'

const holdMs = 350
const selector = '.image-zoom'

/**
 * Mobile press-and-hold effect for every `.image-zoom` element (project cards, gallery
 * images, banners…). While a finger rests on one, it gets `data-touch-pressed`, which the
 * CSS uses for the zoom/overlay. A long hold does not open the link/dialog underneath.
 *
 * Touch events (not pointer events) are used on purpose: browsers fire pointercancel on a
 * long press or when scrolling starts, which would drop the effect while the finger is down.
 */
export function TouchPress() {
  useEffect(() => {
    let pressed: HTMLElement | null = null
    let startedAt = 0
    let suppressClickUntil = 0

    function release() {
      pressed?.removeAttribute('data-touch-pressed')
      pressed = null
    }

    function onStart(event: TouchEvent) {
      if (event.touches.length > 1) return release()
      const target = (event.target as Element | null)?.closest<HTMLElement>(selector)
      if (!target || target.closest('dialog')) return
      release()
      pressed = target
      startedAt = event.timeStamp
      target.setAttribute('data-touch-pressed', '')
    }

    function onEnd(event: TouchEvent) {
      if (event.touches.length > 0 || !pressed) return
      if (event.timeStamp - startedAt >= holdMs) suppressClickUntil = performance.now() + 800
      release()
    }

    function onClick(event: MouseEvent) {
      if (event.detail > 0 && performance.now() < suppressClickUntil) {
        suppressClickUntil = 0
        event.preventDefault()
        event.stopPropagation()
      }
    }

    function onContextMenu(event: Event) {
      if (pressed) event.preventDefault()
    }

    document.addEventListener('touchstart', onStart, { passive: true })
    document.addEventListener('touchend', onEnd)
    document.addEventListener('touchcancel', onEnd)
    document.addEventListener('click', onClick, true)
    document.addEventListener('contextmenu', onContextMenu)
    return () => {
      document.removeEventListener('touchstart', onStart)
      document.removeEventListener('touchend', onEnd)
      document.removeEventListener('touchcancel', onEnd)
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('contextmenu', onContextMenu)
      release()
    }
  }, [])

  return null
}
