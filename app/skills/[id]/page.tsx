import Image from 'next/image'
import { BackButton } from '@/components/back-button'
import { SubNavbar } from '@/components/sub-navbar'
import { skillImages, type SkillId } from '@/lib/portfolio-data'

export const metadata = {
  title: 'Thiết kế ảnh 2D thành thạo - Phan Đức Portfolio',
}

export default async function SkillGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const skillId = id as SkillId
  const images = skillImages[skillId as keyof typeof skillImages] || []

  const stats = [
    { value: '2', label: 'Dự án' },
    { value: '50+', label: 'Ấn phẩm thiết kế' },
    { value: '98%', label: 'Mức độ hài lòng' },
  ]

  const softwareTags = ['Photoshop', 'Canva']

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 min-h-[calc(100vh-200px)]">
      <nav className="mb-8 flex items-center gap-2">
        <BackButton />
      </nav>

      <SubNavbar />

      {/* Hero Section */}
      <section id="hero-2d" className="relative z-10 mb-16">
        <div className="absolute top-0 right-0 w-72 p-6 rounded-xl border border-border bg-card shadow-lg shadow-primary/10">
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {['Pallate', 'Kỹ năng chuyên môn'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-display font-bold tracking-tight sm:text-6xl leading-tight">
            Thiết kế ảnh 2D
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Thiết kế đồ họa 2D là cách mình muốn truyền tải thông điệp một cách trực quan nhất của thương hiệu đến với công chúng - từ logo, poster, bài đăng mạng xã hội đến tài liệu marketing, giúp doanh nghiệp truyền tải thông điệp trực quan, đồng nhất và hấp dẫn trên mọi kênh truyền thông.
          </p>
        </div>
      </section>

      {/* Software Section */}
      <section id="software-2d" className="mb-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-xs">⚙️</span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            Bộ công cụ tương ứng
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-16">
          {softwareTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2.5 rounded-full border border-border bg-background text-sm font-mono font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-2d" className="mb-20">
        <div className="mb-6 flex items-baseline gap-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">Thư Viện Thiết Kế 2D</h2>
          <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
            {images.length} dự án
          </span>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-xs">🟢</span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            Mộc Hương
          </span>
        </div>

        {images.length === 0 ? (
          <p className="text-sm text-muted-foreground">Chưa có ảnh nào được thêm vào.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 group"
              >
                <Image
                  src={src}
                  alt={`Thiết kế 2D ${index + 1}`}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 90vw"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-end p-4">
                  <span className="text-sm font-mono font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Xem chi tiết
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  )
}
