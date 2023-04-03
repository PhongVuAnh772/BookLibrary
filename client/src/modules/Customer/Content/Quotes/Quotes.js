import React from 'react'
import Slider from './Slider/Slider'
import slider from './data.json'
function Quotes() {
  return (
    <div style={{marginTop: '30px', backgroundColor:'RGB(214, 80, 118)',height:'180px',width:'100%'}}>
      <Slider slides={slider}/>
    </div>
  )
}

export default Quotes