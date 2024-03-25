import React from 'react'
import { AiFillSchedule } from 'react-icons/ai'
import { MdAccountBox } from 'react-icons/md'
import { TfiGallery } from 'react-icons/tfi'
import { Box, IconButton, Typography } from '@mui/material'

import Link from 'next/link'
export default function HeaderNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: 2,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        backgroundColor: 'rgba(50, 50, 50, 0.2)',
      }}
    >
      <Box>
        {/* <Link href='/appointment'>
          <Typography color='white' fontWeight={'bold'}>
            Appointment
          </Typography>
        </Link>
        <Link href='/appointment'>
          <IconButton variant='outline' color='success' size='large'>
            <AiFillSchedule />
          </IconButton>
        </Link>
        
      */}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link href='/about'>
          <Typography color='white' fontWeight={'bold'}>
            About
          </Typography>
        </Link>
        <Link href='/about'>
          <IconButton variant='outline' color='success' size='large'>
            <MdAccountBox />
          </IconButton>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        <Link href='/gallery'>
          <Typography color='white' fontWeight={'bold'}>
            Gallery
          </Typography>
        </Link>
        <Link href='/gallery'>
          <IconButton variant='outline' color='success' size='large'>
            <TfiGallery />
          </IconButton>
        </Link>
      </Box>
    </Box>
  )
}
