'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setVisible(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#a2bb31] p-3 flex justify-between items-center z-50 md:hidden">
      <div className="text-white font-bold text-sm">
        Help save a cat today!
      </div>
      <Link 
        href="/donate"
        className="bg-white text-[#a2bb31] px-4 py-2 rounded-md font-bold text-sm"
      >
        Donate Now
      </Link>
    </div>
  )
}