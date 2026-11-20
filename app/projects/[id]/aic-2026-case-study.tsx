import { L } from '@/components/language-provider'
import { projectCovers } from '@/lib/portfolio-data'
import { ProjectCaseStudyLayout, projectSectionHeadingClass as headingClass } from './project-case-study-layout'
import { ProjectImageGallery } from './project-image-gallery'
import { AicSocialPosts } from './aic-social-posts'

const imageDirectory = '/images/projects/aic-2026'
const slideCount = 14

const researchImages: [string, ...string[]] = [
  `${imageDirectory}/process/slide-01.jpg`,
  ...Array.from({ length: slideCount - 1 }, (_, index) => `${imageDirectory}/process/slide-${String(index + 2).padStart(2, '0')}.jpg`),
]

const bodyClass = 'text-sm leading-relaxed text-muted-foreground sm:text-base [&_strong]:font-semibold [&_strong]:text-foreground'
const listClass = 'list-disc space-y-1.5 pl-5 marker:text-primary'

export function Aic2026CaseStudy({ project }: { project: { company: string } }) {
  const details = [
    { label: <L vi="Sản phẩm" en="Product" />, value: 'Liên Quân Mobile - AIC 2026' },
    { label: <L vi="Công ty" en="Company" />, value: project.company },
    { label: <L vi="Loại dự án" en="Project type" />, value: 'Mini Project' },
    { label: <L vi="Ngành hàng" en="Industry" />, value: 'Mobile Game / Esports' },
    { label: <L vi="Vị trí" en="Role" />, value: 'Campaign Marketing' },
  ]

  return (
    <ProjectCaseStudyLayout
      title={projectCovers.aic2026.title}
      banner={{
        src: projectCovers.aic2026.cover,
        alt: 'AIC 2026 Coming Soon: cúp vô địch giữa skyline Việt Nam và Thái Lan, diễn ra 3-27/12',
        width: 1920,
        height: 960,
      }}
      details={details}
    >
      <section className="mb-16 sm:mb-20">
        <h2 className={headingClass}><span className="text-primary"><L vi="Bối cảnh" en="Background" /></span></h2>
        <div className={`max-w-3xl space-y-4 ${bodyClass}`}>
          <L
            vi={
              <>
                <p>
                  <strong>Concept cá nhân</strong> - Chiến dịch truyền thông cho <strong>Liên Quân Mobile</strong> mùa <strong>AIC 2026</strong>.
                </p>
                <p>
                  <strong>Liên Quân 10 Fest</strong> tháng 11 tạo được sức nóng lớn với cộng đồng. <strong>AIC 2026</strong> sẽ diễn ra vào tháng 12. Dự án đặt câu hỏi: làm sao giữ được lửa từ 10 Fest để người chơi theo dõi AIC và quay lại game mỗi ngày?
                </p>
              </>
            }
            en={
              <>
                <p>
                  <strong>Personal concept</strong> - A communication campaign for <strong>Liên Quân Mobile</strong> (Arena of Valor) during the <strong>AIC 2026</strong> season.
                </p>
                <p>
                  <strong>Liên Quân 10 Fest</strong> in November created huge buzz in the community. <strong>AIC 2026</strong> takes place in December. The project asks: how do we keep the 10 Fest fire burning so players follow AIC and come back to the game every day?
                </p>
              </>
            }
          />
        </div>
      </section>

      <section>
        <h2 className={headingClass}>
          <L
            vi={<span><span className="text-primary">Nghiên cứu</span> và ý tưởng</span>}
            en={<span><span className="text-primary">Research</span> and idea</span>}
          />
        </h2>
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-10">
          <ProjectImageGallery title="AIC 2026 Liên Quân" images={researchImages} width={1600} height={900} />
          <div className={`space-y-5 ${bodyClass}`}>
            <L
              vi={
                <>
                  <div className="space-y-2">
                    <p>
                      <strong>Ý tưởng: “Tiếp Lửa AIC”</strong>: ngọn lửa từ 10 Fest được chuyền tới AIC 2026. Người chơi đồng hành cùng đội Việt Nam qua 2 hoạt động hằng ngày:
                    </p>
                    <ul className={listClass}>
                      <li><strong>Dự đoán mỗi ngày</strong>: chọn đội thắng ở từng trận.</li>
                      <li><strong>Nhiệm vụ mỗi ngày</strong>: đánh 1 trận bằng tướng mà đội Việt Nam vừa chọn.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Mục tiêu:</strong></p>
                    <ul className={listClass}>
                      <li>Nối hai sự kiện lớn thành một hành trình liền mạch.</li>
                      <li>Tăng lượt xem AIC và tỉ lệ người chơi đăng nhập hằng ngày trong mùa giải.</li>
                      <li>Gắn trải nghiệm xem esports với hành động trong game.</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Đối tượng:</strong> người chơi Liên Quân, fan esports Việt Nam, đặc biệt là những người đã theo dõi 10 Fest.
                  </p>
                </>
              }
              en={
                <>
                  <div className="space-y-2">
                    <p>
                      <strong>Idea: “Tiếp Lửa AIC” (Pass the Fire to AIC)</strong>: the flame from 10 Fest is passed on to AIC 2026. Players back the Vietnamese teams through 2 daily activities:
                    </p>
                    <ul className={listClass}>
                      <li><strong>Daily prediction</strong>: pick the winner of each match.</li>
                      <li><strong>Daily mission</strong>: play 1 match with the hero the Vietnamese team just picked.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Goals:</strong></p>
                    <ul className={listClass}>
                      <li>Link two major events into one seamless journey.</li>
                      <li>Grow AIC viewership and the daily login rate during the tournament.</li>
                      <li>Connect watching esports with actions in the game.</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Audience:</strong> Liên Quân players and Vietnamese esports fans, especially those who followed 10 Fest.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className={headingClass}>
          <L
            vi={<span><span className="text-primary">Nội dung</span> mẫu</span>}
            en={<span><span className="text-primary">Sample</span> content</span>}
          />
        </h2>
        <AicSocialPosts />
      </section>
    </ProjectCaseStudyLayout>
  )
}
