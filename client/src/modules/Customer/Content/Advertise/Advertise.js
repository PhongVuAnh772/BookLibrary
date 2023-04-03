import React from 'react'
import './Advertise.css'

function Advertise() {
  return (
    <div style={{marginLeft: '200px',marginTop: '200px',position:'relative'}}>
        <img alt="" src="https://ebook.waka.vn/themes/desktop/reactjs//images/bannerButton.jpg" style={{width: '1100px', height: '104px'}}/>
        <button style={{position:'absolute',top:'54px', right:'303px',}} className="button">ĐỌC NGAY</button>
    </div>
  )
}

export default Advertise