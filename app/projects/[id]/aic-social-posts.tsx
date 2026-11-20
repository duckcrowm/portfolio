'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'
import { withBasePath } from '@/lib/base-path'
import { useLanguage } from '@/components/language-provider'

const socialDirectory = '/images/projects/aic-2026/social'

type Post = {
  label: { vi: string; en: string }
  caption: string
  media: { type: 'image'; file: string; alt: string } | { type: 'video'; file: string; poster: string; title: string }
}

const posts: Post[] = [
  {
    label: { vi: 'Teaser', en: 'Teaser' },
    media: { type: 'image', file: 'teaser.jpg', alt: 'Teaser Tiếp Lửa AIC 2026: sắp ra mắt 03.12, 33.000 Kiện Tướng đã hội tụ ở Mỹ Đình' },
    caption: `🔥 SẮP RA MẮT | TIẾP LỬA AIC 2026 🔥

✨ Hơn 33.000 Kiện Tướng đã cùng nhau thắp sáng Mỹ Đình trong ngày hội Liên Quân 10 tuổi.
🏆 Tháng 12 này, ngọn lửa ấy sẽ được chuyền tới AIC 2026, nơi các đại diện Việt Nam bước ra đấu trường quốc tế.
🎯 Mỗi trận đội nhà ra sân là một lần Kiện Tướng được dự đoán, chơi và nhận quà MIỄN PHÍ.

⏳ Sự kiện Tiếp Lửa AIC mở từ 03.12 tại Sảnh › Trung tâm sự kiện. Các Kiện Tướng nhớ đón chờ nhé!

#TiepLuaAIC #AIC2026 #LienQuanMobile`,
  },
  {
    label: { vi: 'Bài ra mắt', en: 'Launch post' },
    media: { type: 'image', file: 'ra-mat.jpg', alt: 'Sự kiện Tiếp Lửa chính thức bắt đầu: vào sự kiện, dự đoán mỗi ngày, chơi như tuyển thủ' },
    caption: `🔥 SỰ KIỆN MỚI | TIẾP LỬA AIC CHÍNH THỨC BẮT ĐẦU 🔥

🏆 Từ hôm nay đến hết 27.12, mỗi trận đội Việt Nam ra sân tại AIC 2026 là một lần Kiện Tướng cùng tiếp lửa cho đội nhà!

📍 Vào Sảnh › Trung tâm sự kiện › Tiếp Lửa AIC
🎯 Dự đoán đội thắng mỗi ngày: đúng càng nhiều, Quân huy càng nhiều
⚔️ Làm nhiệm vụ "Chơi như tuyển thủ" để nhận thêm Quân huy

Các Kiện Tướng vào game tiếp lửa ngay nhé!

#TiepLuaAIC #AIC2026 #LienQuanMobile`,
  },
  {
    label: { vi: 'Reels', en: 'Reels' },
    media: { type: 'video', file: 'reels.mp4', poster: 'reels-poster.jpg', title: 'Reels Tiếp Lửa AIC 2026' },
    caption: `🔥 33.000 người đã thắp lửa ở Mỹ Đình. Tháng 12, ngọn lửa ấy chuyền tới AIC 2026!

TIẾP LỬA AIC chính thức bắt đầu từ 03.12:
🎯 Dự đoán mỗi ngày: chọn đúng đội thắng, nhận ngay 20 Quân Huy
⚔️ Nhiệm vụ mỗi ngày: chơi tướng mà đội Việt Nam vừa chọn, nhận thêm 10 Quân Huy

📍 Sảnh › Trung tâm sự kiện
Bạn đặt niềm tin vào đội nào? Comment ngay 👇

#TiepLuaAIC #AIC2026 #LienQuanMobile #Garena`,
  },
]

function Caption({ text, expanded, onToggle }: { text: string; expanded: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [overflows, setOverflows] = useState(false)
  const en = useLanguage().lang === 'en'

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || expanded) return
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1)
    check()
    const observer = new ResizeObserver(check)
    observer.observe(el)
    return () => observer.disconnect()
  }, [expanded])

  return (
    <div className="flex min-w-0 shrink-0 items-start gap-2.5">
      <Image
        src={withBasePath(`${socialDirectory}/lien-quan-avatar.jpg`)}
        alt="Liên Quân Mobile"
        width={40}
        height={40}
        className="size-10 shrink-0 rounded-full border border-border object-cover"
      />
      <div className="min-w-0 flex-1 text-xs leading-5 text-muted-foreground">
        <p ref={ref} className={expanded ? 'whitespace-pre-line text-foreground' : 'line-clamp-2 whitespace-pre-line text-foreground'}>
          {text}
        </p>
        {overflows || expanded ? (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={onToggle}
            className="font-semibold text-muted-foreground hover:text-primary hover:underline"
          >
            {expanded ? (en ? 'See less' : 'Ẩn bớt') : en ? 'See more' : 'Xem thêm'}
          </button>
        ) : null}
      </div>
    </div>
  )
}

function PostCard({ label, caption, media }: Post) {
  const mediaRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [mediaHeight, setMediaHeight] = useState<number>()
  const { lang } = useLanguage()

  function toggle() {
    if (!expanded) setMediaHeight(mediaRef.current?.offsetHeight)
    setExpanded((value) => !value)
  }

  return (
    <li className={`flex flex-col gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-primary ${expanded ? '' : 'aspect-[9/16]'}`}>
      <span className="shrink-0 self-start rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
        {label[lang]}
      </span>
      <div
        ref={mediaRef}
        style={expanded && mediaHeight ? { height: mediaHeight } : undefined}
        className={`relative overflow-hidden rounded-xl border border-border bg-black ${media.type === 'image' ? 'image-zoom' : ''} ${expanded ? 'shrink-0' : 'min-h-0 flex-1'}`}
      >
        {media.type === 'image' ? (
          <Image
            src={withBasePath(`${socialDirectory}/${media.file}`)}
            alt={media.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        ) : (
          <video
            aria-label={media.title}
            src={withBasePath(`${socialDirectory}/${media.file}`)}
            poster={withBasePath(`${socialDirectory}/${media.poster}`)}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 size-full object-contain"
          />
        )}
      </div>
      <Caption text={caption} expanded={expanded} onToggle={toggle} />
    </li>
  )
}

export function AicSocialPosts() {
  return (
    <ul className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.label.vi} {...post} />
      ))}
    </ul>
  )
}
