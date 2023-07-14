"use client"

import Visitor from '@/components/Visitor';
import Review from '@/components/Review';
import Feature from '@/components/Feature';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Benefit from '@/components/Benefit';
import Header from '@/components/Header';

export default function Home() {

  return (
    <>
      <Header />
      <Benefit />
      <Visitor />
      <Review />
      <Feature />
      <About />
      <Footer />
    </>
  )
}
