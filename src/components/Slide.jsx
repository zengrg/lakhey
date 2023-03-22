import React from 'react'
import { useEffect } from 'react';
import { GrPrevious, GrNext } from "react-icons/gr";

const Slide = ({imgs, index, setIndex }) => {

    useEffect(() => {
      let lastIndex = imgs.length - 1;
      if (index < 0){
          setIndex(lastIndex);
      }
      if (index > lastIndex){
          setIndex(0);
      }
    },[index]);
  
    const prevContent = ()=> {
      setIndex(index-1);
    }
    const nextContent = ()=> {
      setIndex(index+1);
    }
  
    return (
      <div className='slide-container'>
        <button className='slide-btn-previous' onClick={prevContent}><GrPrevious /></button>
        <img src={imgs[index]} width={300} height={450} alt="product-img"/>
        <button className='slide-btn-next' onClick={nextContent}><GrNext /></button>
      </div>
    )
}
export default Slide