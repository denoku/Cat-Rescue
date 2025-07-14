import { Metadata } from 'next'
import AdoptionPageClient from '@/components/AdoptionPageClient'

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Adopt a Cat | Cat Rescue',
  description:
    'Find your perfect feline companion. Browse cats available for adoption at largest no-cage, no-kill cat sanctuary.',
  keywords: [
    'cat adoption',
    'adopt cats',
    'rescue cats',
    'cat sanctuary',
    'pet adoption',
  ],
  alternates: {
    canonical: 'https://your-portfolio-domain.com/adopt',
  },
  openGraph: {
    title: 'Adopt a Cat | Cat Rescue',
    description:
      'Find your perfect feline companion at largest no-cage, no-kill cat sanctuary.',
    url: 'https://your-portfolio-domain.com/adopt',
    images: [
      {
        url: 'https://your-portfolio-domain.com/og-adoption.jpg',
        width: 1200,
        height: 630,
        alt: 'Cat adoption at Cat Rescue',
      },
    ],
    type: 'website',
  },
}

// Mock data for cats - shared between server and client
export const cats = [
  {
    id: '1',
    name: 'Mr. Whiskers',
    age: '3 years',
    gender: 'Male',
    description: 'Friendly and playful tabby who loves attention.',
    image: '/cat1.jpg',
    tags: ['tabby', 'playful', 'friendly'],
    urgency: false,
  },
  {
    id: '2',
    name: 'Luna',
    age: '2 years',
    gender: 'Female',
    description: 'Gentle black cat who enjoys quiet companionship.',
    image: '/cat4.jpg',
    tags: ['black', 'quiet', 'gentle'],
    urgency: false,
  },
  {
    id: '3',
    name: 'Oliver',
    age: '4 years',
    gender: 'Male',
    description:
      'Oliver is a distinguished orange tabby with striking green eyes. He prefers a quiet home where he can enjoy sunny windowsills and gentle pets.',
    image: '/orangeTabby.jpg',
    tags: ['orange tabby', 'calm', 'independent', 'adult'],
    urgency: false,
  },
  {
    id: '4',
    name: 'Bella',
    age: '10 years',
    gender: 'Female',
    description:
      'Sweet senior calico who lost her home when her elderly owner passed away. Bella is great with other cats and loves to curl up in laps.',
    image: '/calico.jpg',
    tags: ['calico', 'senior', 'affectionate', 'special needs'],
    urgency: true,
  },
]

// Server component renders the client component
export default function AdoptionPage() {
  // Schema.org data can be rendered server-side
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: cats.map((cat, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: cat.name,
        description: cat.description,
        image: `https://your-portfolio-domain.com${cat.image}`,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    })),
  }

  return (
    <>
      {/* <div className="w-full h-10 bg-gradient-to-r from-[#a2bb31] to-[#8fa82a]"></div> */}
      {/* Hidden schema.org data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <AdoptionPageClient cats={cats} />
    </>
  )
}
