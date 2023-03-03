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
        <title>Digitera - Digital Agency</title>
        <meta
          name="description"
          content="Digitera Agency adalah solusi digital untuk bisnis Anda, dengan layanan web design, sosial media management, design grafis dan logo, dan web application."
        />
        <meta
          name="keywords"
          content="web design murah, digital agency di bali, jasa logo di bali, jasa manage sosial media"
        />
        <meta name="author" content="Made Supardi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="robots" content="noindex" /> */}

        <meta property="og:title" content="Digitera - Digital Agency" />
        <meta property="og:type" content="service.website" />
        <meta property="og:url" content="https://digitera-agency.com/" />
        <meta
          property="og:image"
          content="https://digitera-agency.com/logo.png"
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
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
