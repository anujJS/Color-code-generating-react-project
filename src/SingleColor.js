import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(',');
  let hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(()=>{
   const timeout= setTimeout(()=>{
    setAlert(false)
   },3000)
   return () => clearTimeout(timeout)
  },[alert])

  return <article className={`color ${index > 10 && 'color-light'}`} style={{background:`rgb(${bcg})`}}
  onClick={() => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }}
  >
      <p className='perfect-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p> }
  </article>
}

export default SingleColor
