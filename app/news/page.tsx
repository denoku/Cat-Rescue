import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SlashIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Updates | Cat House on the Kings',
  description:
    'Latest news, events, and updates from Cat House on the Kings cat sanctuary and adoption center.',
}

// Mock blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Spring Adoption Event Breaks Records',
    slug: 'spring-adoption-event',
    excerpt:
      'Our spring adoption event found homes for 32 cats and 12 dogs in a single weekend, breaking our previous record!',
    content: 'Full content would go here...',
    date: '2023-04-15',
    author: 'Sarah Johnson',
    image: '/adoption.jpg',
    category: 'Events',
  },
  {
    id: '2',
    title: 'New Medical Wing Completed',
    slug: 'medical-wing-completed',
    excerpt:
      'Thanks to our generous donors, our new medical wing is now complete and ready to provide improved care to our cats.',
    content: 'Full content would go here...',
    date: '2023-03-22',
    author: 'Dr. Michael Chen',
    image: '/vet.jpg',
    category: 'Facility Updates',
  },
  {
    id: '3',
    title: 'Volunteer Spotlight: The Garcia Family',
    slug: 'volunteer-spotlight-garcia',
    excerpt:
      'Meet the Garcia family, who have dedicated over 500 hours to helping our cats this year.',
    content: 'Full content would go here...',
    date: '2023-02-10',
    author: 'Volunteer Coordinator',
    image: '/family.jpg',
    category: 'Volunteer Spotlight',
  },
]

export default function NewsPage() {
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
            <BreadcrumbLink>News & Updates</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis text-[#a2bb31]">
          News & Updates
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Stay informed about the latest happenings at Cat House on the Kings,
          from adoption events to success stories.
        </p>
      </div>

      {/* Featured Post - Mobile Responsive */}
      <div className="mb-12">
        {/* Mobile Layout (stacked) */}
        <div className="md:hidden">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src="/fundraiser.jpg"
              alt="Featured post"
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0">
              <span className="m-3 inline-block bg-[#a2bb31] px-3 py-1 rounded-full text-sm font-medium text-white">
                Featured
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Annual Fundraiser Exceeds Goal by 150%
          </h2>
          <div className="text-sm text-gray-500 mb-3">
            <span className="mr-4">May 10, 2023</span>
            <span>By Executive Director</span>
          </div>
          <p className="text-gray-600 mb-4">
            Our annual "Whiskers & Wine" fundraiser was an incredible success,
            raising over $75,000 for our medical fund. Thank you to everyone who
            attended and donated!
          </p>
          <Link
            href="/news/annual-fundraiser"
            className="text-[#a2bb31] font-medium hover:underline inline-flex items-center"
          >
            Read full story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop Layout (overlay) - Hide on mobile */}
        <div className="hidden md:block">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
            <Image
              src="/fundraiser.jpg"
              alt="Featured post"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <span className="text-white bg-[#a2bb31] px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">
                Annual Fundraiser Exceeds Goal by 150%
              </h2>
              <p className="text-white/90 mb-4 max-w-2xl">
                Our annual "Whiskers & Wine" fundraiser was an incredible
                success, raising over $75,000 for our medical fund. Thank you to
                everyone who attended and donated!
              </p>
              <div className="flex items-center text-white/80">
                <span className="mr-4">May 10, 2023</span>
                <span>By Executive Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-white px-2 py-1 rounded text-xs font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">
                {format(new Date(post.date), 'MMM d, yyyy')} • By {post.author}
              </div>
              <h3 className="text-xl font-bold mb-2 hover:text-[#a2bb31] transition-colors">
                <Link href={`/news/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/news/${post.slug}`}
                className="text-[#a2bb31] font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" className="bg-[#a2bb31] text-white">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-[#f5f9e8] p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">
            Sign up for our monthly newsletter to receive updates about our
            cats, upcoming events, and ways to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
            />
            <Button className="bg-[#a2bb31] hover:bg-[#8fa82a]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
