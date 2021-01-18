import React from 'react';
import './index.css';

function Preloader(){

  setTimeout(function(){
    document.getElementById('preloader').style.visibility = 'hidden';
  }, 2000);

  return(
    <div className="preloader__container" id="preloader" >
      <i className="circle-preloader"></i>
    </div>
  )
}

export default Preloader;