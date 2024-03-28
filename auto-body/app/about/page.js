import Box from '@mui/material/Box'

import React from 'react'

import MainHeadingBanner from '../components/MainHeading'
import WhoAreWe from '../components/WhoAreWe'

export default function Page() {
  return (
    <Box className='FadeMeIn'>
      <MainHeadingBanner smallImage={true} />
      <WhoAreWe noButton />
    </Box>
  )
}
