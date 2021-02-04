import React from 'react';
import './index.css';

function SubmitButton({name, width, active}){
  return(
      <button className="submit-button" style={{width:width}} disabled={!active ? "disabled" : ""}>{name}</button>
  )
}

export default SubmitButton;