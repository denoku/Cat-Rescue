import { Metadata } from 'next'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SlashIcon } from 'lucide-react'
import { DonationForm } from '@/components/DonationForm'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Donate | Cat House on the Kings',
  description:
    'Support our mission of rescuing cats and kittens by donating to Cat House on the Kings.',
}

export default function DonatePage() {
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
            <BreadcrumbLink>Donate</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis text-[#a2bb31]">
          Support Our Cats
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Your donation helps provide food, shelter, and medical care for over
          700 cats and kittens at our sanctuary. Every dollar makes a difference
          in their lives.
        </p>
      </div>

      <DonationForm />

      {/* Impact Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Your Donation Makes a Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f5f9e8] p-6 rounded-lg">
            <div className="text-3xl font-bold text-[#a2bb31] mb-2">$25</div>
            <p>Provides food and litter for one cat for a month</p>
          </div>

          <div className="bg-[#f5f9e8] p-6 rounded-lg">
            <div className="text-3xl font-bold text-[#a2bb31] mb-2">$50</div>
            <p>Covers basic vaccination costs for one rescue cat</p>
          </div>

          <div className="bg-[#f5f9e8] p-6 rounded-lg">
            <div className="text-3xl font-bold text-[#a2bb31] mb-2">$100</div>
            <p>Provides spay/neuter surgery for one cat</p>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Other Ways to Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Become a Monthly Donor</h3>
            <p className="mb-4">
              Join our Whiskers Club and provide consistent support with monthly
              donations.
            </p>
            <Button className="bg-[#a2bb31] hover:bg-[#8fa82a]">
              Join Monthly Giving
            </Button>
          </div>

          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Memorial & Tribute Gifts</h3>
            <p className="mb-4">
              Honor a loved one or celebrate a special occasion with a tribute
              gift.
            </p>
            <Button
              variant="outline"
              className="border-[#a2bb31] text-[#a2bb31]"
            >
              Make a Tribute Gift
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
