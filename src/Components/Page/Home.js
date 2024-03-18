import React from 'react'
import Hero from '../Hero/Hero'
import Section from '../Section/Section'
import Shopp from '../Shopp/Shopp'
import Section2 from '../Section2/Section2'
import Nature from '../Nature/Nature'
import Gallery from '../Gallery/Gallery'
import Blog from '../BlogContainer/Blog'

function Home() {
  return (
    <div>
        <Hero />
        <Section />
        <Shopp />
        <Section2 />
        <Nature />
        <Gallery />
        <Blog />
    </div>
  )
}

export default Home
