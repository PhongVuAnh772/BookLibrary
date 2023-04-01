import React from 'react'
import './Monthly.css'
import BookList from '../BookComponent/BookList/BookList'
function Monthly() {
  return (
    <div className="monthly" style={{marginLeft: '200px',marginTop: '30px'}}>
        <div className='title' style={{borderBottom:'1px solid rgb(236,237,238)',}}><h3 style={{fontSize:'20px',marginBottom: '20px',}}>BXH Tháng</h3></div>
        <BookList />
    </div>
  )
}

export default Monthly