import Image from 'next/image'
import { promises as fs } from 'fs'
import path from 'path'

const Gallery = ({ images, imageSrc }) => {
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

const BeforeAftersGallery = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/assets/BeforeAfters')
  const imageSrc = '/assets/BeforeAfters'
  const imageFilenames = await fs.readdir(imageDirectory)

  return (
    <div>
      <Gallery imageSrc={imageSrc} images={imageFilenames} />
    </div>
  )
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        src={'/assets/main/MainBanner.webp'}
        width={1000}
        height={500}
        layout='responsive'
        alt='shiny polished GMC'
      />
      <BeforeAftersGallery />
    </main>
  )
}
