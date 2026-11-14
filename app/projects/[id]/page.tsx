import { BackButton } from '@/components/back-button'
import { SubNavbar } from '@/components/sub-navbar'
import { CheckCircle2 } from 'lucide-react'
import { ProjectType } from '@/lib/portfolio-data'

export const metadata = {
  title: 'Chi tiết dự án - Phan Đức Portfolio',
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const projects: Array<{
    id: string
    type: ProjectType
    title: string
    subtitle: string
    role: string
    company: string
    period: string
    tasks: string[]
    results: string[]
  }> = [
    {
      id: 'moc-huong',
      type: 'work',
      title: 'Thiết kế ảnh 2D',
      subtitle: 'Dự án tại công ty',
      role: 'Content Executive',
      company: 'Công ty TNHH Mộc Hương',
      period: '11/2023 - 08/2024',
      tasks: [
        'Phụ trách triển khai kế hoạch nội dung tổng thể hàng tháng trên 3 kênh (Facebook, LinkedIn, Zalo Community)',
        'Quản lý Website công ty và đề xuất chiến lược hợp nhất thương hiệu cho hệ thống social media',
        'Phối hợp cùng Tech Lead sản xuất marketing material phục vụ đội sales và đối tác',
        'Lập kế hoạch và triển khai sự kiện offline/online, thiết kế trọn bộ ấn phẩm POSM',
      ],
      results: [
        'Tổ chức thành công Workshop (20+ khách) và Webinar (30+ khách)',
        'Website +13% phiên truy cập; LinkedIn +68.9% clicks; Facebook +162.5% tương tác',
      ],
    },
    {
      id: 'thuong-hieu-trang-suc',
      type: 'freelance',
      title: 'Thiết kế ảnh 2D',
      subtitle: 'Dự án ngắn hạn / Freelancer',
      role: 'Content & Media Marketing',
      company: 'Thương hiệu Trang sức',
      period: '03/2025 - 05/2025',
      tasks: ['Lên lịch và nội dung cho Post', 'Hỗ trợ thiết kế cùng Designer', 'Quay chụp sản phẩm tại cửa hàng'],
      results: ['Tăng 15.4% lượt tiếp cận, 46.2% lượt tương tác Facebook trong 2 tháng'],
    },
  ]

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 min-h-[calc(100vh-200px)]">
        <nav className="mb-8 flex items-center gap-2">
          <BackButton />
        </nav>
        <SubNavbar />
        <h1 className="text-5xl font-display font-bold tracking-tight">Không tìm thấy dự án</h1>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 min-h-[calc(100vh-200px)]">
      <nav className="mb-8 flex items-center gap-2">
        <BackButton />
      </nav>

      <SubNavbar />

      <div className="relative z-10 mb-16">
        <div className="absolute top-0 right-0 w-72 p-6 rounded-xl border border-border bg-card shadow-lg shadow-primary/10">
          <div className="space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-primary">{project.period}</span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Thời gian
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-primary">{project.role}</span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Vị trí
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-primary">{project.company}</span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Công ty
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono font-semibold text-primary"
            >
              {project.type === 'work' ? 'Dự án tại công ty' : 'Dự án ngắn hạn'}
            </span>
          </div>

          <h1 className="text-5xl font-display font-bold tracking-tight sm:text-6xl leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Dự án {project.role} tại {project.company}, thực hiện trong khoảng thời gian {project.period}.
          </p>
        </div>
      </div>

      <div className="mb-16 flex items-baseline gap-2">
        <h2 className="text-3xl font-display font-bold tracking-tight">Nhiệm vụ</h2>
      </div>
      <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground mb-16">
        {project.tasks.map((task) => (
          <li key={task} className="flex gap-2">
            <span aria-hidden="true" className="text-primary">-</span>
            {task}
          </li>
        ))}
      </ul>

      <div className="mb-6 flex items-baseline gap-2">
        <h2 className="text-3xl font-display font-bold tracking-tight">Kết quả</h2>
      </div>
      <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
        {project.results.map((result) => (
          <li key={result} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {result}
          </li>
        ))}
      </ul>
    </section>
  )
}
