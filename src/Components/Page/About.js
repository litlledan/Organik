import React from 'react'
import baner from '../../assets/images/about-banner.png'
import image from '../../assets/images/about-banner_image.png'
import content from '../../assets/images/about__content-img.png'
import tract from '../../assets/images/Tractor.png'
import chos from '../../assets/images/choos-about.png'
import plant from '../../assets/images/Chemical Plant.png'
import box from '../../assets/images/box-cards.png'
import boxCard from '../../assets/images/box-cards1.png'
import boxCard2 from '../../assets/images/box-card2.png'
import offer from '../../assets/images/offer-img.png'
import offer2 from '../../assets/images/offer-img1.png'
import offer3 from '../../assets/images/offer-img2.png'
import offer4 from '../../assets/images/offer-img3.png'
import svg from "../../assets/SVG/svg/points-titles-btn.svg"
import titles from "../../assets/SVG/svg/points-titles-btn.svg"
import card from "../../assets/SVG/svg/card-img.svg"
import card1 from "../../assets/SVG/svg/card-img1.svg"
import card2 from "../../assets/SVG/svg/card-img2.svg"
import card3 from "../../assets/SVG/svg/card-img3.svg"
import face from "../../assets/SVG/svg/facebook1.svg"
import twit from "../../assets/SVG/svg/twitter1.svg"
import insta from "../../assets/SVG/svg/instagram1.svg"

import './About.css'

function About() {
    return (
        <div>
            <main className="main__about">
                <section className="banner-about">
                    <img src={image} alt="banner-img" />
                    <div className="about_bacground">
                        <img src={baner} alt="baner-bacground" />
                    </div>
                    <h2>About us</h2>
                </section>
                <div className="about__content">
                    <img src={content} alt="about__content" />
                    <div className="content__title">
                        <div className="content__title_headinng">
                            <div className="content__title_headinng__title">
                                <h2>About us</h2>
                                <h3>We do Creative <br />  Things for Success</h3>
                            </div>
                            <div className="content__title_headinng__title__content">
                                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <div className="title__content__points">
                                    <div className="title__content__points__icons">
                                        <div className="tract">
                                            <img src={tract} alt="alt-icons" />
                                        </div>
                                        <h2> Modern Agriculture Equipment</h2>
                                    </div>
                                    <div className="title__content__points__icons">
                                        <div classNameName='plant'>
                                            <img className='plants' src={plant} alt="alt-icons" />
                                        </div>
                                        <h2>No growth hormones are used</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button>Explore More →</button>
                    </div>
                </div>
                <div className="choos-main container">
                    <div className="choos-main-title">
                        <div className="choos-main-title-content">
                            <div className="choos-main-title-content-heading">
                                <div className="choos-main-title-content-heading-title">
                                    <h2>Why Choose us?</h2>
                                    <h3>We do not buy from the open market & traders.</h3>
                                </div>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                            </div>
                            <div className="choos-main-title-content-points">
                                <div className="choos-main-title-content-points-titles">
                                    <div className="points-titles-btn">
                                        <img src={svg} alt="points-svg" />
                                        <p>100% Natural Products</p>
                                    </div>
                                    <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                                </div>
                                <div className="choos-main-title-content-points-titles">
                                    <div className="points-titles-btn">
                                        <img src={titles} alt="points-svg" />
                                        <p>100% Natural Products</p>
                                    </div>
                                    <p>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                                </div>
                            </div>
                        </div>
                        <img src={chos} alt="choos-about" />
                    </div>
                    <div className="choos-main-title-cards">
                        <div className="title-card">
                            <div className="tilte-card-img">
                                <img src={card} alt="" />
                            </div>
                            <h2>Return Policy</h2>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className="title-card">
                            <div className="tilte-card-img">
                                <img src={card1} alt="" />
                            </div>
                            <h2>100% Fresh</h2>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className="title-card">
                            <div className="tilte-card-img">
                                <img src={card2} alt="" />
                            </div>
                            <h2>Support 24/7</h2>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className="title-card">
                            <div className="tilte-card-img">
                                <img src={card3} alt="" />
                            </div>
                            <h2>Secured Payment</h2>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className="about-team container">
                    <div className="team-content">
                        <div className="team-content-titles">
                            <h2>Team</h2>
                            <h3>Our Organic Experts</h3>
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="team-content-box">
                        <div className="box-cards">
                            <img src={box} alt="" />
                            <div className="box-titles">
                                <divb className="box-titles-name">
                                    <h2>Giovani Bacardo</h2>
                                    <h3>Farmer</h3>
                                </divb>
                                <div className="box-titles-icons">
                                    <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
                                        <img src={face} alt="alt-facebook" />
                                    </a>
                                    <a href="https://twitter.com/?lang=ru">
                                        <img src={twit} alt="alt-twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box-cards">
                            <img src={boxCard} alt="" />
                            <div className="box-titles">
                                <divb className="box-titles-name">
                                    <h2>Marianne Loreno</h2>
                                    <h3>Designer</h3>
                                </divb>
                                <div className="box-titles-icons">
                                    <a href="https://www.instagram.com/" target="_blank"><img src={insta} alt="alt-instagram" /></a>
                                    <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
                                        <img src={face} alt="alt-facebook" />
                                    </a>
                                    <a href="https://twitter.com/?lang=ru">
                                        <img src={twit} alt="alt-twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box-cards">
                            <img src={boxCard2} alt="" />
                            <div className="box-titles">
                                <divb className="box-titles-name">
                                    <h2>Giovani Bacardo</h2>
                                    <h3>Farmer</h3>
                                </divb>
                                <div className="box-titles-icons">
                                    <a href="https://www.instagram.com/" target="_blank"><img src={insta} alt="alt-instagram" /></a>
                                    <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
                                        <img src={face} alt="alt-facebook" />
                                    </a>
                                    <a href="https://twitter.com/?lang=ru">
                                        <img src={twit} alt="alt-twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-product">
                    <div className="offer-product-content">
                        <div className="offer-product-content-title">
                            <h2>About Us</h2>
                            <h3>What We Offer for You</h3>
                        </div>
                        <div className="offer-product-content-img">
                            <div className="content-img-box">
                                <div className="product">
                                    <img  src={offer} alt="" />
                                </div>
                                <h2>Spicy</h2>
                            </div>
                            <div className="content-img-box">
                                <div className="product">
                                    <img  src={offer2} alt="" />
                                </div>
                                <h2>Nuts & Feesd</h2>
                            </div>
                            <div className="content-img-box">
                                <div className="product">
                                    <img src={offer3} alt="" />
                                </div>
                                <h2>Fruits</h2>
                            </div>
                            <div className="content-img-box">
                                <div classNameName="products">
                                    <img  src={offer4} alt="" />
                                </div>
                                <h2>Vegetable</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default About