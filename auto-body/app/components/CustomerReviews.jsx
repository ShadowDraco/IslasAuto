import React from 'react'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Link from 'next/link'

export default function CustomerReviews() {
  return (
    <Box
      sx={{
        margin: 'auto',
        paddingTop: ' 3em',
        paddingBottom: '3em',
        backgroundColor: 'rgba(100,100,100, .5)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 3,
          flexWrap: { md: 'nowrap', sm: 'wrap', xs: 'wrap' },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            margin: 'auto',
            mb: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 50, mb: 3 }}>
              Customer Reviews
            </Typography>
            <Link target='_blank' href='https://g.co/kgs/rqkTCbG'>
              <Button variant='contained' color='success' size='large'>
                See our reviews!
              </Button>
            </Link>
          </Box>
        </Box>

        <Container sx={{ maxWidth: '85%' }}>
          <Typography>
            {' '}
            <em>
              &#34;I highly recommend ISLAS AUTO BODY. Their customer service is
              second to none! I was updated daily. “The product quality is
              outstanding, exceeded my expectations. I was completely impressed
              with their professionalism and customer service. They offer SNAP
              FINANCE (financing) as a way to pay for your repairs if you are
              unable to pay it all up front. Thank you Julio and to your team. I
              am 100% HAPPY!!!!&#34;{' '}
            </em>
            <br></br>
            <strong>- Regina Ellis</strong>
          </Typography>
          <br></br> <br></br>
          <Typography>
            <em>
              &#34;10/10 Amazing job. The detailing and polish made me forget I
              came here for a collision repair. They finished the job in 2 weeks
              and Julio kept me updated throughout the entire process with
              pictures. Always answered my calls and texts or got back to me
              quickly. Also received a 3 year warranty for the paint.&#34;{' '}
            </em>
            <br></br>
            <strong>- CJ</strong>
          </Typography>
        </Container>
      </Container>
    </Box>
  )
}
