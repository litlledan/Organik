import React from 'react'
import photo from '../img/Photo__1_-removebg-preview.png'
import banan from '../img/Photo__2_-removebg-preview.png'
import ben from '../img/007.png'
import solo from '../img/Photo__3_-removebg-preview.png'


import './Shopp.css'

const productsData = [
    {
      id:1,
      productsTuh: 'Vegetable',
      productName: 'Calabrese Broccoli',
      img: {},
      productPrice: 13.00,
      productPriceDel: 20.00,
    },
    {
      id :2 ,
      productsTuh: 'Fresh',
      productName: 'Fresh Banana Fruites',
      img: {ben},
      productPriceDel: 20.00,
      productPrice: 14.00,
    },
    {
      id : 3 ,
      productsTuh: 'Millets',
      productName: 'White Nuts',
      productPrice: 15.00,
      productPriceDel: 20.00,
      img: {},
    },
    {
      id : 4 ,
      productsTuh: 'Vegetable',
      productName: 'Vegan Red Tomato',
      productPrice: 17.00,
      productPriceDel: 20.00,
      img: {solo},  },
    {
      id : 5 ,
      productsTuh: 'Health',
      productName: 'Mung Bean',
      productPrice: 11.00,
      productPriceDel: 20.00,
      img: {},  },
    {
      id : 6 ,
      productsTuh: 'Nuts',
      productName: 'Brown Hazelnut',
      productPrice: 12.00,
      productPriceDel: 20.00,
      img: {},  },
    {
      id : 7 ,
      productsTuh: 'Fresh',
      productName: 'Eggs',
      productPrice: 17.00,
      productPriceDel: 20.00,
      img: {},  },
    {
      id : 8,
      productsTuh: 'Fresh',
      productName: 'Zelco Suji Elaichi Rusk',
      productPrice: 15.00,
      productPriceDel: 20.00,
      img: {},  },
  ]
  

function Shopp() {
  return (
    <div className='shopp'>
      <h1>Category</h1>
        
                <div className='products-items'>
          {productsData.map(item => (
            <div className="products-item" key={item.id}>
              <span className="uki">{item.productsTuh}</span>
              <div className="products-item-image">
                <img width={300} height={300} src={`.${item.img}`} alt="" />
              </div>
              <div className="products-item-title">{item.productName}</div>
              <hr />
              <del>{item.productPriceDel}  $</del>
              <span className="products-item-text">
                {item.productPrice} $
              </span>
              <span style={{paddingLeft:120}}>★★★★★</span>
            </div>
          ))}

        </div>

    </div>
  )
}

export default Shopp