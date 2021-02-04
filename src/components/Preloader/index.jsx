import React from 'react';
import './index.css';

function Preloader({loadind}){
  return(
    <div className={loadind ? "preloader__container preloader__container_visible" : "preloader__container"} id="preloader" >
      <i className="circle-preloader"></i>
    </div>
  )
}

export default Preloader;