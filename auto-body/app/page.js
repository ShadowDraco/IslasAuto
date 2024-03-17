import Image from 'next/image'

import WhoAreWe from './components/WhoAreWe'
import CustomerReviews from './components/CustomerReviews'
import MainBanner from './components/MainBanner'
import BeforeAftersGallery from './components/BeforeAftersGallery'
export default function Home() {
  return (
    <main className=''>
      <MainBanner />

      <WhoAreWe />

      <BeforeAftersGallery />

      <CustomerReviews />
    </main>
  )
}
