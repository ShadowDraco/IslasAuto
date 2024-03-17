import React from 'react'
import Image from 'next/image'

export default function Gallery({ images, imageSrc }) {
  return (
    <div style={{ display: 'flex' }}>
      {images.map(el => (
        <Image
          width={150}
          height={150}
          alt={'alt'}
          src={`${imageSrc}/${el}`}
          key={el}
        />
      ))}
    </div>
  )
}
