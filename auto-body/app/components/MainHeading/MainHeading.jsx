import { Box, Typography } from '@mui/material'
import GradientSpan from '../../components/wrappers/GradientSpan'
import HeaderFooterIcons from './HeaderFooterIcons'

import Link from 'next/link'
export default function MainHeading() {
  return (
    <Box
      sx={{
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3,
        backgroundColor: 'black',
        position: 'sticky',
        paddingTop: 4,
        backgroundColor: 'transparent',
      }}
    >
      <Box sx={{ gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography variant='h2'>
          <GradientSpan color1='#a0ff00' color2=' #ffffff' color3='#00ff0a'>
            <Link
              href='/'
              style={{ textDecoration: 'none', color: 'transparent' }}
            >
              Islas Auto Body
            </Link>
          </GradientSpan>
        </Typography>
      </Box>

      <HeaderFooterIcons />
    </Box>
  )
}
