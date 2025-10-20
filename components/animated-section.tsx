"use client"

import React from 'react'
import { motion } from 'framer-motion';


const AnimatedSection = ({ children, classNames }: { children: React.ReactNode, classNames: string }) => {
  return (
    <motion.div
      className={classNames}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection;
