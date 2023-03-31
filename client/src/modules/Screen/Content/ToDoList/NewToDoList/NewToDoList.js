
import {React,useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { FcCurrencyExchange,FcFullTrash, FcDoughnutChart } from "react-icons/fc";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'


export default function NewToDoList({handleClose, isOpen, handleSubmit}) {
   
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [select, setSelect] = useState('');

    
  const handleClickSubmit = async () => {
    let response = await axios.post('http://localhost:5000/api/add-rule', {rule_name:name, rule_desciption:value, status:select});
    if(response && response.data && response.data.success === true) {
      window.location.reload()
    }else {
      console.log(response.data.message)
    }
}
        
    return (
      <>
      <Modal 
      show={isOpen} 
      onHide={handleClose} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"        
      centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Thêm quy định</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Tên quy định</Form.Label>
        <Form.Control type="text" placeholder="Nhập tên quy định" onChange={(e) => {setName(e.target.value)}}/>
       
      </Form.Group>

      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Row>
        
        <Col>
          <Form.Label>Giá trị</Form.Label>
          <Form.Control placeholder="" type="number" onChange={(e) => {setValue(e.target.value)}}/>
        </Col>
      </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSub">
        <Form.Label>Tình trạng sử dụng</Form.Label>
        <Form.Control
          as="select" aria-label="Default select example" onChange={(e) => {setSelect(e.target.value)}}>  
          <option value="active">Áp dụng</option>
          <option value="un-active">Chưa áp dụng ngay</option>
        </Form.Control>
      </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" type="submit" onClick={handleClickSubmit}>
            Chấp nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  
    
}