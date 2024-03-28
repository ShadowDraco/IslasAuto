import React from 'react'
import Box from '@mui/material/Box'
import MainHeadingBanner from '../components/MainHeading'
import Gallery from '../components/Gallery'
import MainHeadingImage from '../components/MainHeading/MainHeadingImage'
export default function page() {
  return (
    <Box className='FadeMeIn'>
      <MainHeadingBanner smallImage={true} />

      <Gallery />
      <MainHeadingImage />
    </Box>
  )
}
