import Box from '@mui/material/Box'

import React from 'react'

import MainHeadingBanner from '../components/MainHeading'
import Inquire from '../components/Inquire'
export default function Page() {
  return (
    <Box className='FadeMeIn'>
      <MainHeadingBanner smallImage={true} />
      <Inquire />
    </Box>
  )
}
