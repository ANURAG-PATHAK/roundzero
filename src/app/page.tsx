"use client"

import Navbar from '@/components/Navbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import CustomCursor from '@/components/ui/CustomCursor'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <MaxWidthWrapper>
        <motion.div
          className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Your amazing website{' '}
            <motion.span
              className='text-blue-600'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              content here
            </motion.span>
          </motion.h1>
        </motion.div>
      </MaxWidthWrapper>
    </>
  )
}
