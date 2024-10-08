import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CarPolishing1 from '/public/assets/owners/CarPolishing1.webp'
import CarPolishing2 from '/public/assets/owners/CarPolishing2.webp'
import GradientSpan from './wrappers/GradientSpan'
import Image from 'next/image'
import InquireForm from './InquireForm'
import HeaderFooterIcons from './MainHeading/HeaderFooterIcons'
export default function Inquire() {
  return (
    <Box>
      <Box
        sx={{
          justifyContent: 'space-between',

          gap: 3,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            my: 5,
          }}
        >
          <Box
            sx={{
              margin: 'auto',
              backgroundColor: 'rgba(0,0,0, 0.5)',
              p: 3,
              borderRadius: '10%',
            }}
          >
            {' '}
            <Typography
              sx={{
                typography: { lg: 'h1', md: 'h2', sm: 'h2', xs: 'h4' },
                mb: 3,
              }}
            >
              <GradientSpan color1='#00ff00' color2='#00aa00' color3='#aaffaa'>
                Does your car need work?
              </GradientSpan>
            </Typography>
            <Typography
              sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h4', xs: 'h5' } }}
            >
              Please call or email us ASAP!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <HeaderFooterIcons larger />
            </Box>
          </Box>
        </Box>
        <InquireForm />
        <Box
          sx={{
            m: 4,
            display: 'flex',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h4', xs: 'h5' } }}
            >
              Why choose us?
            </Typography>
            <Typography
              sx={{
                textAlign: 'left',
                mt: 4,
                typography: { lg: 'h5', md: 'h5', sm: 'h6' },
              }}
            >
              We offer many services, like
              <br></br>
              <br></br>
              &emsp;🔴&ensp; All Claims Insurance Welcome <br></br>
              &emsp;🔴&ensp; Deductible Assistance <br></br>
              &emsp;🔴&ensp; Financing <br></br>
              &emsp;🔴&ensp; Collision Repair <br></br>
              &emsp;🔴&ensp; Paint Correction <br></br>
              &emsp;🔴&ensp; Fiberglass Repair <br></br>
              <br></br>
              <br></br> and we do so <strong>with open communication.</strong>{' '}
              We love what we do and <strong>we want to help YOU</strong>.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            p: 3,
            maxWidth: '90%',
            overflow: 'hidden',
          }}
        >
          <Image
            src={CarPolishing1.src}
            width={500}
            height={600}
            alt='Before Work'
            layout='responsive'
            style={{ maxWidth: 600 }}
          />
          <Image
            src={CarPolishing2.src}
            width={500}
            height={600}
            alt='After Work'
            layout='responsive'
            style={{ maxWidth: 600 }}
          />
        </Box>
      </Box>
    </Box>
  )
}
