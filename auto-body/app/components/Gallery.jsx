'use client'
import React from 'react'
import Image from 'next/image'

import Box from '@mui/material/Box'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import { beforeAfters } from '../../public/assets/images'

export default function Gallery() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mb: 5,
      }}
    >
      <Carousel
        autoPlay={true}
        infiniteLoop
        interval={4000}
        showArrows={true}
        emulateTouch
        swipeable
        verticalSwipe='natural'
        dynamicHeight={true}
        showIndicators={false}
        showThumbs={false}
      >
        {beforeAfters?.map((image, i) => {
          return (
            <Box key={i}>
              <Image
                src={image.src}
                width={1000}
                height={1000}
                priority={true}
                alt='Picture of a serviced car'
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </Box>
          )
        })}
      </Carousel>
    </Box>
  )
}
