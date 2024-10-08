import { Box, Typography } from '@mui/material'
import GradientSpan from '../../components/wrappers/GradientSpan'
import HeaderFooterIcons from './HeaderFooterIcons'

import Link from 'next/link'
export default function MainHeading() {
  return (
    <Box
      sx={{
        paddingLeft: 2,
        paddingTop: 2,
        backgroundColor: 'black',
        position: 'sticky',
        
      }}
    >
     <Typography
          sx={{
            typography: { lg: 'h2', md: 'h2', sm: 'h3', xs: 'h4' },
          }}
        >
          <GradientSpan color1='#a0ff00' color2=' #ffffff' color3='#00ff0a'>
            <Link
              href='/'
              style={{ textDecoration: 'none', color: 'transparent' }}
            >
              Islas Auto Body
            </Link>
          </GradientSpan>
        </Typography>
      

      <HeaderFooterIcons />
    </Box>
  )
}
