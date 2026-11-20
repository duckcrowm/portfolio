import { CheckCircle2, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projectCovers } from '@/lib/portfolio-data'
import { withBasePath } from '@/lib/base-path'
import { L } from '@/components/language-provider'
import { ProjectCaseStudyLayout, projectSectionHeadingClass as headingClass } from './project-case-study-layout'
import { ProjectImageGallery } from './project-image-gallery'
import { SocialPostVideo } from './social-post-video'

const imageDirectory = '/images/projects/moc-huong'
const contentPlanningUrl = 'https://docs.google.com/spreadsheets/d/1AH9aYETt2Pg9HwBhdDKXV81wcCm8cEF1ibH0WBFtU3U/edit?gid=747875094#gid=747875094'

function deckImages(prefix: string, count: number): [string, ...string[]] {
  const path = `${imageDirectory}/${prefix}`
  return [
    `${path}01.jpg`,
    ...Array.from({ length: count - 1 }, (_, index) => `${path}${String(index + 2).padStart(2, '0')}.jpg`),
  ]
}

const planStrategyImages = deckImages('plan-strategy/slide-', 14)
const contentExecutiveImages = deckImages('content-executive/page-', 14)
const socialPosts = [
  { file: 'cam-gung-cu.png', alt: 'Gel tắm Cam Gừng phiên bản cũ' },
  { file: 's2.png', alt: 'So sánh hai phiên bản Gel tắm Cam Gừng' },
  { file: 'tam-gung.jpg', alt: 'Tắm gừng khác gì ăn gừng?' },
  { file: 's1.png', alt: 'Ai nên lựa chọn phiên bản mới của Gel tắm Cam Gừng?' },
  { file: 'lam-uot-co-the.png', alt: 'Bước 1: Làm ướt cơ thể' },
]

const metrics = [
  { label: 'Lượt hiển thị', en: 'Views', value: '63,2K', valueEn: '63.2K', growth: '92,2%', growthEn: '92.2%' },
  { label: 'Số người tiếp cận', en: 'Reach', value: '28,8K', valueEn: '28.8K', growth: '155,7%', growthEn: '155.7%' },
  { label: 'Lượt tương tác với nội dung', en: 'Content interactions', value: '350', valueEn: '350', growth: '16,3%', growthEn: '16.3%' },
  { label: 'Lượt nhấp vào liên kết', en: 'Link clicks', value: '658', valueEn: '658', growth: '101,8%', growthEn: '101.8%' },
  { label: 'Lượt truy cập', en: 'Visits', value: '1,3K', valueEn: '1.3K', growth: '37,2%', growthEn: '37.2%' },
  { label: 'Lượt theo dõi mới', en: 'New follows', value: '20', valueEn: '20', growth: '17,6%', growthEn: '17.6%' },
]

export function MocHuongCaseStudy({
  project,
}: {
  project: {
    company: string
    role: string
  }
}) {
  const details = [
    { label: <L vi="Công ty" en="Company" />, value: <L vi={project.company} en="Mộc Hương Co., Ltd." /> },
    { label: <L vi="Loại dự án" en="Project type" />, value: 'Line Extension' },
    { label: <L vi="Ngành hàng" en="Industry" />, value: 'FMCG' },
    { label: <L vi="Vị trí" en="Role" />, value: project.role },
    { label: <L vi="Thời gian" en="Duration" />, value: <L vi="2 tháng" en="2 months" /> },
  ]

  const bodyClass = 'text-sm leading-relaxed text-muted-foreground sm:text-base [&_strong]:font-semibold [&_strong]:text-foreground'

  return (
    <ProjectCaseStudyLayout
      title={projectCovers.mocHuong.title}
      banner={{
        src: projectCovers.mocHuong.cover,
        alt: 'Gel tắm Cam Gừng Mộc Hương với chai vòi nhấn 420 ml',
        width: 1672,
        height: 941,
      }}
      details={details}
    >
      <section className="mb-16 sm:mb-20">
        <h2 className={headingClass}><L vi={<span><span className="text-primary">Tổng quan</span> dự án</span>} en={<span><span className="text-primary">Project</span> overview</span>} /></h2>
        <div className={`max-w-3xl space-y-4 ${bodyClass}`}>
          <L vi={<>
          <p>
            Mộc Hương hiện có dòng Gel Tắm Cam Gừng phiên bản 250ml với thiết kế nắp bật. Tuy nhiên, dung tích nhỏ và thao tác đóng mở nắp có thể chưa đáp ứng tối ưu nhu cầu sử dụng thường xuyên tại nhà, đặc biệt với nhóm khách hàng ưu tiên sự tiện lợi và tiết kiệm thời gian.
          </p>
          <p>
            Để đáp ứng nhu cầu này, Mộc Hương mở rộng dòng sản phẩm với <strong>phiên bản 420ml sử dụng vòi nhấn</strong>, mang đến dung tích lớn hơn và trải nghiệm sử dụng thuận tiện hơn.
          </p>
          <p>
            Việc ra mắt phiên bản mới đặt ra bài toán truyền thông: <strong>Làm thế nào để khách hàng nhận biết sự khác biệt, hiểu được giá trị cải tiến và cân nhắc lựa chọn sản phẩm mới?</strong>
          </p>
          </>} en={<>
          <p>
            Mộc Hương currently sells its Orange Ginger Shower Gel in a 250ml flip-cap bottle. However, the small size and opening/closing the cap may not best serve frequent use at home, especially for customers who value convenience and saving time.
          </p>
          <p>
            To meet this need, Mộc Hương extended the line with a <strong>420ml pump version</strong>, offering a larger size and an easier experience.
          </p>
          <p>
            Launching the new version raised a communication challenge: <strong>How do we help customers notice the difference, understand the value of the improvement and consider the new product?</strong>
          </p>
          </>} />
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <h2 className={headingClass}><span className="text-primary"><L vi="Vai trò" en="Role" /></span></h2>
        <p className={`max-w-3xl ${bodyClass}`}>
          <L vi={<>Đảm nhiệm vai trò <strong>Content Executive</strong>, phụ trách lập kế hoạch nội dung, phát triển ý tưởng, sản xuất và triển khai nội dung trên Facebook và Instagram. Đồng thời, tham gia đề xuất <strong>Campaign Strategy</strong>, bao gồm xác định mục tiêu, đối tượng khách hàng, thông điệp truyền thông và lộ trình triển khai chiến dịch.</>} en={<>As <strong>Content Executive</strong>, I was responsible for content planning, idea development, production and publishing on Facebook and Instagram. I also helped propose the <strong>Campaign Strategy</strong>, including objectives, target audience, key messages and the campaign roadmap.</>} />
        </p>
      </section>

      <div className="space-y-12 sm:space-y-16">
        <section>
          <h2 className={headingClass}><span><span className="text-primary">Plan</span> Strategy</span></h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-10">
            <ProjectImageGallery title="Plan Strategy" images={planStrategyImages} width={1600} height={901} />
            <p className={bodyClass}>
              <L
                vi={<>Đề xuất xây dựng <strong>Campaign Strategy</strong> với mục tiêu chính là gia tăng sự nhận diện cho dòng sản phẩm Gel tắm Cam Gừng.</>}
                en={<>Proposed a <strong>Campaign Strategy</strong> whose main goal was to grow awareness of the Orange Ginger Shower Gel line.</>}
              />
            </p>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><span><span className="text-primary">Content</span> Executive</span></h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-10">
            <div className="space-y-4">
              <ProjectImageGallery title="Content Executive" images={contentExecutiveImages} width={1600} height={900} />
              <div className="flex justify-center">
                <a
                  href={contentPlanningUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <L vi="Chi tiết Content Planning" en="Content Planning details" />
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className={bodyClass}>
              <L vi={<>Mình đảm nhiệm vai trò chính là <strong>Content Executive</strong>, phụ trách xây dựng và triển khai kế hoạch nội dung trên Facebook và Instagram nhằm gia tăng nhận biết, truyền tải giá trị sản phẩm và thúc đẩy cân nhắc mua hàng - Công việc bao gồm nghiên cứu khách hàng và đối thủ, xây dựng Content Pillars, Content Mapping, Content Calendar, phát triển ý tưởng, viết nội dung và thiết kế ấn phẩm truyền thông.</>} en={<>My main role was <strong>Content Executive</strong>, building and running the content plan on Facebook and Instagram to grow awareness, communicate product value and drive purchase consideration. The work covered customer and competitor research, Content Pillars, Content Mapping, the Content Calendar, idea development, copywriting and designing communication materials.</>} />
            </p>
          </div>
        </section>

        <section>
          <h2 className={headingClass}><span><span className="text-primary">Social</span> Post</span></h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <li>
              <SocialPostVideo src={`${imageDirectory}/social/cam-gung.mp4`} title="Gel tắm Cam Gừng" />
            </li>
            {socialPosts.map(({ file, alt }) => (
              <li key={file} className="image-zoom relative aspect-square rounded-2xl border border-border bg-card">
                <Image src={withBasePath(`${imageDirectory}/social/${file}`)} alt={alt} fill sizes="(min-width: 1280px) 395px, (min-width: 640px) 33vw, 50vw" className="object-contain" />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-16 sm:mt-20">
        <h2 className={headingClass}><L vi={<span><span className="text-primary">Kết quả</span> đạt được</span>} en={<span><span className="text-primary">Results</span> achieved</span>} /></h2>
        <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
          <ProjectImageGallery title="Bảng số liệu Facebook" images={[`${imageDirectory}/facebook-metrics.jpg`]} width={943} height={1136} />
          <div>
            <div className={`space-y-4 ${bodyClass}`}>
              <L vi={<>
              <p>Do giới hạn về quyền truy cập và phạm vi dữ liệu, phần đánh giá hiệu quả chiến dịch này chỉ tập trung vào các chỉ số đo lường trên Facebook từ Meta Business Suite.</p>
              <p>Thông qua dự án, mình có cơ hội tích lũy kinh nghiệm thực tế trong môi trường doanh nghiệp, đồng thời hiểu rõ hơn về quy trình xây dựng chiến lược, lập kế hoạch và triển khai một chiến dịch truyền thông.</p>
              <p>Dù những đóng góp còn khiêm tốn, mình trân trọng cơ hội được tham gia dự án, tạo ra giá trị cho doanh nghiệp và phát triển năng lực chuyên môn của bản thân.</p>
              </>} en={<>
              <p>Due to limited access and data scope, this evaluation only covers Facebook metrics from Meta Business Suite.</p>
              <p>Through this project I gained hands-on experience in a business environment and a clearer understanding of how to build a strategy, plan and run a communication campaign.</p>
              <p>Although my contribution was modest, I value the chance to take part in the project, create value for the business and grow my professional skills.</p>
              </>} />
            </div>
            <ul className="mt-6 grid gap-3 min-[420px]:grid-cols-2">
              {metrics.map(({ label, en, value, valueEn, growth, growthEn }) => (
                <li key={label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 rounded-sm border border-primary/30 bg-primary/10 p-0.5 text-primary">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  </span>
                  <span><L
                    vi={<>{label} đạt <strong className="text-foreground">{value}</strong> (tăng <strong className="text-foreground">{growth}</strong>)</>}
                    en={<>{en} reached <strong className="text-foreground">{valueEn}</strong> (up <strong className="text-foreground">{growthEn}</strong>)</>}
                  /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ProjectCaseStudyLayout>
  )
}
