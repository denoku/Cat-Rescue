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
  title: 'Cat House on The Kings',
  description:
    'Cat House on The Kings is a non-profit organization dedicated to rescuing and rehabilitating cats in need.',
  openGraph: {
    title: 'Cat House on The Kings',
    description:
      'Cat House on The Kings is a non-profit organization dedicated to rescuing and rehabilitating cats in need.',
    url: 'https://cathouseonthekings.com',
    siteName: 'Cat House on The Kings',
    images: [
      {
        url: 'https://cathouseonthekings.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cat House on The Kings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat House on The Kings',
    description:
      'Cat House on The Kings is a non-profit organization dedicated to rescuing and rehabilitating cats in need.',
    images: ['https://cathouseonthekings.com/twitter-image.jpg'],
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    me: 'me-verification-code',
  },
  keywords: [
    'cats',
    'rescue',
    'rehabilitation',
    'non-profit',
    'animal welfare',
  ],
  authors: [
    {
      name: 'Cat House on The Kings',
      url: 'https://cathouseonthekings.com',
    },
  ],
  creator: 'Brian W',
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
          id="https://cathouseonthekings.com"
          name="Cat House on The Kings"
          description="California's largest no-cage, no-kill, lifetime cat sanctuary and adoption center"
          url="https://cathouseonthekings.com"
          telephone="+15596388696"
          address={{
            streetAddress: '7120 S. Kings River Road',
            addressLocality: 'Parlier',
            addressRegion: 'CA',
            postalCode: '93648',
            addressCountry: 'US',
          }}
          geo={{
            latitude: '36.5922116',
            longitude: '-119.523673',
          }}
          images={[
            'https://cathouseonthekings.com/image1.jpg',
            'https://cathouseonthekings.com/image2.jpg',
          ]}
          sameAs={[
            'https://facebook.com/cathouseonthekings',
            'https://twitter.com/cathousekings',
            'https://instagram.com/cathouseonthekings',
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
              name: 'Cat House on the Kings',
              description:
                "California's largest no-cage, no-kill, lifetime cat sanctuary and adoption center",
              url: 'https://cathouseonthekings.com',
              logo: 'https://cathouseonthekings.com/logo.png',
              sameAs: [
                'https://facebook.com/cathouseonthekings',
                'https://twitter.com/cathousekings',
                'https://instagram.com/cathouseonthekings',
              ],
              nonprofitStatus: 'Registered 501(c)(3)',
              taxID: '27-0015288',
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
