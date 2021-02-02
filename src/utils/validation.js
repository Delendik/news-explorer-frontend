import { useState } from "react";

export function Validation(){
  const [data, setData] = useState({});
  const [active, setActive] = useState(false)
  const [error, setError] = useState({})

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData({
      ...data, 
      [name]: value,
    });
    setError({
      ...error, 
      [name]: e.target.validationMessage,
    });
    setActive(e.target.closest("form").checkValidity());
  }
  handleChange();
  return (handleChange, setData, error, active);
}
  