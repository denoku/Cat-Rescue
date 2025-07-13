import { Metadata } from 'next'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  SlashIcon,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Cat House on the Kings',
  description:
    'Get in touch with Cat House on the Kings. Visit our sanctuary, ask about adoptions, or learn how you can help.',
}

export default function ContactPage() {
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
            <BreadcrumbLink>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis text-[#a2bb31]">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          We're here to answer your questions about adoptions, volunteering,
          donations, or sanctuary visits.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">How to Reach Us</h2>

          <div className="space-y-6">
            <div className="flex">
              <MapPin className="w-6 h-6 text-[#a2bb31] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Visit Our Sanctuary</h3>
                <p className="mb-1">7120 S. Kings River Road</p>
                <p>Parlier, CA 93648</p>
              </div>
            </div>

            <div className="flex">
              <Phone className="w-6 h-6 text-[#a2bb31] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="mb-1">(559) 638-8696 (General)</p>
                <p>(559) 638-0030 (Adoptions)</p>
              </div>
            </div>

            <div className="flex">
              <Mail className="w-6 h-6 text-[#a2bb31] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="mb-1">info@cathouseonthekings.com</p>
                <p>adoptions@cathouseonthekings.com</p>
              </div>
            </div>

            <div className="flex">
              <Clock className="w-6 h-6 text-[#a2bb31] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Hours</h3>
                <p className="mb-1">Tuesday - Saturday: 10am - 4pm</p>
                <p className="mb-1">Sunday: 10am - 2pm</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-300">
              {/* Replace with actual map component if using Google Maps, Mapbox, etc. */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <p className="text-center text-gray-600">
                  Interactive map would be displayed here
                  <br />
                  <span className="text-sm">(Google Maps/Mapbox API)</span>
                </p>
              </div>
              {/* Link to actual Google Maps */}
              <a
                href="https://maps.google.com/?q=Cat+House+on+the+Kings+Parlier+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-md shadow-md flex items-center text-sm font-medium text-blue-600"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>

      {/* FAQs section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Can I visit the sanctuary?
            </h3>
            <p>
              Yes! We welcome visitors during our open hours. Please call ahead
              if you're bringing a large group.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">How can I volunteer?</h3>
            <p>
              We're always looking for volunteers! Please fill out our{' '}
              <Link href="/volunteer" className="text-[#a2bb31] underline">
                volunteer application
              </Link>{' '}
              to get started.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Do you accept cat surrenders?
            </h3>
            <p>
              We have limited capacity for owner surrenders. Please contact us
              directly to discuss your situation and available options.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How can I donate supplies?
            </h3>
            <p>
              We accept donations of food, litter, towels, and other supplies at
              our sanctuary during open hours. See our{' '}
              <Link href="/wishlist" className="text-[#a2bb31] underline">
                wishlist
              </Link>{' '}
              for our current needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
