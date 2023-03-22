import React, { useState } from 'react'
import './ProductDetail.css'
import { RxCross1 } from "react-icons/rx";
import Slide from './Slide'

const ProductDetail = (props) => {
  const [index, setIndex] =useState(0);
  const imgChanger = (e)=> {
    let alt = e.target.alt;
    let iindex = parseInt(alt.substring(alt.length-1));
    setIndex(iindex-1);
  }
  return (props.trigger)? (
    <div className='popup'>
      <div className="popup-inner">
        <button className='close-btn' onClick={()=>{
          props.setTrigger(false);
        }}><RxCross1 /></button>
        <div className="popup-inner-slide">
          <img src={props.img1} alt="img-1" className="popup-inner-slide-img" onClick={imgChanger} ></img>
          <img src={props.img2} alt="img-2" className="popup-inner-slide-img" onClick={imgChanger} ></img>
          <img src={props.img3} alt="img-3" className="popup-inner-slide-img" onClick={imgChanger} ></img>
        </div>
        <div className="popup-inner-img">
          <Slide  imgs={[props.img1, props.img2, props.img3]} index={index} setIndex={setIndex} />
        </div>
        <div className="popup-inner-detail">
          <p className='product-name'>{props.productName}</p>
          <p className='product-price'>{props.productPrice}</p>
          <p className='product-desc'>{props.productDesc}</p>
          <div className="product-sizes">
            <p>Size</p>
            <div className='product-size'>S</div>
            <div className='product-size'>M</div>
            <div className='product-size'>L</div>
            <div className='product-size'>XL</div>
          </div>
          <div className="product-colors">
            <p>Color</p>
            <div className="product-color"
            style={{
              backgroundColor: 'blue'
            }}></div>
            <div className="product-color"
            style={{
              backgroundColor: 'grey'
            }}></div>
            <div className="product-color"
            style={{
              backgroundColor: 'black'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  ) : "";
}

export default ProductDetail