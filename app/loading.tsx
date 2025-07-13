'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true)

  // Hide loader after 5 seconds to prevent infinite display
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Don't render if we've timed out
  if (!showLoader) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="relative w-64 h-24">
        {/* Paw prints walking across screen */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${i * 20}%`, top: '50%' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -15, 0],
              x: [0, 10, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          >
            <CatPaw color="#a2bb31" size={i % 2 === 0 ? 36 : 30} />
          </motion.div>
        ))}

        {/* Text under the paws */}
        <motion.p
          className="absolute bottom-0 left-0 right-0 text-center text-[#a2bb31] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Finding furry friends...
        </motion.p>
      </div>
    </div>
  )
}

// Cat paw SVG component
const CatPaw = ({
  color = '#a2bb31',
  size = 36,
}: {
  color?: string
  size?: number
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5,13.29c-.83,2.33-2.17,3.7-3.66,3.7a2.43,2.43,0,0,1-2.33-1.9,4.91,4.91,0,0,0-4.77,0,2.43,2.43,0,0,1-2.33,1.9c-1.49,0-2.83-1.37-3.66-3.7-.87-2.46-.6-5.76,3.49-8a12.64,12.64,0,0,1,9.77,0C21.1,7.53,21.37,10.83,20.5,13.29Z"
      fill={color}
    />
    <path
      d="M9.5,7.79c-1,0-1.88-1.14-2-2.54A2.84,2.84,0,0,1,8.29,3a1.67,1.67,0,0,1,1.4-.72,1.28,1.28,0,0,1,1.2.52A2.83,2.83,0,0,1,11.5,5C11.38,6.39,10.54,7.79,9.5,7.79Z"
      fill={color}
    />
    <path
      d="M14.5,7.79c1,0,1.88-1.14,2-2.54A2.84,2.84,0,0,0,15.71,3a1.67,1.67,0,0,0-1.4-.72,1.28,1.28,0,0,0-1.2.52A2.83,2.83,0,0,0,12.5,5C12.62,6.39,13.46,7.79,14.5,7.79Z"
      fill={color}
    />
    <path
      d="M6.35,9.29A1.7,1.7,0,0,0,5.15,8.5,1.28,1.28,0,0,0,3.85,9,2.83,2.83,0,0,0,3.15,11c.12,1.4,1,2.79,2,2.79s1.88-1.14,2-2.54A2.84,2.84,0,0,0,6.35,9.29Z"
      fill={color}
    />
    <path
      d="M18.85,9a1.28,1.28,0,0,0-1.3-.5,1.7,1.7,0,0,0-1.2.79,2.84,2.84,0,0,0-.85,1.71c.12,1.4,1,2.54,2,2.54s1.88-1.39,2-2.79A2.83,2.83,0,0,0,18.85,9Z"
      fill={color}
    />
  </svg>
)

export default Loader
