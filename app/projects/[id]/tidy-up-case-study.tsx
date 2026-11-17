import { ExternalLink } from 'lucide-react'
import { withBasePath } from '@/lib/base-path'
import { projectCovers } from '@/lib/portfolio-data'
import { ProjectCaseStudyLayout, projectSectionHeadingClass as headingClass } from './project-case-study-layout'
import { ProjectImageGallery } from './project-image-gallery'

const imageDirectory = '/images/projects/tidy-up'
const analysisHtml = withBasePath(`${imageDirectory}/phan-tich.html`)
const reportDocId = '1gWhIbeCUHyboF-I1s0UM1KQwFOS-yRfJdpk5fCtkMvo'
const reportUrl = `https://docs.google.com/document/d/${reportDocId}/edit?usp=sharing`
const reportPreviewUrl = `https://docs.google.com/document/d/${reportDocId}/preview`
const appendixLinks = [
  {
    label: 'Dữ liệu thô từ phản hồi của người chơi',
    href: 'https://docs.google.com/spreadsheets/d/1iTiVUyrft_H4eyPH-4ohW5JPQBYsXcLUEbQgPkE-04k/edit?usp=sharing',
  },
  {
    label: 'Dữ liệu đã lọc từ phản hồi của người chơi',
    href: 'https://docs.google.com/spreadsheets/d/1jZU9_3t00jlrfjOkRwBPTZjISXhfS5qPzG0D43V1Vuc/edit?usp=sharing',
  },
]

const processImages: [string, ...string[]] = [
  `${imageDirectory}/process/slide-01.jpg`,
  ...Array.from({ length: 10 }, (_, index) => `${imageDirectory}/process/slide-${String(index + 2).padStart(2, '0')}.jpg`),
]

const linkButtonClass = 'inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-semibold transition-colors hover:border-primary hover:text-primary'

function LinkButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkButtonClass}>
      {children}
      <ExternalLink className="size-4" aria-hidden="true" />
    </a>
  )
}

export function TidyUpCaseStudy({ project }: { project: { company: string } }) {
  const details = [
    { label: 'Sản phẩm', value: 'Tidy Up - Satisfeel ASMR' },
    { label: 'Công ty', value: project.company },
    { label: 'Loại dự án', value: 'Mini Project' },
    { label: 'Ngành hàng', value: 'Mobile Game' },
    { label: 'Vị trí', value: 'Phân tích dữ liệu' },
  ]

  const bodyClass = 'text-sm leading-relaxed text-muted-foreground sm:text-base [&_strong]:font-semibold [&_strong]:text-foreground'

  return (
    <ProjectCaseStudyLayout
      title={projectCovers.tidyUp.title}
      banner={{
        src: projectCovers.tidyUp.cover,
        alt: 'Tidy Up - Satisfeel ASMR: bàn nướng BBQ với các món ăn được sắp xếp gọn gàng',
        width: 1280,
        height: 720,
      }}
      details={details}
    >
      <section className="mb-16 sm:mb-20">
        <h2 className={headingClass}><span><span className="text-primary">Tổng quan</span> dự án</span></h2>
        <div className={`max-w-3xl space-y-4 ${bodyClass}`}>
          <p>
            <strong>Tidy Up - Satisfeel ASMR</strong> là tựa game sắp xếp đồ vật mang cảm giác thư giãn của <strong>PixOn Games</strong>.
          </p>
          <p>
            Phân tích <strong>317 review</strong> của người chơi trên App Store và Google Play (US, 01–11/2026) cho game Tidy Up – Satisfeel ASMR (<strong>12M+ lượt tải</strong>) của PixOn Games. Mình tự viết script thu thập <strong>1.100 review</strong>, phân loại theo <strong>9 nhóm vấn đề</strong> cùng cảm xúc, mức ưu tiên và bộ phận phụ trách. Kết quả là báo cáo <strong>5 insight</strong> kèm đề xuất hành động, trong đó phát hiện lỗi chặn người chơi ở <strong>level 2</strong> (13 review, kéo dài 02–10/2026) và quảng cáo là nhóm phàn nàn lớn nhất (<strong>33%</strong>).
          </p>
        </div>
      </section>

      <div className="space-y-12 sm:space-y-16">
        <section>
          <h2 className={headingClass}><span><span className="text-primary">Quy trình</span> thực hiện</span></h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-10">
            <ProjectImageGallery title="Quy trình thực hiện" images={processImages} width={1600} height={900} />
            <p className={bodyClass}>
              Đây là toàn bộ quy trình mình thực hiện cho <strong>Mini Project | Tidy Up - Satisfeel ASMR</strong>; bao gồm 5 bước: <strong>Chọn game - Thu thập - Phân loại - Phân tích - Báo cáo</strong>.
            </p>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><span><span className="text-primary">Phân tích</span> chi tiết</span></h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-10">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary">
                <iframe
                  src={analysisHtml}
                  title="Phân tích review Tidy Up"
                  loading="lazy"
                  className="block aspect-video w-full"
                />
              </div>
              <div className="flex justify-center">
                <LinkButton href={analysisHtml}>Xem toàn màn hình</LinkButton>
              </div>
            </div>
            <p className={bodyClass}>
              Phân tích các số liệu và thể hiện trực quan trên <strong>Pivot Table</strong> | <strong>53%</strong> tiêu cực · <strong>33%</strong> nhắc quảng cáo · <strong>13</strong> review báo kẹt level 2 · <strong>22</strong> review chê nội dung sau level 200
            </p>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><span><span className="text-primary">Báo cáo</span> chi tiết</span></h2>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <iframe
                src={reportPreviewUrl}
                title="Báo cáo Tidy Up - Satisfeel ASMR"
                loading="lazy"
                className="block h-[70vh] min-h-[480px] w-full sm:h-[800px]"
              />
            </div>
            <LinkButton href={reportUrl}>Báo cáo Tidy Up - Satisfeel ASMR</LinkButton>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><span className="text-primary">Phụ lục</span></h2>
          <div className="flex flex-wrap gap-3">
            {appendixLinks.map(({ label, href }) => (
              <LinkButton key={href} href={href}>{label}</LinkButton>
            ))}
          </div>
        </section>
      </div>
    </ProjectCaseStudyLayout>
  )
}
