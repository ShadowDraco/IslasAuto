import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import WhoAreWe from './components/WhoAreWe'
import CustomerReviews from './components/CustomerReviews'
import MainBanner from './components/MainBanner'
import MainHeadingBanner from './components/MainHeading'

import Gallery2 from './components/Gallery'

export default function Home() {
  return (
    <Box className='FadeMeIn'>
      <MainHeadingBanner />

      <MainBanner />

      <WhoAreWe />

      <Gallery2 />

      <CustomerReviews />

      <Typography sx={{ mt: 2, textAlign: 'center' }}>
        Web Services by{' '}
        <Link target='_blank' href='https://github.com/shadowdraco'>
          Ethan Storm
        </Link>
      </Typography>
    </Box>
  )
}
