import Box from '@mui/material/Box'

import WhoAreWe from './components/WhoAreWe'
import CustomerReviews from './components/CustomerReviews'
import MainBanner from './components/MainBanner'
import MainHeadingBanner from './components/MainHeading'

import Gallery from './components/Gallery'

export default function Home() {
  return (
    <Box className='FadeMeIn'>
      <MainHeadingBanner />

      <MainBanner />

      <WhoAreWe />

      <Gallery />

      <CustomerReviews />
    </Box>
  )
}
