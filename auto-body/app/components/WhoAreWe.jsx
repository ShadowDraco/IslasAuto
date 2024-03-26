import React from 'react'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Link from 'next/link'

export default function WhoAreWe() {
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
          <Box sx={{ margin: 'auto' }}>
            <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h2'}, mb: 3 }}>Who are we?</Typography>
            <Link href='/about'>
              <Button variant='contained' color='success' size='large'>
                About Us
              </Button>
            </Link>
          </Box>
        </Box>

        <Container sx={{ maxWidth: '85%' }}>
          <Typography sx={{ mt: 5, typography: { lg: 'h5', md: 'h6' } }}>
            {' '}
            This is Islas Auto Body! We are a family owned business operating in
            Rialto California, serving car enthusiasts and handling insurance
            claims from all over California.
            <br></br> <br></br>
            <strong>Why choose us?</strong>
            <br></br> <br></br>
            Islas Auto body is not a production body shop. We are a quality body
            shop that pays extra attention to every little detail & always takes
            an extra step for customer satisfaction.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
