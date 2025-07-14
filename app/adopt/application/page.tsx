import { Metadata } from 'next'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SlashIcon } from 'lucide-react'
import { AdoptionApplicationForm } from '@/components/AdoptionApplicationForm'

export const metadata: Metadata = {
  title: 'Adoption Application | ',
  description:
    'Apply to adopt a cat from ,  largest no-cage, no-kill cat sanctuary.',
}

export default function AdoptionApplicationPage() {
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
            <BreadcrumbLink>Application</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis text-[#a2bb31]">
          Adoption Application
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Please complete this application to begin the adoption process. Our
          team will review your information and contact you within 2-3 business
          days.
        </p>
      </div>

      <AdoptionApplicationForm />
    </div>
  )
}
