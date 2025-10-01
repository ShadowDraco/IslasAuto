
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import MainHeadingImage from './components/MainHeading/MainHeadingImage'
import WhoAreWe from './components/WhoAreWe'
import CustomerReviews from './components/CustomerReviews'
import Teaser from './components/Teaser'
import Services from './components/Services'

export default function Home() {
  return (
    <Box>
        <Container sx={{ mt: 0, pt: 0}}>
          <MainHeadingImage />
          <Services />
          <WhoAreWe />
          <Teaser />
          <CustomerReviews />
        </Container>
    </Box>
  )
}
