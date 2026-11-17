import { CategoryProvider } from '@/components/category-provider'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-3 pb-3 sm:px-5 sm:pb-5">
      <SiteHeader />

      <div className="mt-18 overflow-hidden rounded-3xl border border-border bg-card/40 sm:mt-24 sm:rounded-[2rem]">
        <CategoryProvider>
          <main>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
        </CategoryProvider>
        <SiteFooter />
      </div>
    </div>
  )
}
