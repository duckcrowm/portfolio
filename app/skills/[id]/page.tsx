import Image from 'next/image'
import { BackButton } from '@/components/back-button'
import { DreamBeforeAfterVideo } from '@/components/dream-before-after-video'
import { L } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { mocHuongChildCareDesign, mocHuongDesigns } from '@/lib/moc-huong-designs'
import { skillImages, type SkillId } from '@/lib/portfolio-data'
import { withBasePath } from '@/lib/base-path'

const designTitle = 'Thiết kế ảnh 2d & video'

export const metadata = {
  title: `${designTitle} - Phan Đức Portfolio`,
}

export function generateStaticParams() {
  return Object.keys(skillImages).map((id) => ({ id }))
}

export default async function SkillGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const skillId = id as SkillId
  const images = skillImages[skillId as keyof typeof skillImages] || []
  const isDesignGallery = id === 'design-2d'
  const designSizes = '(min-width: 1280px) 270px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'

  const stats = [
    { value: '2', label: <L vi="Dự án" en="Projects" /> },
    { value: '50+', label: <L vi="Ấn phẩm thiết kế" en="Design pieces" /> },
    { value: '98%', label: <L vi="Mức độ hài lòng" en="Satisfaction" /> },
  ]

  const softwareTags = ['Photoshop', 'Canva']

  return (
    <section className="mx-auto max-w-6xl px-5 pt-18 pb-14 sm:px-7 sm:py-24 min-h-[calc(100vh-200px)]">
      <nav className="mb-8 flex items-center gap-2">
        <BackButton />
      </nav>

      <SiteHeader onHomePage={false} />

      {/* Hero Section */}
      <section id="hero-2d" className="relative z-10 mb-10 grid items-start gap-6 sm:mb-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="order-2 w-full max-w-72 p-6 rounded-xl border border-border bg-card shadow-lg shadow-primary/10">
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
            {[
              { key: 'pallate', label: 'Pallate' },
              { key: 'skill', label: <L vi="Kỹ năng chuyên môn" en="Professional skill" /> },
            ].map(({ key, label: tag }) => (
              <span
                key={key}
                className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-balance text-4xl font-display font-bold tracking-tight sm:text-6xl leading-tight">
            <L vi={designTitle} en="2D image & video design" />
          </h1>

          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed sm:text-lg">
            <L vi={<>Thiết kế đồ họa 2D là cách mình muốn truyền tải thông điệp một cách trực quan nhất của thương hiệu đến với công chúng - từ logo, poster, bài đăng mạng xã hội đến tài liệu marketing, giúp doanh nghiệp truyền tải thông điệp trực quan, đồng nhất và hấp dẫn trên mọi kênh truyền thông.</>} en="2D graphic design is how I bring a brand's message to the public in the most visual way - from logos, posters and social posts to marketing materials - helping businesses communicate clearly, consistently and attractively across every channel." />
          </p>
        </div>
      </section>

      {/* Software Section */}
      <section id="software-2d" className="mb-10 sm:mb-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-xs">⚙️</span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            <L vi="Bộ công cụ tương ứng" en="Toolkit" />
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
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
      <section id="gallery-2d" className="mb-12 sm:mb-20">
        <div className="mb-6 flex flex-wrap items-baseline gap-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">{isDesignGallery ? <L vi="Thư viện thiết kế" en="Design library" /> : <L vi="Thư Viện Thiết Kế 2D" en="2D Design Library" />}</h2>
          <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
            {images.length} <L vi="dự án" en="projects" />
          </span>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-xs">🟢</span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            Mộc Hương
          </span>
        </div>

        {isDesignGallery ? (
          <>
            <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
              {mocHuongDesigns.map((design, index) => (
                <li key={design.src} className="image-zoom mb-4 break-inside-avoid rounded-xl border border-border bg-card">
                  <Image {...design} src={withBasePath(design.src)} alt={`Ấn phẩm thiết kế Mộc Hương ${index + 1}`} sizes={designSizes} className="block h-auto w-full" />
                </li>
              ))}
            </ul>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="image-zoom rounded-xl border border-border bg-card">
                <Image {...mocHuongChildCareDesign} src={withBasePath(mocHuongChildCareDesign.src)} alt="Mộc Hương đưa thảo mộc bản địa vào các sản phẩm chăm sóc trẻ nhỏ" sizes={designSizes} className="block h-auto w-full" />
              </div>
            </div>
          </>
        ) : images.length === 0 ? (
          <p className="text-sm text-muted-foreground"><L vi="Chưa có ảnh nào được thêm vào." en="No images added yet." /></p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={src}
                className="image-zoom group relative aspect-[4/3] rounded-xl border border-border bg-card shadow-sm transition-colors duration-300 hover:border-primary"
              >
                <Image
                  src={withBasePath(src)}
                  alt={`Thiết kế 2D ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 90vw"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 group-data-[touch-pressed]:bg-primary/20 transition-all duration-300 flex items-end p-4">
                  <span className="text-sm font-mono font-semibold text-primary opacity-0 group-hover:opacity-100 group-data-[touch-pressed]:opacity-100 transition-opacity duration-300">
                    <L vi="Xem chi tiết" en="View details" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {isDesignGallery && (
        <section id="edit-video" aria-labelledby="edit-video-title">
          <h2 id="edit-video-title" className="mb-6 text-3xl font-display font-bold tracking-tight">Edit video</h2>
          <DreamBeforeAfterVideo />
        </section>
      )}
    </section>
  )
}
