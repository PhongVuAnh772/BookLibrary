import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Notify() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
            
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Đã đẩy dữ liệu thành công</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>OK</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  export default Notify;