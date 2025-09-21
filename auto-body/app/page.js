import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import WhoAreWe from './components/WhoAreWe'
import CustomerReviews from './components/CustomerReviews'
import Gallery from './components/Gallery'
import Services from './components/Services'
import MainHeadingImage from './components/MainHeading/MainHeadingImage'
export default function Home() {
  return (
    <Box>
      
      <MainHeadingImage />
      
      <Container sx={{ mt: 0, pt: 0}}>
        <Services />
        <WhoAreWe />
        <Gallery />
        <CustomerReviews />
      </Container>
     
    </Box>
  )
}
