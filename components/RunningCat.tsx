import { motion } from 'framer-motion'

export const RunningCat = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: ['-100%', '100vw'],
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 4,
        delay,
        ease: "linear"
      }}
      className="absolute"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="white"
        className="transform -scale-x-100"
      >
        <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8Z" />
      </svg>
    </motion.div>
  )
}