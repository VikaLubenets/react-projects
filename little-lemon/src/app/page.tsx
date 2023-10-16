import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { Specials } from '@/components/Specials'
import { Reviews } from '@/components/Reviews'
import { AboutUs } from '@/components/AboutUs'
import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Banner header='Little Lemon' subtitle='20% Off this weekend' buttonName='Reserve a table'/>
        <Specials />
        <Reviews />
        <AboutUs />
      </main>
      <Footer />
    </React.Fragment>
  )
}
