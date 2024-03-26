import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import WhoAreWe from './components/WhoAreWe'
import CustomerReviews from './components/CustomerReviews'
import MainBanner from './components/MainBanner'
import MainHeadingBanner from './components/MainHeading'
import BeforeAftersGallery from './components/BeforeAftersGallery'

export default function Home() {
  return (
    <Box>
      <MainHeadingBanner />

      <MainBanner />

      <WhoAreWe />

      <BeforeAftersGallery />

      <CustomerReviews />

      <Typography>
        Web Services by{' '}
        <Link target='_blank' href='https://github.com/shadowdraco'>
          Ethan Storm
        </Link>
      </Typography>
    </Box>
  )
}
