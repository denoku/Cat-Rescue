import { Metadata } from 'next'
import { Geist, Geist_Mono, Raleway, Dosis } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { LocalBusinessJsonLd } from 'next-seo'
import StickyCTA from '@/components/StickyCTA'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  display: 'swap',
})

const dosis = Dosis({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dosis',
})
export const metadata: Metadata = {
  title: 'Cat Rescue | Portfolio Project',
  description:
    'A demonstration website for a fictional cat rescue organization. Built by Brian Wheeler using Next.js and Tailwind CSS.',
  openGraph: {
    title: 'Cat Rescue | Portfolio Project',
    description:
      'A demonstration website for a fictional cat rescue organization. Built by Brian Wheeler using Next.js and Tailwind CSS.',
    url: 'https://your-portfolio-domain.com/projects/cat-rescue',
    siteName: 'Brian Wheeler Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Store this locally in your public folder
        width: 1200,
        height: 630,
        alt: 'Cat Rescue Portfolio Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat Rescue | Portfolio Project',
    description:
      'A demonstration website for a fictional cat rescue organization. Built by Brian Wheeler using Next.js and Tailwind CSS.',
    images: ['/twitter-image.jpg'], // Store this locally
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: [
    'web development',
    'portfolio',
    'next.js',
    'react',
    'tailwind css',
    'frontend development',
  ],
  authors: [
    {
      name: 'Brian Wheeler',
      url: 'https://your-portfolio-domain.com',
    },
  ],
  creator: 'Brian Wheeler',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${dosis.variable} antialiased`}
      >
        <LocalBusinessJsonLd
          useAppDir={true}
          type="AnimalShelter"
          id="https://your-portfolio-domain.com/projects/cat-rescue"
          name="Cat Rescue (Portfolio Demo)"
          description="A fictional cat rescue organization created as a portfolio project to demonstrate web development skills"
          url="https://your-portfolio-domain.com/projects/cat-rescue"
          telephone="+15551234567" // Fictional phone number
          address={{
            streetAddress: '123 Portfolio Drive',
            addressLocality: 'Demo City',
            addressRegion: 'CA',
            postalCode: '12345',
            addressCountry: 'US',
          }}
          geo={{
            latitude: '37.7749',
            longitude: '-122.4194',
          }}
          images={['/demo-image1.jpg', '/demo-image2.jpg']}
          sameAs={[
            'https://your-portfolio-domain.com',
            'https://github.com/your-username',
            'https://linkedin.com/in/your-profile',
          ]}
          openingHours={[
            {
              opens: '13:00',
              closes: '16:00',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
              validFrom: '2024-01-01',
              validThrough: '2025-01-01',
            },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Cat Rescue (Portfolio Demo)',
              description:
                'A fictional cat rescue organization created as a portfolio project to demonstrate web development skills',
              url: 'https://your-portfolio-domain.com/projects/cat-rescue',
              logo: '/logo.png',
              sameAs: [
                'https://your-portfolio-domain.com',
                'https://github.com/your-username',
                'https://linkedin.com/in/your-profile',
              ],
              nonprofitStatus: 'Demo / Portfolio Project',
              additionalType: 'PortfolioProject',
              author: {
                '@type': 'Person',
                name: 'Brian Wheeler',
                url: 'https://your-portfolio-domain.com',
              },
            }),
          }}
        />
        <Nav />
        {children}
        <Toaster position="top-center" richColors />{' '}
        {/* Global toast container */}
        <StickyCTA />
        <div className="h-16" />
        <Footer />
      </body>
    </html>
  )
}
