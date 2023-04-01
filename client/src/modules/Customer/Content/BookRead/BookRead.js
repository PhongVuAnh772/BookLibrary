import React from 'react'
import './BookRead.css'
import MultiItemCarousel from '../BookComponent/BookList/MultiItemCrousel'

function BookRead() {
  return (
<div className="monthly" style={{marginLeft: '200px',marginTop: '30px'}}>
        <div className='title' style={{borderBottom:'1px solid rgb(236,237,238)'}}><h3 style={{fontSize:'20px',marginBottom: '20px'}}>Sách nên đọc</h3></div>
        <MultiItemCarousel />

    </div> )
}

export default BookRead