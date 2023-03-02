import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitera - Digital Agency.</title>
        <meta
          name="description"
          content="Digitera Agency adalah solusi digital untuk bisnis Anda, dengan layanan web design, sosial media management, design grafis & logo, dan web application. Kami membantu bisnis yang baru merintis hingga bisnis besar dalam meraih keberhasilan di dunia digital."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <CallToAction />
        {/* <Pricing /> */}
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        <Reviews />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
