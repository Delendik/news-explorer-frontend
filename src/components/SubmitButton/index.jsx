import React from 'react';
import './index.css';

function SubmitButton({name, width, onClick, active}){
  return(
      <button className="submit-button" style={{width:width}} onClick={onClick} disabled={!active ? "disabled" : ""}>{name}</button>
  )
}

export default SubmitButton;