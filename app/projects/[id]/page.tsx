import { permanentRedirect } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { SubNavbar } from '@/components/sub-navbar'
import { content, projectCovers } from '@/lib/portfolio-data'
import { MocHuongCaseStudy } from './moc-huong-case-study'
import { ProjectCaseStudyLayout, projectSectionHeadingClass } from './project-case-study-layout'
import { SocialPostVideo } from './social-post-video'

export const metadata = {
  title: 'Chi tiết dự án - Phan Đức Portfolio',
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { mocHuong, videoEditing } = projectCovers

  if (id === 'thuong-hieu-trang-suc') {
    permanentRedirect(`/projects/${videoEditing.id}`)
  }

  const project = content.vi.projects.items.find((item) => item.id === id)

  if (project && id === mocHuong.id) {
    return <MocHuongCaseStudy project={project} />
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
          <SocialPostVideo
            src="/images/skills/design-2d/dream-before-after-v4.mp4"
            title="Dream Before After"
            className="aspect-[9/16] max-w-xs"
          />
        </section>
      </ProjectCaseStudyLayout>
    )
  }

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
