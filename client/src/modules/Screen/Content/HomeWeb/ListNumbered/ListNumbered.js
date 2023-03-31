import React from 'react'
import './ListNumbered.css'

function ListNumbered() {
  return (
    <div className="ListNumbered-block">
        <div className="ListNumbered-block-child">
            <p>Tổng tiền hóa đơn đã lập</p>
            <div className="ListNumbered-block-child-number">
                <h3>3,145,000</h3>
            </div>
        </div>
        <div className="ListNumbered-block-child" style={{border: '3px solid #98ebe1', color:'#4d5ce8'}}>
            <p>Tổng tiền thu được</p>
            <div className="ListNumbered-block-child-number">
                <h3>745,000</h3>
            </div>
        </div>
        <div className="ListNumbered-block-child">
            <p>Số khách hàng đã mua</p>
            <div className="ListNumbered-block-child-number">
                <h3>15</h3>
            </div>
        </div>
    </div>
  )
}

export default ListNumbered