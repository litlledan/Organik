import React from 'react'
import button from '../../assets/SVG/svg/button.svg'
import blog from '../../assets/images/blog-img.png'
import blog2 from '../../assets/images/blog-img2.png'
import admin from '../../assets/SVG/svg/admin.svg'
import './Blog.css'

function Blog() {
    return (
        <div>
            <section className="blog container">
                <div className="blog-content">
                    <div className="blog-heading">
                        <h2>News</h2>
                        <h3>Discover weekly content about organic food, & more</h3>
                    </div>
                    <button>
                        <div className="blog-btn">
                            <h2>More News</h2>
                            <img src={button} alt="" />
                        </div>
                    </button>
                </div>
                <div className="blog-div">
                    <div className="div-blog-title">
                        <img src={blog} alt="blog-img" />
                        <div className="blog-text">
                            <div className="blog-text-content">
                                <div className="admin">
                                    <img src={admin} alt="" />
                                    <h2>By Rachi Card</h2>
                                </div>
                                <div className="display-text">
                                    <h2>The Benefits of Vitamin D & How to Get It</h2>
                                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                                <button>
                                    <div className="blog-div-btn">
                                        <h2>Read More</h2>
                                        <img src={button}alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="blog-date">
                            <p>25 <br /> <span>Nov</span></p>
                        </div>
                    </div>
                    <div className="div-blog-title">
                        <img src={blog2} alt="blog-img" />
                        <div className="blog-text">
                            <div className="blog-text-content">
                                <div className="admin">
                                    <img src={admin} alt="" />
                                    <h2>By Rachi Card</h2>
                                </div>
                                <div className="display-text">
                                    <h2>Our Favourite Summertime Tommeto</h2>
                                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                                <button>
                                    <div className="blog-div-btn">
                                        <h2>Read More</h2>
                                        <img src={button}alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="blog-date">
                            <p>25 <br /> <span>Nov</span></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog