import React from 'react'
import Image from 'next/image'

import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box'

export default function MainBanner() {
  return (
    <Box>
      <Box
        sx={{
          position: 'sticky',
          top: '22%',
          left: 0,
          mt: 5,
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            backgroundColor: 'rgba(0,0,0, 0.7)',
            color: 'white',
            p: 3,
          }}
        >
          <Typography
            sx={{
              typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' },
            }}
          >
            <strong>• All Insurance Claims Welcome</strong>
          </Typography>
          <Typography
            sx={{
              typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' },
            }}
          >
            • Financing available
          </Typography>
          <Typography
            sx={{
              typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' },
            }}
          >
            • Collision Repair
          </Typography>
          <Typography
            sx={{
              typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' },
            }}
          >
            • Paint Correction
          </Typography>
          <Typography
            sx={{
              typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' },
            }}
          >
            • Fiberglass Repair
          </Typography>
        </Box>
      </Box>

      <Image
        src={'/assets/main/MainBanner.webp'}
        width={1000}
        height={500}
        layout='responsive'
        alt='Islas Auto Body Logo'
        style={{ filter: 'opacity(100%)' }}
      />
    </Box>
  )
}
