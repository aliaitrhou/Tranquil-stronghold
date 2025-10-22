"use client"

import React from 'react'
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  classNames: string;
  delay?: number;
}


const AnimatedSection = ({ children, classNames, delay }: AnimatedSectionProps) => {
  return (
    <motion.div
      className={classNames}
      initial={{ opacity: 0, translateX: -80 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay, duration: 0.7 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection;
