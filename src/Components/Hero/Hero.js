import React from 'react'
import baner from '../../assets/img/baner.hero.png'
import baner2 from '../../assets/img/baner.hero2.png'
import hero from '../../assets/SVG/hero1.svg'
import food from '../../assets/img/food.png'
import sect from '../../assets/img/section.jpg'
import sect2 from '../../assets/img/section2.jpg'
import "./Hero.css"

function Hero() {
  return (
    <div className='container'>
      <img className='baner' src={baner} />
      <img className='baner2' src={baner2} />
      <div className='title'>
        <img className='text' src={food} />
        <h1 className='text2'>Choose the best <br />
          healthier way <br />
          of life</h1>
        <img className='image' src={hero} />
      </div>
      <div className='button'>
        <button className='btn'>Explore Now</button>

      </div>

      <div class="offer-banner container">
                <div class="offer-banner-img-title">
                    <img src={sect}alt="alt-div"/>
                    <div class="position">
                        <h2>Natural!!</h2>
                        <h3>Get Garden Fresh Fruits</h3>
                    </div>
                </div>
                <div class="offer-banner-img-title">
                    <img src={sect2} alt="alt-div"/>
                    <div class="position">
                        <h4>Offer!!</h4>
                        <h5>Get 10% off on Vegetables</h5>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Hero