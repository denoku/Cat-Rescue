'use client'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:gap-8 mb-8">
          {/* The Cat Section */}
          <div className="flex flex-col flex-1 min-w-0 md:items-start mt-8 md:mt-0 px-7">
            <h2 className="text-2xl font-light mb-4 text-center md:text-left font-dosis uppercase">
              About Us
            </h2>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="#"
              rel="noopener noreferrer"
            >
              Tour our sanctuary
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/adopt"
              rel="noopener noreferrer"
            >
              Foster a cat
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/about"
              rel="noopener noreferrer"
            >
              Meet our team
            </Link>
          </div>
          {/* Donate Section */}
          <div className="flex flex-col flex-1 min-w-0 md:items-start mt-8 md:mt-0 px-4">
            <h2 className="text-2xl font-light mb-4 text-center md:text-left font-dosis uppercase">
              Contribute
            </h2>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/donate"
              rel="noopener noreferrer"
            >
              Cash Donations
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/sponsor"
              rel="noopener noreferrer"
            >
              Sponsor a Cat
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/volunteer"
              rel="noopener noreferrer"
            >
              Donate items from our wishlist
            </Link>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col flex-1 min-w-0 md:items-start mt-8 md:mt-0 px-4">
            <h2 className="text-2xl font-light mb-4 text-center md:text-left font-dosis uppercase">
              Contact
            </h2>
            <p className="text-center md:text-left mb-4 text-[#a2bb31] font-bold">
              Address:
            </p>
            <p className="text-center md:text-left mb-4 text-gray-400">
              [Organization Address]
            </p>
            <p className="text-center md:text-left mb-4 text-[#a2bb31] font-bold">
              Phone:
            </p>

            <p className="text-center md:text-left mb-4 text-gray-400">
              [Phone Number]
            </p>
          </div>
          {/* Links Section */}
          <div className="flex flex-col flex-1 min-w-0 md:items-start mt-8 md:mt-0 px-4">
            <h2 className="text-2xl font-light mb-4 text-center md:text-left font-dosis uppercase">
              Links
            </h2>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/donate"
              rel="noopener noreferrer"
            >
              Adoptions
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/sponsor"
              rel="noopener noreferrer"
            >
              Surrender a Cat
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/volunteer"
              rel="noopener noreferrer"
            >
              Low Cost Spay/Neuter
            </Link>
            <Link
              className="text-center md:text-left mb-4 text-[#a2bb31] font-bold hover:text-[#a2bb31]/80"
              href="/success-stories"
              rel="noopener noreferrer"
            >
              Success Stories
            </Link>
            <div className="mt-4">
              <p className="font-light text-sm ">
                Registered 501(c)(3). <br />
                EIN: [Organization EIN]
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:gap-6 items-center justify-between px-4 md:px-0 ">
          {/* Left: Logo and Name */}
          <div className="flex items-center flex-1 space-x-4 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="text-5xl font-light font-dosis uppercase">
              Cat Rescue
            </span>
          </div>
          {/* Right: Social Links */}
          <div className="flex items-center flex-1 justify-center md:justify-end space-x-4">
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mr-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mr-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href={'#'}
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-10 w-10 mr-7"
              >
                <path
                  fill="currentColor"
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mr-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} [Organization Name]. All rights
            reserved. | Designed by Brian Wheeler
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
