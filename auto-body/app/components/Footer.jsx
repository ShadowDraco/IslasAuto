import React from 'react'
import Link from 'next/link'
import { Typography, Box } from '@mui/material'
export default function Footer() {
  return (
    <>
    
      <Box
        className='FadeMeIn'
        textAlign='center'
        py={4}
        backgroundColor='rgba(100, 100, 100, 0.5)'
        borderTop='3px black groove'
      >
        <Typography variant='h3' my={2}>
          Islas Auto Body
        </Typography>
        <Typography variant='h6' fontWeight={'bold'} my={2}>
          <Link
            href='mailto:islasautobody@gmail.com'
            target='blank'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            islasautobody@gmail.com <br></br>
          </Link>{' '}
          <Link
            href='tel:9513344192'
            target='blank'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            (951) 334-4192
          </Link>
        </Typography>
        <br></br>
        <br></br>
        <Typography my={2} variant='overline' fontSize='1em'>
          300 S Sycamore Ave Building B, Rialto, CA 92376
        </Typography>
        <br></br>
        <br></br>
        <Typography variant='overline' my={5} fontSize='1em'>
          Monday-Friday: 8:00AM-5:00PM <br></br>SAT 9:00AM-1:00PM <br></br>SUN:
          CLOSED
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <Typography
          variant='overline'
          sx={{ mt: 5, mb: 2, textAlign: 'center', fontSize: '1em' }}
        >
          Web Services by{' '}
          <Link
            target='_blank'
            href='https://github.com/shadowdraco'
            style={{ color: 'green' }}
          >
            Ethan Storm
          </Link>
        </Typography>
      </Box>
    </>
  )
}
