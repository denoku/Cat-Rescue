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
      aria-label="Cat House on the Kings Home Page"
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
                Cat House on the Kings
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
        <h1 className="sr-only">
          Cat House on the Kings - California's Largest No-Kill Cat Sanctuary
        </h1>
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
              The Cat House on the Kings is California's largest no-cage,
              no-kill, lifetime cat sanctuary and adoption center. Our mission
              is to place rescued cats and kittens into loving, permanent homes.
              To provide a safe, happy and healthy home for unwanted cats and
              kittens in a unique, no-cage facility. To prevent pet
              overpopulation through spaying and neutering and to educate the
              public about responsible pet ownership.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              The Cat House is a 501(c)(3) nonprofit corporation, receives no
              government or public funding, and relies entirely on donations
              from the public to carry out its mission. Since its founding 33
              years ago, The Cat House on the Kings has saved an estimated
              52,311 cats and 7,900 dogs, not counting the 90,000 animals (est.)
              we have spayed & neutered! We currently care for more than 700
              cats and kittens, a dozen or so dogs and dozens of peacocks. Find
              out more about our{' '}
              <Link href="/about" className="text-blue-600 ">
                history and mission
              </Link>{' '}
              or how you can{' '}
              <Link href="/contribute" className="text-blue-600 ">
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
              We can help with low-cost spay/neuter surgery!
            </h2>
            <p className="text-lg text-muted-foreground">
              The adoption center at the sanctuary in Parlier is open afternoons
              1pm-4pm by appointment only. You must submit an{' '}
              <Link href="/adopt" className="text-blue-600 ">
                online application
              </Link>{' '}
              and receive an approval e-mail before making an adoption
              appointment. Please call{' '}
              <Link href="tel:(559) 638-8696" className="text-blue-600 ">
                (559) 638-8696 (Option 1)
              </Link>{' '}
              for an appointment before coming by. Our off-site adoption center
              inside
              <a
                href="https://maps.google.com/?q=Petco 4144 N. Blackstone Ave, Fresno, CA"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-blue-700 font-semibold underline hover:text-blue-900"
              >
                {' '}
                Petco at 4144 N. Blackstone at Ashlan in Fresno
              </a>{' '}
              is open daily 10:30am-5pm and Wednesday 10:30am-6pm (photos,
              video). Call {'  '}
              <Link href="tel:(559) 222-0228" className="text-blue-600 ">
                (559) 222-0228
              </Link>{' '}
              for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Video Switcher Section */}
      <section className="relative w-full bg-gray-50 px-8 mt-3 mb-3 min-h-[320px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <div className="absolute inset-0 bg-black/5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px]">
            {/* Animation wrapper */}

            {/* YouTube Tour Video */}
            {/* <iframe
                className={`absolute w-full h-full rounded-lg border-0 transition-opacity duration-500 ${
                  showWebcam ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                src="https://www.youtube.com/embed/R4u41ysH3eE"
                title="Watch Our Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            {/* Webcam Video */}
            <Link
              href="https://www.cathouseonthekings.com/video/webcam.php/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Update this later to Next/Image but need to update next.config.ts to allow website */}
              <Image
                fill
                alt="Cat House Webcam"
                className="object-cover rounded-lg"
                src="https://www.cathouseonthekings.com/video/snapshot/webcamsnapshot.php/2"
                title="Cat House Webcam"
              />
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Live Cat House Webcam
              {/* {showWebcam ? 'Live Cat House Webcam' : 'Watch Our Video'} */}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {/* {showWebcam
                ?  */}
              Watch our cats live on our 24/7 webcam! All of the cats you see
              here are looking for the new forever home. If you see any you like
              make sure to fill out for an adoption!'
              {/* : 'Lynea Lattanzio, who founded and runs The Cat House on the Kings, talks about how it came about and gives you a peek into our unique environment in these videos by Jack Perez and Chris Poole.'} */}
            </p>
            <button
              className="mt-2 px-4 py-2 bg-[#a2bb31] text-white rounded hover:bg-[#a2bb31]/80 transition"
              onClick={() => setShowWebcam((v) => !v)}
            >
              Adoption Form
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Section - Add this before the Adopt section */}
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

      <section className="bg-gray-300 py-12">
        {/* Center the heading */}
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
              href="/blog"
              className="inline-block bg-[#a2bb31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8fa82a] transition"
            >
              View All News
            </Link>
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
