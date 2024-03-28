import React from 'react'
import Image from 'next/image'
import IABBANNER from '/public/assets/logos/LogoSquare.webp'
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
          src={IABBANNER}
          width={IABBANNER.width}
          height={IABBANNER.height}
          alt='Islas Auto Body Banner'
          layout='responsive'
          priority
          style={{ maxWidth: !smallImage ? 900 : 500 }}
        />
      </Link>
    </Box>
  )
}
