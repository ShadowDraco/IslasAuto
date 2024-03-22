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

        paddingBottom: '3em',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: { md: 'nowrap', sm: 'wrap', xs: 'wrap' },
          gap: 3,
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            display: 'flex',
            my: 5,
          }}
        >
          <Box sx={{ margin: 'auto' }}>
            <Typography sx={{ fontSize: 50, mb: 3 }}>Who are we?</Typography>
            <Link href='/about'>
              <Button variant='contained' color='success' size='large'>
                About Us
              </Button>
            </Link>
          </Box>
        </Container>

        <Container sx={{ maxWidth: '85%' }}>
          <Typography sx={{ mt: 5 }}>
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
      </Container>
    </Box>
  )
}
