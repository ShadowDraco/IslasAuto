import React from 'react'

export default function WhoAreWe() {
  return (
    <div
      style={{
        width: '95%',
        margin: 'auto',
        paddingTop: ' 3em',
        paddingBottom: '3em',
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
            <p style={{ fontSize: 50 }}>Who are we?</p>
            <a href='/about'>
              <button>About Us</button>
            </a>
          </div>
        </div>

        <div style={{ maxWidth: '55%' }}>
          <p>
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
          </p>
        </div>
      </div>
    </div>
  )
}
