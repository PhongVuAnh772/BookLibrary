import React from 'react'
import './Benefits.css'

function Benefits() {
  return (
    <div style={{marginLeft: '200px',marginTop: '30px'}} className="benefits">
      <div className='title' style={{borderBottom:'1px solid rgb(236,237,238)'}}>
        <h3 style={{fontSize:'14px',marginBottom: '20px',fontFamily: 'Arial, Helvetica, sans-serif', textAlign:'center'}}>
        Cảm ơn các bạn đã tin tưởng chọn Ebook.waka.vn . Sự ủng hộ của các bạn là động lực giúp chúng tôi không ngừng cải tiến và phát triển!
        </h3>
      </div>
      <div className='benefits'>
        <div className="items">
          <img alt="" src="https://ebook.waka.vn/assets/5fd66600/reactjs/images/strengths/strengths-1.jpg" style={{width: '184px',height: '104px'}}/>
          <p className="items-title">Đọc ở mọi lúc mọi nơi</p>
          <p className='items-desc'>
Ebook.waka.vn dùng được trên cả máy tính, di động, máy tính bảng.</p>
        </div>
        <div className="items">
        <img alt="" src="https://ebook.waka.vn/assets/5fd66600/reactjs/images/strengths/strengths-2.jpg" style={{width: '184px',height: '104px'}}/>
          <p className="items-title">Không quảng cáo</p>
          <p className='items-desc'>
Tất cả các sách bạn đọc đều không có quảng cáo.</p>
        </div>
        <div className="items">
        <img alt="" src="https://ebook.waka.vn/assets/5fd66600/reactjs/images/strengths/strengths-3.jpg" style={{width: '184px',height: '104px'}}/>
        <p className="items-title">Tải & đọc ngoại tuyến</p>
          <p className='items-desc'>
Sách đã tải về máy không cần mạng khi đọc nữa.</p>
        </div>
        <div className="items">
        <img alt="" src="https://ebook.waka.vn/assets/5fd66600/reactjs/images/strengths/strengths-4.jpg" style={{width: '184px',height: '104px'}}/>
        <p className="items-title">Đa dạng thể loại nội dung</p>
          <p className='items-desc'>

Ebook.waka.vn có: Sách chữ, sách nói, truyện tranh và tạp chí.</p>
        </div>
      
        <div className="items">
        <img alt="" src="https://ebook.waka.vn/assets/5fd66600/reactjs/images/strengths/strengths-5.jpg" style={{width: '184px',height: '104px'}}/>
        <p className="items-title">Đọc sách VIP siêu rẻ</p>
          <p className='items-desc'>
          
Chỉ 1,000 vnđ/ngày là bạn có thể đọc Trọn bộ sách yêu thích trên ebook.waka.vn.</p>
        </div>




      </div>
    </div>

  )
}

export default Benefits