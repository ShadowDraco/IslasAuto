import React from 'react'
import Image from 'next/image'

export default function MainBanner() {
  return (
    <div>
      <Image
        src={'/assets/main/MainBanner.webp'}
        width={1000}
        height={500}
        layout='responsive'
        alt='shiny polished GMC'
        style={{ filter: 'opacity(50%)' }}
      />
      <div
        style={{
          position: 'absolute',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 100,
          }}
        >
          {' '}
          Islas Auto Body
        </p>

        <p style={{ fontSize: 25, textAlign: 'center' }}>
          Insurance Claims <br></br> Financing <br></br>Collisions
        </p>
      </div>
    </div>
  )
}
