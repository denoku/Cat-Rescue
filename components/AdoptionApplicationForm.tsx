'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

export const AdoptionApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    address: z.string().min(5, 'Address is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    zip: z.string().min(5, 'ZIP code is required'),
    housingType: z.enum(['house', 'apartment', 'condo', 'other']),
    ownRent: z.enum(['own', 'rent']),
    landlordPermission: z.boolean().optional(),
    landlordName: z.string().optional(),
    landlordPhone: z.string().optional(),
    children: z.enum(['yes', 'no']),
    childrenAges: z.string().optional(),
    otherPets: z.enum(['yes', 'no']),
    otherPetsDetails: z.string().optional(),
    veterinarian: z.string().optional(),
    veterinarianPhone: z.string().optional(),
    catPreference: z.string(),
    specificCat: z.string().optional(),
    commitment: z.boolean(),
    adoptionReasons: z.string(),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      housingType: 'house',
      ownRent: 'own',
      landlordPermission: false,
      landlordName: '',
      landlordPhone: '',
      children: 'no',
      childrenAges: '',
      otherPets: 'no',
      otherPetsDetails: '',
      veterinarian: '',
      veterinarianPhone: '',
      catPreference: '',
      specificCat: '',
      commitment: false,
      adoptionReasons: '',
    },
  })

  const showLandlordFields = form.watch('ownRent') === 'rent'
  const showChildrenFields = form.watch('children') === 'yes'
  const showPetFields = form.watch('otherPets') === 'yes'

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(values)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-[#a2bb31]">
            Application Submitted!
          </CardTitle>
          <CardDescription>
            Thank you for your interest in adopting from Cat Rescue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We have received your application and will review it shortly. Our
            team will contact you within 2-3 business days to discuss next
            steps.
          </p>
          <p>
            If you have any questions in the meantime, please contact us at{' '}
            <Link href="#" className="text-[#a2bb31] underline">
              [Organization]
            </Link>{' '}
            or call us at (123) 456-7890.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="bg-[#a2bb31] hover:bg-[#8fa82a]">
            <Link href="/adopt">Browse More Cats</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto space-y-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Please provide your contact information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="youremail@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 555-5555" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-2">
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State *</FormLabel>
                    <FormControl>
                      <Input placeholder="CA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP *</FormLabel>
                    <FormControl>
                      <Input placeholder="12345" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Residence Information</CardTitle>
            <CardDescription>
              Tell us about your living situation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="housingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Housing Type *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-wrap gap-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="house" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          House
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="apartment" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Apartment
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="condo" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Condo
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Other
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ownRent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you own or rent your home? *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="own" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Own
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="rent" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Rent
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showLandlordFields && (
              <div className="space-y-4 p-4 border border-gray-200 rounded-md">
                <FormField
                  control={form.control}
                  name="landlordPermission"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I have permission from my landlord to have pets *
                        </FormLabel>
                        <FormDescription>
                          We may contact your landlord to verify permission
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="landlordName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Landlord Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Landlord name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="landlordPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Landlord Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Landlord phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Household Information</CardTitle>
            <CardDescription>
              Tell us about who lives in your home.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have children in the home? *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Yes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          No
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showChildrenFields && (
              <FormField
                control={form.control}
                name="childrenAges"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Children&apos;s Ages</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5, 8, 12" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please list ages of all children in the home
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="otherPets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have other pets? *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Yes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          No
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showPetFields && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="otherPetsDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Pets</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please list species, breed, age, and whether they are spayed/neutered"
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="veterinarian"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Veterinarian Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Dr. Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="veterinarianPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Veterinarian Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 555-5555" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adoption Preferences</CardTitle>
            <CardDescription>
              Tell us about the cat you&apos;re interested in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="catPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cat Preferences *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe what you're looking for in a cat (age, temperament, etc.)"
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specificCat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specific Cat</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Cat name or ID (if applying for a specific cat)"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Leave blank if you don&apos;t have a specific cat in mind
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="adoptionReasons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reasons for Adoption *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please tell us why you want to adopt a cat and how this fits into your lifestyle"
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="commitment"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I understand that adopting a cat is a 15-20 year
                      commitment *
                    </FormLabel>
                    <FormDescription>
                      Cats require lifelong care including food, litter,
                      veterinary care, and love
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#a2bb31] hover:bg-[#8fa82a] px-8 py-6 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
