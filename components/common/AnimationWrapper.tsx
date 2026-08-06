"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
}

const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimationWrapper({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.5,
  className = '',
  viewport = { once: true, margin: '-100px' },
  ...props
}: AnimationWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
