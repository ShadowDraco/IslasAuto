import Image from 'next/image'
import Box from '@mui/material/Box'
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
    </Box>
  )
}
