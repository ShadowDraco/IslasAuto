import HeaderNav from './HeaderNav'
import MainHeading from './MainHeading'
import MainHeadingImage from './MainHeadingImage'

import Box from '@mui/material/Box'
export default function MainHeadingBanner({ smallImage }) {
  return (
    <Box
      sx={{
        display: 'flex',
      
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '100%',
        backgroundColor: 'rgba(0, 0, 0)',
      }}
    >
      <MainHeading />
      <HeaderNav />
    </Box>
  )
}
