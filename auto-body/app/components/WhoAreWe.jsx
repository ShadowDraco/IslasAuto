import React from 'react'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import GradientSpan from './wrappers/GradientSpan'
import Link from 'next/link'
import Image from 'next/image'
import SnapFinance from '/public/assets/main/SnapFinance.jpeg'
//! import BothJulios from '/public/assets/owners/BothJulios.webp'
import BothJulios from '/public/assets/owners/BothJuliosTEMP.webp'
export default function WhoAreWe({ noButton }) {
  return (
    <Box
      sx={{
        width: '95%',
        margin: 'auto',
        my: 3,
        paddingBottom: '3em',
      }}
    >
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
              <GradientSpan color1='#ffffff' color2='#a0ff00' color3='#00ff0a'>
                Who are we?
              </GradientSpan>
            </Typography>
            {!noButton && (
              <Link href='/about'>
                <Button variant='contained' color='success' size='large'>
                  About Us
                </Button>
              </Link>
            )}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              mt: 4,
              typography: { lg: 'h5', md: 'h6' },
              textAlign: 'center',
            }}
          >
            {' '}
            This is Islas Auto Body! We are a family owned business operating in
            Rialto California, serving car enthusiasts and handling insurance
            claims from all over California.
          </Typography>
          <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
            <Image
              src={BothJulios.src}
              width={BothJulios.width}
              height={BothJulios.height}
              layout='responsive'
              //alt='Julio and Julio, owners of Islas Auto Body'
              alt='Finishing touches on a fixed car'
              style={{ maxWidth: 700, margin: 'auto' }}
            />
          </Box>
          <Box sx={{ width: '50%', margin: 'auto',
            textAlign: 'center', mb: 3
          }}>
            <Typography
              sx={{
              
                typography: { lg: 'h3', md: 'h4', sm: 'h4', xs: 'h5' },
                mb: 3,
              }}
            >
            <GradientSpan color1='#ffffff' color2='#a0ff00' color3='#00ff0a'>
                Need Financing?
              </GradientSpan>
             
            </Typography>

            {!noButton && (
              <Link href='/about'>
                <Button variant='contained' color='success' size='large' mb='5'>
                  Sign up now!
                </Button>
              </Link>
            )}
           </Box>
          
           <Box sx={{ my: 3,  width: "100%", margin:"auto", my:4}}> 
              <Link href="https://snapf.in/LuEflE1" target="_blank" rel="noopener noreferrer" >
                <Image width={646} height={80} src={SnapFinance.src} alt="Snap Finance - Apply Here" style={{boxShadow: '4px 2px 6px #010101', border: 'none' }} layout="responsive" />
              </Link>
            </Box>
            
          <Typography
            sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h4', xs: 'h5' } }}
          >
            Why choose us?
          </Typography>
          <Typography sx={{ mt: 4, typography: { lg: 'h5', md: 'h6' } }}>
            Islas Auto body is not a production body shop. We are a quality body
            shop that pays extra attention to every little detail & always takes
            an extra step for customer satisfaction.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
