import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SlashIcon, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Success Stories | Cat House on the Kings',
  description:
    'Read heartwarming success stories of cats who found their forever homes through our sanctuary.',
}

// Mock data for success stories
const successStories = [
  {
    id: '1',
    catName: 'Shadow',
    adopter: 'The Johnson Family',
    date: 'March 2023',
    description:
      'Shadow was with us for over a year after being found as a stray. This shy black cat finally found his perfect match with the Johnson family, who gave him time and patience to adjust.',
    quote:
      'Shadow now sleeps on our bed every night and has become the most loving companion we could ask for!',
    beforeImage: '/success-before-3.jpg',
    afterImage: '/success-after-3.jpg',
  },
  {
    id: '2',
    catName: 'Mittens & Whiskers',
    adopter: 'Sarah Chen',
    date: 'January 2023',
    description:
      'This bonded pair of senior cats lost their home when their elderly owner passed away. We were determined to keep them together, and after 6 months, Sarah fell in love with both!',
    quote:
      'I never thought I`d adopt two senior cats, but they`ve brought so much joy to my life. They were exactly what I needed.',
    beforeImage: '/success-before-2.jpg',
    afterImage: '/success-after-2.jpg',
  },
  {
    id: '3',
    catName: 'Bella',
    adopter: 'The Martinez Family',
    date: 'April 2023',
    description:
      'Bella was our longest resident at almost 2 years. With special medical needs, she needed a special family who could provide her care. The Martinez family stepped up!',
    quote:
      'Bella`s medical needs seemed intimidating at first, but the support from Cat House made the transition easy. She`s now thriving!',
    beforeImage: '/success-before-1.jpg',
    afterImage: '/success-after-1.jpg',
  },
]

export default function SuccessStoriesPage() {
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
            <BreadcrumbLink>Success Stories</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis text-[#a2bb31]">
          Success Stories
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Every adoption is a success story in the making. Here are just a few
          of the many happy endings our rescued cats have found in their forever
          homes.
        </p>
      </div>

      {/* Success Stories */}
      <div className="space-y-16">
        {successStories.map((story, index) => (
          <Card
            key={story.id}
            className={index % 2 === 0 ? '' : 'bg-[#f5f9e8]'}
          >
            <CardHeader>
              <CardTitle className="text-2xl">
                {story.catName}'s Story
              </CardTitle>
              <CardDescription>
                Adopted by {story.adopter} in {story.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={story.beforeImage}
                      alt={`${story.catName} before adoption`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                      Before
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={story.afterImage}
                      alt={`${story.catName} after adoption`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                      After
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-6">{story.description}</p>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <Quote className="text-[#a2bb31] w-8 h-8 mr-3 flex-shrink-0" />
                  <p className="italic text-lg">{story.quote}</p>
                </div>
                <div className="mt-2 text-right font-medium">
                  — {story.adopter}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Write Your Own Success Story
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Hundreds of cats are waiting for their forever homes. Will you be part
          of the next success story?
        </p>
        <Link
          href="/adopt"
          className="inline-block bg-[#a2bb31] hover:bg-[#8fa82a] text-white px-6 py-3 rounded-md font-medium"
        >
          Find Your Perfect Match
        </Link>
      </div>
    </div>
  )
}
