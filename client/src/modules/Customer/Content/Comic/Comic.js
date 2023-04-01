import React from 'react'
import './Comic.css'
import items from '../../comic.json'
function List({brand}) {
  return (
    <div className="list-item">
      <img alt="" src={brand.image} style={{width: '175px',height: '261px',}} className='list-item--img'/> 
      <div className='overlay'></div>
    </div>
  )
}
function Comic() {
  
  return (
    <div className="comic">
      <div className='comic-container'>
        <div className='comic-title'>
          <h1>Truyện tranh</h1>
          
        </div>
        <div className="comic-desc">
        GIÁO DỤC KỸ NĂNG SỐNG CHO HỌC SINH ĐANG LÀ HOẠT ĐỘNG THU HÚT SỰ QUAN TÂM KHÔNG CHỈ CỦA CHA MẸ HỌC SINH, GIÁO VIÊN MÀ CÒN CỦA CẢ TOÀN XÃ HỘI. BỞI LẼ KỸ NĂNG SỐNG CÓ Ý NGHĨA VÀ TÁC DỤNG TO LỚN ĐỐI VỚI SỰ TỒN TẠI VÀ PHÁT TRIỂN CỦA CON NGƯỜI TRONG BỐI CẢNH XÃ HỘI HIỆN ĐẠI.
        </div>
      </div>
      <div className="comic-list">
      <ul>
        {items.map((item,index) => <List brand={item} key={item.title}/>)}
      </ul>
      </div>
    </div>
  )
}

export default Comic