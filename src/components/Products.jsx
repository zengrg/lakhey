import React, { useState } from 'react'
import './Product.css'
import data from './productData'
import Product from './Product'
const Products = () => {
  const [shopData] = useState(data);

  return (
    <div className='products'>
      {shopData.map((item) => {
        const { id, image, content1, content2, content3, image2, image3 } = item;
        return(
          <div className='product-container' key={id}>
            <Product img1={image} img2={image2} img3={image3} content1={content1} content2={content2} content3={content3} id={id} />
          </div>
        )
      })}   
    </div>
  )
}

export default Products