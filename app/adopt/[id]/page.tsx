import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cats } from '../page'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { CalendarIcon, Heart, SlashIcon, Users } from 'lucide-react'

// Types for metadata generation
type CatParams = {
  params: {
    id: string
  }
}

// Dynamic metadata generation based on cat ID
export async function generateMetadata({
  params,
}: CatParams): Promise<Metadata> {
  const cat = cats.find((c) => c.id === params.id)

  // Return 404 metadata if cat not found
  if (!cat) {
    return {
      title: 'Cat Not Found | Cat Rescue',
    }
  }

  return {
    title: `Adopt ${cat.name} | Cat Rescue`,
    description: `Meet ${cat.name}, a ${cat.age} ${
      cat.gender
    } cat available for adoption. ${cat.description.substring(0, 100)}...`,
    alternates: {
      canonical: `/projects/cat-rescue/adopt/${cat.id}`,
    },
    openGraph: {
      title: `Meet ${cat.name} - Available for Adoption`,
      description: `${cat.name} is a ${cat.age} ${cat.gender} looking for a forever home.`,
      images: [
        {
          url: cat.image,
          width: 800,
          height: 600,
          alt: `${cat.name} - Cat available for adoption`,
        },
      ],
    },
  }
}

interface Props {
  params: Promise<{ id: string }>
}

// Page component: await params before using
export default async function CatDetailsPage({ params }: Props) {
  const { id } = await params
  const cat = cats.find((c) => c.id === id)

  // Handle 404 if cat doesn't exist
  if (!cat) {
    notFound()
  }

  // Mock additional cat details
  const catDetails = {
    breed:
      cat.tags.find(
        (tag) =>
          tag.includes('tabby') || tag.includes('calico') || tag === 'black'
      ) || 'Mixed',
    personality: [
      'Affectionate',
      'Playful',
      ...cat.tags.filter((t) => t !== 'special needs' && t !== 'bonded pair'),
    ],
    health: 'Vaccinated, neutered/spayed, microchipped, FIV/FeLV negative',
    goodWith: cat.tags.includes('special needs')
      ? ['Calm environments', 'Adult homes']
      : ['Other cats', 'Children', 'Calm dogs'],
    needs: cat.tags.includes('special needs')
      ? 'Special diet, medication monitoring'
      : 'Regular playtime, moderate grooming',
    dateArrived: '2023-05-15',
    images: [cat.image, '/cat3.jpg', '/cat4.jpg'],
  }

  return (
    <div className="container mx-auto py-8 px-4 mt-20">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/adopt">Adopt</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>{cat.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Schema.org data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: cat.name,
            description: cat.description,
            image: `https://your-portfolio-domain.com/${cat.image}`,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Cat Rescue',
              },
            },
          }),
        }}
      />

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Photo gallery */}
        <div>
          <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
            <Image
              src={catDetails.images[0]}
              alt={`${cat.name} - cat available for adoption`}
              fill
              priority
              className="object-cover"
            />
            {cat.urgency && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                URGENT
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {catDetails.images.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${cat.name} - photo ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{cat.name}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#f5f9e8] text-[#8fa82a] px-3 py-1 rounded-full text-sm">
              {cat.age}
            </span>
            <span className="bg-[#f5f9e8] text-[#8fa82a] px-3 py-1 rounded-full text-sm">
              {cat.gender}
            </span>
            <span className="bg-[#f5f9e8] text-[#8fa82a] px-3 py-1 rounded-full text-sm">
              {catDetails.breed}
            </span>
          </div>

          <div className="prose max-w-none mb-6">
            <p>{cat.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-[#a2bb31]" /> Personality
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {catDetails.personality.map((trait, i) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#a2bb31]" /> Good With
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {catDetails.goodWith.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-bold mb-2">Health Information</h2>
            <p>{catDetails.health}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>
                At shelter since{' '}
                {new Date(catDetails.dateArrived).toLocaleDateString()}
              </span>
            </div>
            <div>ID: {cat.id}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#a2bb31] hover:bg-[#8fa82a] text-white flex-1 py-6 text-lg">
              <Link
                href="/adopt/application"
                className="w-full block text-center"
              >
                Apply to Adopt {cat.name}
              </Link>
            </Button>
            <Button className="bg-white border border-[#a2bb31] text-[#a2bb31] hover:bg-[#f5f9e8] flex-1 py-6 text-lg">
              <Link href="/contact" className="w-full block text-center">
                Ask About {cat.name}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Adoption Process */}
      <section className="mt-16 bg-[#f5f9e8] p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Adoption Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
            <div className="bg-[#a2bb31] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-3">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Apply</h3>
            <p className="text-gray-600 text-sm">
              Submit your adoption application online or in person at our
              sanctuary
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
            <div className="bg-[#a2bb31] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-3">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Meet & Match</h3>
            <p className="text-gray-600 text-sm">
              Visit our sanctuary to meet {cat.name} and ensure you&apos;re a
              good match
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
            <div className="bg-[#a2bb31] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-3">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Take Home</h3>
            <p className="text-gray-600 text-sm">
              Complete the adoption, pay the fee, and welcome {cat.name} to
              their forever home
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
