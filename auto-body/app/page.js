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
    <main className=''>
      <div>
        <Image
          src={'/assets/main/MainBanner.webp'}
          width={1000}
          height={500}
          layout='responsive'
          alt='shiny polished GMC'
          style={{ filter: 'opacity(50%)' }}
        />
        <p
          style={{
            fontSize: 100,
            position: 'absolute',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {' '}
          Islas Auto Body
        </p>
      </div>

      <BeforeAftersGallery />
    </main>
  )
}
