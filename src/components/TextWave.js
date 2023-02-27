import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function RollerCoasterText() {

  const variants = {
    hide: {
      opacity: 0,
      y: 80,
      rotate: '9deg'
    },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      rotate: '0deg',
      transition: {
        delay,
        duration: .6,
        type: 'tween',
        ease: 'easeInOut'
      }
    }),
  }

  return (
    <Box sx={{
      py: '40px',
      'p': {
        fontSize: '60px',
        lineHeight: '45px',
        mb: '20px!important',
        fontWeight: 'bold',
        transformOrigin: 'top left'
      }
    }}>
      <Box overflow={'hidden'}>
        <motion.p
          variants={variants}
          initial='hide'
          animate='show'
          custom={0}
        >
          Text wave reveal
        </motion.p>
      </Box>

      <Box overflow={'hidden'}>
        <motion.p
          variants={variants}
          initial='hide'
          animate='show'
          custom={0.1}
        >
          Top Lorem ipsum
        </motion.p>
      </Box>

      <Box overflow={'hidden'}>
        <motion.p
          variants={variants}
          initial='hide'
          animate='show'
          custom={0.2}
        >
          Middle Lorem ipsum
        </motion.p>
      </Box>

      <Box overflow={'hidden'}>
        <motion.p
          variants={variants}
          initial='hide'
          animate='show'
          custom={0.3}
        >
          Bottom Lorem ipsum
        </motion.p>
      </Box>


    </Box>
  )
}