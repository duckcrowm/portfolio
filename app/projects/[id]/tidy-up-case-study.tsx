import { ExternalLink } from 'lucide-react'
import { L } from '@/components/language-provider'
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
    label: <L vi="Dữ liệu thô từ phản hồi của người chơi" en="Raw player review data" />,
    href: 'https://docs.google.com/spreadsheets/d/1iTiVUyrft_H4eyPH-4ohW5JPQBYsXcLUEbQgPkE-04k/edit?usp=sharing',
  },
  {
    label: <L vi="Dữ liệu đã lọc từ phản hồi của người chơi" en="Filtered player review data" />,
    href: 'https://docs.google.com/spreadsheets/d/1jZU9_3t00jlrfjOkRwBPTZjISXhfS5qPzG0D43V1Vuc/edit?usp=sharing',
  },
]

const processImages: [string, ...string[]] = [
  `${imageDirectory}/process/slide-01.jpg`,
  ...Array.from({ length: 10 }, (_, index) => `${imageDirectory}/process/slide-${String(index + 2).padStart(2, '0')}.jpg`),
]

const linkButtonClass = 'inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-semibold transition-colors hover:border-primary hover:text-primary'

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkButtonClass}>
      {children}
      <ExternalLink className="size-4" aria-hidden="true" />
    </a>
  )
}

export function TidyUpCaseStudy({ project }: { project: { company: string } }) {
  const details = [
    { label: <L vi="Sản phẩm" en="Product" />, value: 'Tidy Up - Satisfeel ASMR' },
    { label: <L vi="Công ty" en="Company" />, value: project.company },
    { label: <L vi="Loại dự án" en="Project type" />, value: 'Mini Project' },
    { label: <L vi="Ngành hàng" en="Industry" />, value: 'Mobile Game' },
    { label: <L vi="Vị trí" en="Role" />, value: <L vi="Phân tích dữ liệu" en="Data analysis" /> },
  ]

  const bodyClass = 'text-sm leading-relaxed text-muted-foreground sm:text-base [&_strong]:font-semibold [&_strong]:text-foreground'

  return (
    <ProjectCaseStudyLayout
      title={projectCovers.tidyUp.title}
      banner={{
        src: projectCovers.tidyUp.cover,
        alt: 'Tidy Up - Satisfeel ASMR: bàn nướng BBQ với các món ăn được sắp xếp gọn gàng',
        width: 1920,
        height: 1080,
      }}
      details={details}
    >
      <section className="mb-16 sm:mb-20">
        <h2 className={headingClass}><L vi={<span><span className="text-primary">Tổng quan</span> dự án</span>} en={<span><span className="text-primary">Project</span> overview</span>} /></h2>
        <div className={`max-w-3xl space-y-4 ${bodyClass}`}>
          <L vi={<>
          <p>
            <strong>Tidy Up - Satisfeel ASMR</strong> là tựa game sắp xếp đồ vật mang cảm giác thư giãn của <strong>PixOn Games</strong>.
          </p>
          <p>
            Phân tích <strong>317 review</strong> của người chơi trên App Store và Google Play (US, 01–11/2026) cho game Tidy Up – Satisfeel ASMR (<strong>12M+ lượt tải</strong>) của PixOn Games. Mình tự viết script thu thập <strong>1.100 review</strong>, phân loại theo <strong>9 nhóm vấn đề</strong> cùng cảm xúc, mức ưu tiên và bộ phận phụ trách. Kết quả là báo cáo <strong>5 insight</strong> kèm đề xuất hành động, trong đó phát hiện lỗi chặn người chơi ở <strong>level 2</strong> (13 review, kéo dài 02–10/2026) và quảng cáo là nhóm phàn nàn lớn nhất (<strong>33%</strong>).
          </p>
          </>} en={<>
          <p>
            <strong>Tidy Up - Satisfeel ASMR</strong> is a relaxing object-sorting game by <strong>PixOn Games</strong>.
          </p>
          <p>
            An analysis of <strong>317 player reviews</strong> on the App Store and Google Play (US, 01–11/2026) for Tidy Up – Satisfeel ASMR (<strong>12M+ downloads</strong>) by PixOn Games. I wrote my own script to collect <strong>1,100 reviews</strong> and classified them into <strong>9 issue groups</strong> with sentiment, priority and the responsible team. The result is a report with <strong>5 insights</strong> and recommended actions, including a bug that blocks players at <strong>level 2</strong> (13 reviews, ongoing 02–10/2026) and ads being the largest complaint group (<strong>33%</strong>).
          </p>
          </>} />
        </div>
      </section>

      <div className="space-y-12 sm:space-y-16">
        <section>
          <h2 className={headingClass}><L vi={<span><span className="text-primary">Quy trình</span> thực hiện</span>} en={<span><span className="text-primary">Work</span> process</span>} /></h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-10">
            <ProjectImageGallery title="Quy trình thực hiện" images={processImages} width={1600} height={900} />
            <p className={bodyClass}>
              <L vi={<>Đây là toàn bộ quy trình mình thực hiện cho <strong>Mini Project | Tidy Up - Satisfeel ASMR</strong>; bao gồm 5 bước: <strong>Chọn game - Thu thập - Phân loại - Phân tích - Báo cáo</strong>.</>} en={<>This is the full process I followed for <strong>Mini Project | Tidy Up - Satisfeel ASMR</strong>, in 5 steps: <strong>Choose a game - Collect - Classify - Analyze - Report</strong>.</>} />
            </p>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><L vi={<span><span className="text-primary">Phân tích</span> chi tiết</span>} en={<span><span className="text-primary">Detailed</span> analysis</span>} /></h2>
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
                <LinkButton href={analysisHtml}><L vi="Xem toàn màn hình" en="View full screen" /></LinkButton>
              </div>
            </div>
            <p className={bodyClass}>
              <L
                vi={<>Phân tích các số liệu và thể hiện trực quan trên <strong>Pivot Table</strong> | <strong>53%</strong> tiêu cực · <strong>33%</strong> nhắc quảng cáo · <strong>13</strong> review báo kẹt level 2 · <strong>22</strong> review chê nội dung sau level 200</>}
                en={<>Data analyzed and visualized with a <strong>Pivot Table</strong> | <strong>53%</strong> negative · <strong>33%</strong> mention ads · <strong>13</strong> reviews stuck at level 2 · <strong>22</strong> reviews criticize content after level 200</>}
              />
            </p>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><L vi={<span><span className="text-primary">Báo cáo</span> chi tiết</span>} en={<span><span className="text-primary">Full</span> report</span>} /></h2>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <iframe
                src={reportPreviewUrl}
                title="Báo cáo Tidy Up - Satisfeel ASMR"
                loading="lazy"
                className="block h-[70vh] min-h-[480px] w-full sm:h-[800px]"
              />
            </div>
            <LinkButton href={reportUrl}><L vi="Báo cáo Tidy Up - Satisfeel ASMR" en="Tidy Up - Satisfeel ASMR report" /></LinkButton>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><span className="text-primary"><L vi="Phụ lục" en="Appendix" /></span></h2>
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
