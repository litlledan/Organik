import React from 'react'
import button from '../../assets/SVG/svg/button.svg'
import png from '../../assets/images/133.png'
import rating from '../../assets/SVG/svg/rating.svg'
import fotin from '../../assets/images/144.png'
import fifti from '../../assets/images/155.png'
import six from '../../assets/images/166.png'

import './Sectionn.css'

function Section2() {
    return (
        <div>
            <section className="section-offer">
                <div className='container'>
                <div className="offer">
                    <h1>Offer</h1>
                    <h2>We Offer Organic For You</h2>
                </div>
                <button className="btn">
                    <div className="text-offer">
                        <p>View All Product</p>
                    </div>
                </button>

                </div>
                <div className="offer-title-content">
                        <div className="offer-title-content-box">
                            <div className="content-box-img">
                                <img src={png} alt=""/>
                            </div>
                            <div className="content-box-title">
                                <h2>Mung Bean</h2>
                                <div className="content-box-title-line">
                                    <div className="content-box-title-line-price">
                                        <p>20.00</p>
                                        <span>11.00</span>
                                    </div>
                                    <img src={rating} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="offer-title-content-box">
                            <div className="content-box-img">
                                <img src={fotin} alt=""/>
                            </div>
                            <div className="content-box-title">
                                <h2>Brown Hazelnut</h2>
                                <div className="content-box-title-line">
                                    <div className="content-box-title-line-price">
                                        <p>20.00</p>
                                        <span>12.00</span>
                                    </div>
                                    <img src={rating} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="offer-title-content-box">
                            <div className="content-box-img">
                                <img src={fifti}alt=""/>
                            </div>
                            <div className="content-box-title">
                                <h2>Onion</h2>
                                <div className="content-box-title-line">
                                    <div className="content-box-title-line-price">
                                        <p>20.00</p>
                                        <span>17.00</span>
                                    </div>
                                    <img src={rating}alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="offer-title-content-box">
                            <div className="content-box-img">
                                <img src={six} alt=""/>
                            </div>
                            <div className="content-box-title">
                                <h2>Cabbage</h2>
                                <div className="content-box-title-line">
                                    <div className="content-box-title-line-price">
                                        <p>20.00</p>
                                        <span>17.00</span>
                                    </div>
                                    <img src={rating} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        </div>
    )
}

export default Section2