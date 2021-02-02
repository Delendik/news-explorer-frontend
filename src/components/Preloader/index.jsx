import React from 'react';
import './index.css';

function Preloader({loadind}){

  // setTimeout(function(){
  //   document.getElementById('preloader').style.visibility = 'hidden';
  // }, 2000);

  return(
    <div className={loadind ? "preloader__container preloader__container_visible" : "preloader__container"} id="preloader" >
      <i className="circle-preloader"></i>
    </div>
  )
}

export default Preloader;