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
        top: 0,
        left: 0,
        zIndex: 5,
        alignItems: 'top',
        justifyContent: 'space-between',
        minWidth: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <MainHeading />
      <HeaderNav />
    </Box>
  )
}
