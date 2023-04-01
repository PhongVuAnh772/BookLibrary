import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MostRead.css';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NavBar from './NavBar/NavBar';

function MostRead() {
  return (
    <div style={{marginLeft: '200px'}} className='most-read'>
      <div className="most-read--top-reader"style={{backGroundColor:'red',minWidth:'250px',height: '100%',  borderRadius: '4px'
}}>
        <Row >
          <Col>
            <div className="title" style={{fontSize: '16px',fontWeight:400,lineHeight:'17.6px',marginTop: '12px',paddingLeft: '5px'}}>
              <span style={{paddingRight: '28px'}}>BXH THÁNG 04/2023</span>
              <EqualizerIcon style={{marginBottom: '4px'}} />
            </div>
          </Col>
        </Row>
        <Row >
          <Col><div className="users img-user--top">
                <img 
                alt="" 
                className=''
                src="https://cdn.vegaid.vn/VxGVOCyj2W/250x125x1544056819/768/746/bb6/768746bb65b314162fa2891e2d2c2ece.jpg" 
                style= {{width: '100%',height: '125px'}}
                />
                <div className="user-top users">
                    <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>
                    
                </div>
            </div>
            
            </Col>
        </Row>
        <Row >
          <Col><div className="users">
          <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>

            </div></Col>
        </Row>
        <Row >
          <Col><div className="users">
          <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>

            </div></Col>
        </Row>
        <Row >
          <Col><div className="users">
          <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>

            </div></Col>
        </Row>
        <Row >
          <Col><div className="users">
          <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>

            </div></Col>
        </Row>
        
        <Row >
          <Col><div className="users">
          <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>

            </div></Col>
        </Row>
        <Row >
          <Col><div className="users">
          <p className="name-users">yangzzang1***<span className="users-using">684 phút</span></p>

            </div></Col>
        </Row>
      </div>
      <div className='most-read--book'>
          <div className='title' style={{borderBottom:'2px solid rgb(236,237,238)',display:'flex',flexWrap:'no-wrap'}}>
            <h3 style={{fontSize:'20px',marginBottom: '30px',}}>Đọc nhiều nhất
            </h3>
            <NavBar />
          </div>
      </div>
    </div>
  )
}

export default MostRead