import React from 'react'
import Slider from './Slider/Slider'
import slider from './data.json'
function Quotes() {
  return (
    <div style={{marginTop: '30px', backgroundColor:'#1ba085',height:'115px',width:'100%'}}>
      <Slider slides={slider}/>
    </div>
  )
}

export default Quotes