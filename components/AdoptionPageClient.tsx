'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { CircleAlert, HandHeart, SlashIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'

export default function AdoptionPageClient({ cats }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [ageFilter, setAgeFilter] = useState('')
  const [genderFilter, setGenderFilter] = useState('')
  const [urgentOnly, setUrgentOnly] = useState(false)
  const [specialNeeds, setSpecialNeeds] = useState(false)
  const [bondedPairs, setBondedPairs] = useState(false)

  // Filtered cats state
  const [filteredCats, setFilteredCats] = useState(cats)

  // Apply filters whenever any filter state changes
  useEffect(() => {
    const filtered = cats.filter((cat) => {
      // Name search filter
      if (
        searchTerm &&
        !cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }

      // Age filter
      if (ageFilter && ageFilter !== 'all') {
        const ageNum = parseInt(cat.age) || 0
        if (
          (ageFilter === 'kitten' && ageNum >= 1) ||
          (ageFilter === 'young' && (ageNum < 1 || ageNum > 3)) ||
          (ageFilter === 'adult' && (ageNum < 4 || ageNum > 8)) ||
          (ageFilter === 'senior' && ageNum < 9)
        ) {
          return false
        }
      }

      // Gender filter
      if (
        genderFilter &&
        genderFilter !== 'all' &&
        cat.gender.toLowerCase() !== genderFilter.toLowerCase()
      ) {
        return false
      }

      // Urgency filter
      if (urgentOnly && !cat.urgency) {
        return false
      }

      // Special needs filter
      if (specialNeeds && !cat.tags.includes('special needs')) {
        return false
      }

      // Bonded pairs filter
      if (bondedPairs && !cat.tags.includes('bonded pair')) {
        return false
      }

      return true
    })

    setFilteredCats(filtered)
  }, [
    cats,
    searchTerm,
    ageFilter,
    genderFilter,
    urgentOnly,
    specialNeeds,
    bondedPairs,
  ])

  // Function to reset all filters
  const resetFilters = () => {
    setSearchTerm('')
    setAgeFilter('')
    setGenderFilter('')
    setUrgentOnly(false)
    setSpecialNeeds(false)
    setBondedPairs(false)
  }

  return (
    <>
      {/* <div className="w-full h-20 bg-gradient-to-r from-[#a2bb31] to-[#8fa82a]"></div> */}
      <div className="container mx-auto py-8 px-4 mt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-[#a2bb31] font-bold hover:underline"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/adopt"
                className="text-[#a2bb31] font-bold hover:underline"
                aria-current="page"
              >
                Adopt
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis text-[#a2bb31]">
            Adopt a Cat
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Find your perfect feline companion at Cat Rescue. All our cats are
            vaccinated, microchipped, and spayed/neutered. Your adoption fee
            helps us continue our mission of rescuing more cats in need.
          </p>
        </div>

        {/* Filter UI */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Find Your Perfect Match
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Search by name"
                className="w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <Select
                value={ageFilter}
                onValueChange={(value) => setAgeFilter(value)}
              >
                <SelectTrigger className="w-full border border-gray-300 rounded-md p-2 text-left">
                  <SelectValue placeholder="Select age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ages</SelectLabel>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="kitten">Kitten (0-12 months)</SelectItem>
                    <SelectItem value="young">
                      Young Adult (1-3 years)
                    </SelectItem>
                    <SelectItem value="adult">Adult (4-8 years)</SelectItem>
                    <SelectItem value="senior">Senior (9+ years)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select
                value={genderFilter}
                onValueChange={(value) => setGenderFilter(value)}
              >
                <SelectTrigger className="w-full border border-gray-300 rounded-md p-2 text-left">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="all">All Genders</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button
                className="w-full bg-[#a2bb31] hover:bg-[#8fa82a]"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="urgent"
                checked={urgentOnly}
                onCheckedChange={(checked) => setUrgentOnly(checked === true)}
              />
              <Label htmlFor="urgent" className="text-sm font-medium">
                Urgent cases only
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="special-needs"
                checked={specialNeeds}
                onCheckedChange={(checked) => setSpecialNeeds(checked === true)}
              />
              <Label htmlFor="special-needs" className="text-sm font-medium">
                Special needs cats
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="bonded-pairs"
                checked={bondedPairs}
                onCheckedChange={(checked) => setBondedPairs(checked === true)}
              />
              <Label htmlFor="bonded-pairs" className="text-sm font-medium">
                Bonded pairs
              </Label>
            </div>
          </div>
        </div>

        {/* Cat Listings */}
        <h2 className="sr-only">Available Cats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} - ${cat.age} ${cat.gender} cat available for adoption`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={parseInt(cat.id) <= 4} // Prioritize loading first 4 images
                  />
                  {cat.urgency && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      <CircleAlert className="inline w-3 h-3 mr-1 " />
                      URGENT
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold">{cat.name}</h3>
                    <span className="text-sm text-gray-500">ID: {cat.id}</span>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {cat.age}
                    </span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {cat.gender}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#f5f9e8] text-[#8fa82a] px-2 py-1 rounded-full"
                      >
                        {tag === 'special needs' ? (
                          <>
                            <HandHeart className="inline w-3 h-3 mr-1" />
                            {tag}
                          </>
                        ) : (
                          tag
                        )}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/adopt/${cat.id}`}
                    className="block w-full text-center bg-[#a2bb31] hover:bg-[#8fa82a] text-white py-2 rounded transition"
                  >
                    Meet {cat.name}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-lg font-medium text-gray-600">
                No cats match your current filters.
              </p>
              <Button
                className="mt-4 bg-[#a2bb31] hover:bg-[#8fa82a]"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Adoption Process Section */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-dosis">
            Adoption Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#a2bb31] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Browse & Select</h3>
              <p className="text-gray-600">
                Browse our available cats and choose your new family member.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#a2bb31] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Apply</h3>
              <p className="text-gray-600">
                Fill out our adoption application form online or in person.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#a2bb31] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Meet & Adopt</h3>
              <p className="text-gray-600">
                Visit our sanctuary to meet your cat and complete the adoption.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-[#a2bb31] hover:bg-[#8fa82a] text-white px-6 py-3 text-lg">
              Start Adoption Application
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-dosis">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                What are the adoption fees?
              </h3>
              <p className="text-gray-600">
                Our adoption fees are $100 for adult cats and $150 for kittens
                under 12 months. This fee covers spay/neuter surgery,
                vaccinations, microchipping, and a health exam.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Can I adopt if I live out of state?
              </h3>
              <p className="text-gray-600">
                We primarily adopt to families in California, but may consider
                out-of-state adoptions on a case-by-case basis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                How long does the adoption process take?
              </h3>
              <p className="text-gray-600">
                Once your application is approved, you can typically adopt
                within 1-3 days, depending on scheduling.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
