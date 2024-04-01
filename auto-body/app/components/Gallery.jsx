'use client'
import React from 'react'
import Box from '@mui/material/Box'

import ImageGallery from 'react-image-gallery'
import { beforeAfters } from '../../public/assets/images'
const beforeAftersItems = beforeAfters.map(image => {
  return {
    original: image.src,
    thumbnail: image.src,
    alt: 'A car worked on by Islas!',
  }
})

export default function Gallery() {
  return (
    <Box sx={{ my: 5}}>
      <ImageGallery
        items={beforeAftersItems}
        lazyLoad
        autoPlay
        style={{ maxWidth: '100%' }}
      />
    </Box>
  )
}
