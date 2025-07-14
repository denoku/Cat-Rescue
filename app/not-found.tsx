import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/jumpingcat.png"
          alt="Lost cat looking confused"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-dosis text-[#a2bb31]">
        Oops! Page Not Found
      </h1>

      <p className="text-xl text-center text-gray-600 mb-8 max-w-md">
        Looks like this page went on an adventure and got lost. Even our most
        curious cats couldn&apos;t find it!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-[#a2bb31] hover:bg-[#8fa82a] text-white">
          <Link href="/">Go Home</Link>
        </Button>
        <Button variant="outline" className="border-[#a2bb31] text-[#a2bb31]">
          <Link href="/adopt">Find a Cat</Link>
        </Button>
      </div>
    </div>
  )
}
