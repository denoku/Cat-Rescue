'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { RunningCat } from '@/components/RunningCat'

const heroImages = [
  '/kittens.jpg',
  '/catHappy.jpg',
  '/cat.jpg',
  '/kittens.jpg',
  '/kittens.jpg',
]

function Counter({
  value,
  description,
}: {
  value: number
  description: string
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const { ref, inView } = useInView({ triggerOnce: true })
  const [cats, setCats] = useState<number[]>([])

  useEffect(() => {
    if (inView) {
      // Animate counter
      const animation = animate(count, value, { duration: 2 })

      // Generate running cats
      const numCats = 5
      const newCats = Array.from({ length: numCats }, (_, i) => i)
      setCats(newCats)

      return animation.stop
    }
  }, [count, value, inView])

  return (
    <div ref={ref} className="text-center relative overflow-hidden h-40">
      {cats.map((_, i) => (
        <RunningCat key={i} delay={i * 0.4} />
      ))}
      <motion.h3 className="text-5xl font-bold text-white mb-2">
        {rounded}
      </motion.h3>
      <p className="text-lg text-white/90">{description}</p>
    </div>
  )
}

function MobileCounter({
  value,
  description,
}: {
  value: number
  description: string
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const animation = animate(count, value, { duration: 2 })
      return animation.stop
    }
  }, [count, value, inView])

  return (
    <div ref={ref} className="text-center bg-black/30 p-4 rounded-lg">
      <motion.h3 className="text-3xl font-bold text-white">{rounded}</motion.h3>
      <p className="text-sm text-white/90 mt-1">{description}</p>
    </div>
  )
}

export default function LandingPage() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const total = heroImages.length
  const [showWebcam, setShowWebcam] = useState(false)

  // Autoplay with fade animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent((c) => (c === total - 1 ? 0 : c + 1))
        setFade(true)
      }, 400) // fade out duration
    }, 4000) // time per slide
    return () => clearTimeout(timeout)
  }, [current, total])

  const prev = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((c) => (c === 0 ? total - 1 : c - 1))
      setFade(true)
    }, 400)
  }
  const next = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((c) => (c === total - 1 ? 0 : c + 1))
      setFade(true)
    }, 400)
  }

  return (
    <main
      className="flex flex-col"
      role="main"
      aria-label="Cat Rescue Home Page"
    >
      {/* Hero Section */}
      <header
        className="relative h-[50vh] w-full overflow-hidden"
        role="banner"
      >
        <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
          <button
            type="button"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
            <img
              src={heroImages[current]}
              alt={`Hero ${current + 1}`}
              className="block w-full backdrop-blur-sm object-cover h-[50vh]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/20">
              <h1 className="text-5xl md:text-7xl font-bold font-sans text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center">
                Cat Rescue
              </h1>
            </div>
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide="prev"
          onClick={prev}
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide="next"
          onClick={next}
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </header>

      {/* Alternating Sections */}
      <article className="relative w-full px-8 mt-5 min-h-[320px] sm:min-h-[400px] md:min-h-[500px] ">
        <h1 className="sr-only">Cat Rescue - Largest No-Kill Cat Sanctuary</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
          <div className="relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/cat5.jpg"
              alt="Our Mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <section aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-3xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              Cat Rescue is a leading no-cage, no-kill sanctuary and adoption
              center dedicated to feline welfare. Our mission is to place
              rescued cats and kittens into loving, permanent homes, provide a
              safe and enriching environment for unwanted cats, prevent pet
              overpopulation through spaying and neutering programs, and educate
              the public about responsible pet ownership.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              As a 501(c)(3) nonprofit organization, Cat Rescue operates without
              government funding and relies entirely on donations from
              compassionate supporters. Since our founding, we've saved over
              50,000 cats and 7,000 dogs, and have spayed and neutered
              approximately 90,000 animals! Our sanctuary currently cares for
              more than 700 cats and kittens daily, along with other rescued
              animals. Find out more about our{' '}
              <Link href="/about" className="text-blue-600">
                history and mission
              </Link>{' '}
              or how you can{' '}
              <Link href="/contribute" className="text-blue-600">
                contribute
              </Link>{' '}
              to our cause.
            </p>
          </section>
        </div>
      </article>

      {/* Reversed Section */}
      <section className="relative w-full px-8 mt-5 mb-3 min-h-[320px] sm:min-h-[400px] md:min-h-[500px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px] md:order-2">
            <Image
              src="/spay.jpg"
              alt="Our Impact"
              fill
              loading="lazy"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">
              Low-Cost Spay/Neuter Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Spaying and neutering is a vital step in controlling the cat
              population and ensuring healthier, happier lives for our feline
              friends. We offer affordable spay/neuter surgeries to help make
              responsible pet ownership accessible to everyone. Our low-cost
              services are available to the public and aim to reduce the number
              of unwanted litters, prevent certain health issues, and reduce
              behaviors like spraying or roaming. Whether you're a pet owner or
              caring for community cats, we're here to help make spay/neuter
              simple and affordable. {''}
              <Link href="/adopt" className="text-blue-600 ">
                schedule an appointment
              </Link>{' '}
              or{' '}
              <Link href="/spay-neuter" className="text-blue-600">
                learn more
              </Link>{' '}
              about our program and eligibility requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Video/Webcam Demo Section */}
      <section className="relative w-full bg-gray-50 px-8 mt-3 mb-3 min-h-[320px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <div className="absolute inset-0 bg-black/5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px]">
            {/* Demo Image with Overlays */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-gray-200">
              <Image
                fill
                alt="Live Cat Webcam Demo"
                className="object-cover rounded-lg"
                src="/success-after-1.jpg"
                style={{ filter: 'grayscale(30%) brightness(80%)' }}
              />

              {/* Add webcam-like elements */}
              <div className="absolute top-0 left-0 right-0 bg-black/70 text-white text-xs p-2 flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
                <span>DEMO: Live Cat Rescue Webcam</span>
              </div>

              {/* Demo video controls at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-white/20 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-white/20 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01-.707-7.07m-2.122 9.9a9 9 0 010-12.728"
                      />
                    </svg>
                  </button>
                </div>
                <span className="text-xs opacity-70">Portfolio Demo</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Live Cat Webcam</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Watch our cats live on our 24/7 webcam! All of the cats you see
              here are looking for their forever home. If you see any you like,
              make sure to fill out an adoption application.
              <span className="block mt-2 text-sm italic">
                (This is a portfolio demo - actual webcam functionality would be
                implemented for a real client)
              </span>
            </p>
            <Button
              asChild
              className="mt-2 px-4 py-2 bg-[#a2bb31] text-white rounded hover:bg-[#a2bb31]/80 transition"
            >
              <Link href="/adopt/application">Adoption Form</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Section  */}
      <section className="bg-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-600">
              Urgent: Cats Needing Immediate Homes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="relative aspect-square w-full mb-3">
                <Image
                  src="/cat3.jpg"
                  alt="Urgent - Senior Cat"
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  URGENT
                </div>
              </div>
              <h3 className="font-bold text-lg">Oscar (Senior, 12yrs)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Oscar needs a home ASAP due to shelter overcrowding. Senior cats
                have lower adoption rates but make wonderful companions!
              </p>
              <Link
                href="/urgent-adopt"
                className="block w-full bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded transition"
              >
                Help Oscar Now
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="relative aspect-square w-full mb-3">
                <Image
                  src="/blackcat.jpg"
                  alt="Urgent - Senior Cat"
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  URGENT
                </div>
              </div>
              <h3 className="font-bold text-lg">Brady ( 5yrs)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Brady came in a stray. He is the sweetest boy and will thrive in
                a loving, patient home willing to help him heal.
              </p>
              <Link
                href="/urgent-adopt"
                className="block w-full bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded transition"
              >
                Help Brady Now
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="relative aspect-square w-full mb-3">
                <Image
                  src="/cat6.jpg"
                  alt="Urgent - Senior Cat"
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  URGENT
                </div>
              </div>
              <h3 className="font-bold text-lg">Parker (Senior, 14yrs)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Parkers family had to move and couldn't take him. He is a sweet
                senior who deserves a loving home in his golden years.
              </p>
              <Link
                href="/urgent-adopt"
                className="block w-full bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded transition"
              >
                Help Parker Now
              </Link>
            </div>

            {/* Add 1-2 more urgent cases */}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center font-dosis mb-8">
            <span className="text-[#a2bb31]">Cat Care Resources</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Our team has created these helpful guides to ensure your new feline
            friend thrives in your home. Download these free resources for
            everything you need to know about cat care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Resource 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 bg-[#f5f9e8] flex items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#a2bb31]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">New Cat Owner Guide</h3>
                <p className="text-gray-600 mb-4">
                  Essential tips for the first 30 days with your new cat,
                  including settling in, introductions to other pets, and
                  building trust.
                </p>
                <Link
                  href="/resources/new-cat-guide.pdf"
                  className="inline-flex items-center text-[#a2bb31] font-semibold hover:underline"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 bg-[#f5f9e8] flex items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#a2bb31]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Cat Nutrition Guide</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive information on feeding your cat at different
                  life stages, recommended foods, and handling dietary
                  restrictions.
                </p>
                <Link
                  href="/resources/cat-nutrition.pdf"
                  className="inline-flex items-center text-[#a2bb31] font-semibold hover:underline"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 bg-[#f5f9e8] flex items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#a2bb31]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Play & Enrichment</h3>
                <p className="text-gray-600 mb-4">
                  Ideas for toys, games, and activities that will keep your cat
                  mentally stimulated and physically active at any age.
                </p>
                <Link
                  href="/resources/cat-enrichment.pdf"
                  className="inline-flex items-center text-[#a2bb31] font-semibold hover:underline"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 bg-[#f5f9e8] flex items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#a2bb31]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Health Checklist</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive health monitoring guide to help you recognize
                  symptoms, know when to see a vet, and keep track of
                  vaccinations.
                </p>
                <Link
                  href="/resources/cat-health.pdf"
                  className="inline-flex items-center text-[#a2bb31] font-semibold hover:underline"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resources"
              className="inline-block bg-[#a2bb31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8fa82a] transition"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </section>
      {/* Adopt a Cat Section */}
      <section className="bg-gray-300 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold uppercase font-dosis">
            <span className="text-[#a2bb31]">Adopt a Cat</span>
          </h2>
        </div>

        {/* Card grid container */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Cat 1 */}
            <Link href="/adopt" className="w-full text-center">
              <div className="relative aspect-square w-full border-black border-2">
                <Image
                  src="/cat1.jpg"
                  alt="Adopt a Cat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold font-raleway">
                  Mr. Whiskers
                </p>
              </div>
            </Link>
            <Link href="/adopt" className="w-full text-center">
              <div className="relative aspect-square w-full border-black border-2">
                <Image
                  src="/cat2.jpg"
                  alt="Adopt a Cat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold font-raleway">
                  Puss in Booots
                </p>
              </div>
            </Link>
            <Link href="/adopt" className="w-full text-center">
              <div className="relative aspect-square w-full border-black border-2">
                <Image
                  src="/cat4.jpg"
                  alt="Adopt a Cat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold font-raleway">Luna</p>
              </div>
            </Link>
            <Link href="/adopt" className="w-full text-center">
              <div className="relative aspect-square w-full border-black border-2">
                <Image
                  src="/cat3.jpg"
                  alt="Adopt a Cat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold font-raleway">Sassles</p>
              </div>
            </Link>
            {/* Repeat for other cats */}
          </div>
        </div>
      </section>

      {/*Latest News Section*/}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center font-dosis text-[#a2bb31]">
            Latest News & Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <article className="rounded-lg border border-gray-200 shadow hover:shadow-lg transition overflow-hidden bg-gray-50 flex flex-col">
              <Image
                src="/kitten.jpg"
                alt="Rescue Story"
                width={600}
                height={350}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 font-raleway">
                  Miracle Rescue: Tiny Kitten Survives Against All Odds
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Meet Peanut, a kitten found abandoned and fighting for life.
                  Thanks to our supporters, Peanut is now thriving in a loving
                  home!
                </p>
                <Link
                  href="/blog/miracle-rescue"
                  className="text-[#a2bb31] font-semibold hover:underline mt-auto"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
            {/* Blog Post 2 */}
            <article className="rounded-lg border border-gray-200 shadow hover:shadow-lg transition overflow-hidden bg-gray-50 flex flex-col">
              <Image
                src="/kittens1.jpg"
                alt="Adoption Event"
                width={600}
                height={350}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 font-raleway">
                  Summer Adoption Fair: 30 Cats Find Forever Homes!
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Our recent adoption event was a huge success. Thank you to
                  everyone who came out and gave our cats a second chance!
                </p>
                <Link
                  href="/blog/adoption-fair"
                  className="text-[#a2bb31] font-semibold hover:underline mt-auto"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
            {/* Blog Post 3 */}
            <article className="rounded-lg border border-gray-200 shadow hover:shadow-lg transition overflow-hidden bg-gray-50 flex flex-col">
              <Image
                src="/blog1.jpg"
                alt="Volunteer Spotlight"
                width={600}
                height={350}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 font-raleway">
                  Volunteer Spotlight: Meet Sarah, Our Cat Whisperer
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Sarah has dedicated hundreds of hours to caring for our cats.
                  Learn about her journey and why she loves volunteering here.
                </p>
                <Link
                  href="/blog/volunteer-sarah"
                  className="text-[#a2bb31] font-semibold hover:underline mt-auto"
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-block bg-[#a2bb31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8fa82a] transition"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
      {/* Success Stories Preview Section */}
      <section className="bg-[#f5f9e8] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold uppercase font-dosis">
              <span className="text-[#a2bb31]">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Meet some of the cats who found their forever homes thanks to our
              sanctuary and the compassionate families who adopted them.
            </p>
          </div>

          {/* Featured Success Story */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/success-after-3.jpg"
                  alt="Shadow in his new home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-lg overflow-hidden border-4 border-white">
                <Image
                  src="/success-before-3.jpg"
                  alt="Shadow before adoption"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Shadow's Story</h3>
              <p className="text-lg mb-4">
                Shadow was with us for over a year after being found as a stray.
                This shy black cat finally found his perfect match with the
                Johnson family, who gave him time and patience to adjust.
              </p>
              <blockquote className="italic border-l-4 border-[#a2bb31] pl-4 mb-6">
                "Shadow now sleeps on our bed every night and has become the
                most loving companion we could ask for!"
              </blockquote>
              <Button asChild className="bg-[#a2bb31] hover:bg-[#8fa82a]">
                <Link href="/success-stories">Read More Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*Donate Section*/}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:h-[calc(70vh-4rem)] w-full py-8 md:py-0">
        <Image
          src="/catHappy.jpg"
          alt="Donate to Our Cause"
          fill
          loading="lazy"
          className="object-cover brightness-50 -z-10"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Responsive heading - smaller on mobile */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-dosis text-[#a2bb31] text-center text-shadow-lg/60 mb-4 sm:mb-6 md:mb-8">
            Your Donation Makes a Difference!
          </h1>

          {/* Stats Row - horizontal scroll on mobile, grid on desktop */}
          <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4">
            {/* Mobile view (horizontal scroll) */}
            <div className="flex md:hidden gap-4 pb-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="min-w-[220px] flex-shrink-0 snap-center">
                <MobileCounter value={52311} description="Cats Saved" />
              </div>
              <div className="min-w-[220px] flex-shrink-0 snap-center">
                <MobileCounter value={7900} description="Dogs Rescued" />
              </div>
              <div className="min-w-[220px] flex-shrink-0 snap-center">
                <MobileCounter
                  value={90000}
                  description="Animals Spayed/Neutered"
                />
              </div>
            </div>

            {/* Desktop view (grid) */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              <Counter value={52311} description="Cats Saved" />
              <Counter value={7900} description="Dogs Rescued" />
              <Counter value={90000} description="Animals Spayed/Neutered" />
            </div>
          </div>

          {/* Donation Buttons - smaller on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-xl mx-auto px-4">
            <Button className="bg-[#a2bb31] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:p-4 text-white hover:bg-[#a2bb31]/80 transition-colors text-base sm:text-xl md:text-2xl font-semibold rounded-md">
              <Link href={'/donate'}>Donate Now</Link>
            </Button>
            <Button className="bg-[#a2bb31] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:p-4 text-white hover:bg-[#a2bb31]/80 transition-colors text-base sm:text-xl md:text-2xl font-semibold rounded-md">
              <Link href={'/donate'}>Give Monthly</Link>
            </Button>
            <Button className="bg-[#a2bb31] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:p-4 text-white hover:bg-[#a2bb31]/80 transition-colors text-base sm:text-xl md:text-2xl font-semibold rounded-md">
              <Link href={'/donate'}>Wishlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/*Newsletter Section*/}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 font-dosis">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest updates on our cats,
            events, and ways you can help.
          </p>
          <form className="max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
            />
            <Button
              type="submit"
              className="bg-[#a2bb31] text-white px-6 py-3 rounded-lg hover:bg-[#a2bb31]/80 transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
