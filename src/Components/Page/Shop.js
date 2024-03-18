import React from 'react'
import { Link } from 'react-router-dom'
import baner from "../../assets/img/Banner (1).png"
import photo from '../img/Photo-removebg-preview.png'
import banan from '../img/Photo__1_-removebg-preview.png'
import './Shop.css'

const productsData = [
  {
    id:1,
    productsTuh: 'Vegetable',
    productName: 'Calabrese Broccoli',
    img: {photo},
    productPrice: 13.00,
    productPriceDel: 20.00,
  },
  {
    id :2 ,
    productsTuh: 'Fresh',
    productName: 'Fresh Banana Fruites',
    img: {banan},
    productPriceDel: 20.00,
    productPrice: 14.00,
  },
  {
    id : 3 ,
    productsTuh: 'Millets',
    productName: 'White Nuts',
    productPrice: 15.00,
    productPriceDel: 20.00,
    img: {banan},
  },
  {
    id : 4 ,
    productsTuh: 'Vegetable',
    productName: 'Vegan Red Tomato',
    productPrice: 17.00,
    productPriceDel: 20.00,
    img: {banan},  },
  {
    id : 5 ,
    productsTuh: 'Health',
    productName: 'Mung Bean',
    productPrice: 11.00,
    productPriceDel: 20.00,
    img: {banan},  },
  {
    id : 6 ,
    productsTuh: 'Nuts',
    productName: 'Brown Hazelnut',
    productPrice: 12.00,
    productPriceDel: 20.00,
    img: {banan},  },
  {
    id : 7 ,
    productsTuh: 'Fresh',
    productName: 'Eggs',
    productPrice: 17.00,
    productPriceDel: 20.00,
    img: {banan},  },
  {
    id : 8,
    productsTuh: 'Fresh',
    productName: 'Zelco Suji Elaichi Rusk',
    productPrice: 15.00,
    productPriceDel: 20.00,
    img: {banan},  },
]
const Shop = () => {
  return (
    <div>
      <div className='main-shop'>
        <img className="main-img" src={baner} />
      </div>
      <div>
        <div className='products-items'>
          {productsData.map(item => (
            <div className="products-item" key={item.id}>
              <div className="uki">
                <Link to="/single">{item.productsTuh}</Link>
                </div>
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
    </div>
  )
}

export default Shop