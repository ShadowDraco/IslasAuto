import React from 'react'

export default function CustomerReviews() {
  return (
    <div
      style={{
        margin: 'auto',
        paddingTop: ' 3em',
        paddingBottom: '3em',
        backgroundColor: 'rgb(100,100,100, 0.5)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: 50 }}>Customer Reviews</p>
            <a href='/about'>
              <button>See our reviews!</button>
            </a>
          </div>
        </div>

        <div style={{ maxWidth: '55%' }}>
          <p>
            {' '}
            “I highly recommend ISLAS AUTO BODY. Their customer service is
            second to none! I was updated daily. “The product quality is
            outstanding, exceeded my expectations. I was completely impressed
            with their professionalism and customer service. They offer SNAP
            FINANCE (financing) as a way to pay for your repairs if you are
            unable to pay it all up front. Thank you Julio and to your team. I
            am 100% HAPPY!!!!" - Regina Ellis
            <br></br> <br></br>
            <strong>Why choose us?</strong>
            <br></br> <br></br>
            Islas Auto body is not a production body shop. We are a quality body
            shop that pays extra attention to every little detail & always takes
            an extra step for customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}
