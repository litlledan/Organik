import React from 'react'
import banerr from '../../assets/img/main.png'
import baner2 from '../../assets/SVG/baner.svg'
import organik from '../../assets/SVG/section.svg'
import organik2 from '../../assets/SVG/section2.svg'
import hero from '../../assets/SVG/hero1.svg'

import './Section.css'

function Section() {
  return (
    <div className='section '>
      <img className='banery' src={banerr} />
      <div className='main'>
        <img className='avatar' src={baner2} />
        <h3>We Believe in Working
          Accredited Farmers
        </h3>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

        <div className='sectt'>
          <h1>Jrganic Foods Only</h1>
          <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

          <h1>Quality Standards</h1>
          <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
        </div>
        <div className='imagges'>
          <img className='img' src={organik} />
          <img className='img2' src={organik2} />
        </div>
        <button className='btn2'>Shop Now</button>
        <img className='image2' src={hero} />

      </div>
    </div>
  )
}

export default Section