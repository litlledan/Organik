import React from 'react'
import nature from '../../assets/images/nature.img.png'
import './Nature.css'

function Nature() {
    return (
        <div>
            <div className="nature">
                <img src={nature}alt="alt-nature" />
                <div className="nature-content">
                    <div className="nature-content-div">
                        <div className="nature-content-div-heading">
                            <h2>Eco Friendly</h2>
                            <h3>Econis is a Friendly Organic Store</h3>
                        </div>
                        <div className="nature-content-div-points">
                            <div className="points">
                                <h2>Start with Our Company First</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                            </div>
                            <div className="points">
                                <h2>Learn How to Grow Yourself</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                            </div>
                            <div className="points">
                                <h2>Farming Strategies of Today</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Nature