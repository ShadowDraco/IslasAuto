import React from 'react'
import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import MainHeadingBanner from './MainHeading'
export default function MainBanner() {
  return (
    <Box>
      <Image
        src={'/assets/main/MainBanner.webp'}
        width={1000}
        height={500}
        layout='responsive'
        alt='shiny polished GMC'
        style={{ filter: 'opacity(50%)' }}
      />

      <Box
        sx={{
          position: 'relative',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -150%)',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            typography: { lg: 'h1', md: 'h1', sm: 'h2', xs: 'h3' },
            my: 5,
          }}
        >
          {' '}
          Islas Auto Body
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography style={{ fontSize: 25, textAlign: 'left' }}>
            〇 Collision Repair & Insurance
          </Typography>
          <Typography style={{ fontSize: 25, textAlign: 'left' }}>
            〇 Paint Correction
          </Typography>
          <Typography style={{ fontSize: 25, textAlign: 'left' }}>
            〇 Fiberglass Repair
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
