import React from 'react'
import gall from '../../assets/images/gallery-1.png'
import gall2 from '../../assets/images/gallery-2.png'
import gall3 from '../../assets/images/gallery-3.png'
import './Gallery.css'

function Gallery() {
    return (
        <div>
            <div className="gallery-div">
                <div className="gallery-div-title">
                    <div className="div-title-title">
                        <img src={gall} alt="alt-gallery" />
                        <button >Organic Juice</button>
                    </div>
                    <div className="div-title-title">
                        <img src={gall2} alt="alt-gallery" />
                        <button >Organic Food</button>
                    </div>
                    <div className="div-title-title">
                        <img src={gall3} alt="alt-gallery" />
                        <button>Nuts Cookis</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Gallery