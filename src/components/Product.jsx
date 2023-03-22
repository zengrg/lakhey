import React, { useState } from 'react'
import './Product.css'
import ProductDetail from './ProductDetail'

const Product = ({ img1, img2, img3, content1, content2, content3, id}) => {
  const [popup,setPopup]= useState(false);
  const viewDetailHandle = (e)=> {
    setPopup(true);
  };

  return (
    <div className='products'>
      <div className='product-container' key={id}>
        <div className="product-img">
          <img src={img1} alt="id" />
          <button className='viewDetail-btn'onClick={viewDetailHandle}>View Details</button>
        </div>
        <div className="product-detail">
          <p>{content1}</p>
          <p>{content2}</p>
        </div>
        <ProductDetail trigger={popup} setTrigger={setPopup}
        img1={img1} img2={img2} img3={img3} id={id}
        productName={content1} productPrice={content2} productDesc={content3} />
      </div> 
    </div>
  )
}

export default Product