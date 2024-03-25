import React from 'react'
import Image from 'next/image'
import CCBANNER from '../../assets/CCMotorsportsBanner.webp'
import Box from '@mui/material/Box'
import Link from 'next/link'
export default function MainHeadingImage({ smallImage }) {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link href='/'>
        <Image
          src={CCBANNER}
          width={CCBANNER.width}
          height={CCBANNER.height}
          alt='CC Motorsports Banner'
          layout='responsive'
          priority
          style={{ maxWidth: !smallImage ? 900 : 500 }}
        />
      </Link>
    </Box>
  )
}
