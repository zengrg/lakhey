import React, { useState, useEffect } from 'react';
import data from './data';
import { GrPrevious, GrNext } from "react-icons/gr";
import './Slider.css'
import { Link } from 'react-router-dom';

const Slider = () => {
  const [featured] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = featured.length - 1;
    if (index < 0){
        setIndex(lastIndex);
    }
    if (index > lastIndex){
        setIndex(0);
    }
  },[index,featured]);
  useEffect(() => {
    let slider = setInterval(() => {
        setIndex(index+1);
    }, 2000);
    return () => {
        clearInterval(slider);
    }
  },[index, featured])

  const prevContent = ()=> {
    setIndex(index-1);
  }
  const nextContent = ()=> {
    setIndex(index+1);
  }

  return (
    <div className='slider-container'>
      {featured.map((item, indexFeatured) => {
      const { id, image, content1, content2, content3} = item;
      let position = "nextSlide";
      if(indexFeatured === index) {
        position = "activeSlide";
      }
      if(indexFeatured === index - 1 || (index === 0 && indexFeatured === featured.length -1)) {
        position = "lastSlide";
      }
      return (
        <article className={position} key={id}>
          <div className='main-div'>
            <button className='slider-btn-previous' onClick={prevContent}><GrPrevious /></button>
            <button className='slider-btn-next' onClick={nextContent}><GrNext /></button>
            <div className="contents">
              <p className='title'>{content1}</p>
              <p className='subTitle'>{content2}</p>
              <button className='shop-now'><Link to='/shop'>Shop Now</Link></button>
            </div>
            <div className="imagecontainer">
              <img src={image} alt="image" />
            </div>
          </div>
        </article>
    )
    })}
    </div>
  )
}

export default Slider