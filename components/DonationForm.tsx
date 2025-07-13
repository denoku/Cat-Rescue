'use client'
// Donation form component for Cat House on the Kings
import { useState } from 'react'
import { Button } from '@/components/ui/button'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, CreditCard, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export const DonationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formSchema = z.object({
    amount: z.enum(['25', '50', '100', '250', 'custom']),
    customAmount: z.string().optional(),
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    isMonthly: z.boolean().default(false),
    cardNumber: z.string().min(15, 'Card number is required'),
    cardName: z.string().min(2, 'Name on card is required'),
    expiryDate: z.string().min(5, 'Expiry date is required'),
    cvv: z.string().min(3, 'CVV is required'),
    isAnonymous: z.boolean().default(false),
    inMemoryOf: z.string().optional(),
    notes: z.string().optional(),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '50',
      customAmount: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      isMonthly: false,
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      isAnonymous: false,
      inMemoryOf: '',
      notes: '',
    },
  })

  const selectedAmount = form.watch('amount')
  const isCustomAmount = selectedAmount === 'custom'

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
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-[#f5f9e8] rounded-full flex items-center justify-center mb-4">
            <Image
              src="/thankyou.png"
              alt="Thank You"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            {/* <Heart className="w-8 h-8 text-[#a2bb31]" /> */}
          </div>
          <CardTitle className="text-2xl text-center">
            Thank You for Your Support!
          </CardTitle>
          <CardDescription className="text-center">
            Your generous donation will help care for our cats and kittens.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            We've sent a receipt to your email. Your support makes our mission
            possible!
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-[#a2bb31] hover:bg-[#8fa82a]">
            <a href="/">Return to Homepage</a>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Donation Amount</CardTitle>
            <CardDescription>
              Choose how much you'd like to donate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Donation Amount</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-3 gap-4"
                    >
                      {[25, 50, 100, 250].map((amount) => (
                        <FormItem
                          key={amount}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={amount.toString()}
                              className="sr-only"
                            />
                          </FormControl>
                          <FormLabel
                            className={`w-full cursor-pointer rounded-lg border border-gray-200 p-4 text-center ${
                              field.value === amount.toString()
                                ? 'bg-[#a2bb31] text-white border-transparent'
                                : 'hover:bg-[#f5f9e8]'
                            }`}
                          >
                            ${amount}
                          </FormLabel>
                        </FormItem>
                      ))}
                      <FormItem className="flex items-center space-x-2 col-span-2">
                        <FormControl>
                          <RadioGroupItem value="custom" className="sr-only" />
                        </FormControl>
                        <FormLabel
                          className={`w-full cursor-pointer rounded-lg border border-gray-200 p-4 flex items-center ${
                            field.value === 'custom'
                              ? 'bg-[#a2bb31] text-white border-transparent'
                              : 'hover:bg-[#f5f9e8]'
                          }`}
                        >
                          Custom Amount
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isCustomAmount && (
              <FormField
                control={form.control}
                name="customAmount"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Custom Amount ($)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter amount"
                        type="number"
                        min="1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="isMonthly"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2 mt-6">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Make this a monthly donation</FormLabel>
                    <FormDescription>
                      Your support will help our cats every month
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
            <CardDescription>
              Please provide your contact information for the receipt.
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
                  <FormDescription>
                    We'll send your receipt to this email address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 555-5555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isAnonymous"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2 mt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Make my donation anonymous</FormLabel>
                    <FormDescription>
                      Your name won't appear in our donor list
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
            <CardDescription>
              Your payment information is secure and encrypted.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="w-5 h-5 text-[#a2bb31]" />
              <span className="font-medium">Credit Card</span>
            </div>

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name on Card *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full name as shown on card"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date *</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV *</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-[#f5f9e8] p-3 rounded-lg mt-4 flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-[#a2bb31] mt-0.5" />
              <p className="text-sm">
                This is a demo form. No actual payment will be processed.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tribute Information (Optional)</CardTitle>
            <CardDescription>
              Make this donation in honor or memory of someone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="inMemoryOf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>In Memory/Honor Of</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of person or pet" {...field} />
                  </FormControl>
                  <FormDescription>
                    Leave blank if this is not a tribute gift
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Notes</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Any special instructions or notes about your donation"
                      {...field}
                    />
                  </FormControl>
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
            {isSubmitting ? 'Processing...' : 'Complete Donation'}
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Cat House on the Kings is a 501(c)(3) nonprofit organization. Your
          donation is tax-deductible to the extent allowed by law.
        </p>
      </form>
    </Form>
  )
}
