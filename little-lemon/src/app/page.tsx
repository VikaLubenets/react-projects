import Image from 'next/image'
import { Banner } from '@/components/Banner'
import { Specials } from '@/components/Specials'
import { Reviews } from '@/components/Reviews'
import { AboutUs } from '@/components/AboutUs'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <header></header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Banner header='Little Lemon' subtitle='20% Off this weekend' buttonName='Reserve a table'/>
        <Specials />
        <Reviews />
        <AboutUs />
      </main>
      <footer></footer>
    </React.Fragment>
  )
}
