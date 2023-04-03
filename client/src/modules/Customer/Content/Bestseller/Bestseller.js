import React from 'react'
import MultiItemCarousel from './MultiItemCrousel'

function Bestseller() {
  return (
<div className="monthly" style={{marginLeft: '200px',marginTop: '30px',height:'370px'}}>
        <div className='title' style={{borderBottom:'1px solid rgb(236,237,238)'}}><h3 style={{fontSize:'20px',marginBottom: '20px'}}>Sách bán chạy nhất</h3></div>
        <MultiItemCarousel />

    </div>  )
}

export default Bestseller