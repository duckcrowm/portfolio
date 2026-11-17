import { permanentRedirect } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { DreamBeforeAfterVideo } from '@/components/dream-before-after-video'
import { SiteHeader } from '@/components/site-header'
import { content, projectCovers } from '@/lib/portfolio-data'
import { MocHuongCaseStudy } from './moc-huong-case-study'
import { TidyUpCaseStudy } from './tidy-up-case-study'
import { ProjectCaseStudyLayout, projectSectionHeadingClass } from './project-case-study-layout'

export const metadata = {
  title: 'Chi tiết dự án - Phan Đức Portfolio',
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { mocHuong, videoEditing, tidyUp } = projectCovers

  if (id === 'thuong-hieu-trang-suc') {
    permanentRedirect(`/projects/${videoEditing.id}`)
  }

  const project = content.vi.projects.items.find((item) => item.id === id)

  if (project && id === mocHuong.id) {
    return <MocHuongCaseStudy project={project} />
  }

  if (project && id === tidyUp.id) {
    return <TidyUpCaseStudy project={project} />
  }

  if (id === videoEditing.id) {
    return (
      <ProjectCaseStudyLayout
        title={videoEditing.title}
        banner={{ src: videoEditing.cover, alt: 'Showreel — Motion, Design', width: 1000, height: 563 }}
      >
        <section aria-labelledby="reels-video-title">
          <h2 id="reels-video-title" className={projectSectionHeadingClass}>
            <span className="text-primary">Edit video</span>
          </h2>
          <DreamBeforeAfterVideo />
        </section>
      </ProjectCaseStudyLayout>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-5 pt-18 pb-14 sm:px-7 sm:py-24 min-h-[calc(100vh-200px)]">
      <nav className="mb-8 flex items-center gap-2">
        <BackButton />
      </nav>
      <SiteHeader onHomePage={false} />
      <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">Không tìm thấy dự án</h1>
    </section>
  )
}
