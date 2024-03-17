import React from 'react'

import { promises as fs } from 'fs'
import path from 'path'

import Gallery from './Gallery'

export default async function BeforeAftersGallery() {
  const imageDirectory = path.join(process.cwd(), '/public/assets/BeforeAfters')
  const imageSrc = '/assets/BeforeAfters'
  const imageFilenames = await fs.readdir(imageDirectory)

  return (
    <div>
      <Gallery imageSrc={imageSrc} images={imageFilenames} />
    </div>
  )
}
