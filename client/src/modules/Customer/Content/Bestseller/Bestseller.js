import React from 'react'
import MultiItemCarousel from '../BookComponent/BookList/MultiItemCrousel'

function Bestseller() {
  return (
<div className="monthly" style={{marginLeft: '200px',marginTop: '30px'}}>
        <div className='title' style={{borderBottom:'1px solid rgb(236,237,238)'}}><h3 style={{fontSize:'20px',marginBottom: '20px'}}>Sách mới nhất</h3></div>
        <MultiItemCarousel />

    </div>  )
}

export default Bestseller