import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { withBasePath } from '@/lib/base-path'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-space-grotesk',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: process.env.PAGES_SITE_ORIGIN ? new URL(process.env.PAGES_SITE_ORIGIN) : undefined,
  title: 'Portfolio Phan Đức',
  description: 'Portfolio Phan Đức - Marketing Technology, Branding & Creative.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    title: 'Portfolio Phan Đức',
    description: 'Portfolio Phan Đức - Marketing Technology, Branding & Creative.',
    images: [withBasePath('/image/avatar.png')],
  },
  icons: {
    icon: { url: withBasePath('/portfolio-icon-32.png?v=2'), sizes: '32x32', type: 'image/png' },
    apple: { url: withBasePath('/portfolio-icon-180.png?v=2'), sizes: '180x180', type: 'image/png' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`light ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && process.env.PAGES_BUILD !== 'true' && <Analytics />}
      </body>
    </html>
  )
}
