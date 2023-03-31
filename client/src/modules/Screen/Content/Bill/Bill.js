
import {React,useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import {FcAdvertising, FcComboChart} from "react-icons/fc";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'


import './Bill.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const rows = [
  {
    index: 1,
    name: 'title',
    Code: '3',
    Purchases: 2,
    prices: 2,
    inventory: 2
  },
  {
  index: 2,
    name: 'phong',
    Code: '2',
    Purchases: 2,
    prices: 2,
    inventory: 2
  },
  {
  index: 3,
    name: 'y',
    Code: 'title',
    Purchases: 2,
    prices: 2,
    inventory: 2
  },
];

export default function Bill() {
  const [TotalBill,setTotalBill] = useState(1);
  const [show, setShow] = useState(false);
  const [rows, setUsers] = useState([]);
  const [nameCus, setnameCus] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInVoice = () => {
    const handleClickSubmit = async () => {
      let response = await axios.post('http://localhost:5000/api/update-json-file', {nameCus:nameCus, phone:phone, address:address, email:email});
      if(response && response.data && response.data.success === true) {
        window.location.reload()

      }else {
        console.log(response.data.message)
      }
  }
  }
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:5000/api/book');
      setUsers(response.data);
    }
    fetchUsers();
  }, []);
  function handleBlur(row, e, index) {
    console.log(e.target.value)
    row['value'] = e.target.value
    console.log(row)
  }

  function handleRender() {
    
  }
  function BuyBook() {
    return (
      <>
      <Modal 
      show={show} 
      onHide={handleClose} 
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"        
      centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Giỏ hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginRight:'5px',maxHeight: "70vh", overflow: "scroll"}}>
        <TableContainer component={Paper} className="tableContainer" >
        <Table sx={{ minWidth: 1000, }} aria-label="customized table" >
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên sách</StyledTableCell>
              <StyledTableCell align="right">Tác giả</StyledTableCell>
              <StyledTableCell align="right">Số lượng tồn</StyledTableCell>
              <StyledTableCell align="right">Đơn giá</StyledTableCell>
              <StyledTableCell align="right">Khuyến mãi</StyledTableCell>
              <StyledTableCell align="right">Số lượng mua</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name} style={{fontWeight: 'bold',}}>
                <StyledTableCell component="th" scope="row" style={{width:'150px'}}>
                  {row.book_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.book_author}</StyledTableCell>
                <StyledTableCell align="right">{row.book_inventory}</StyledTableCell>
                <StyledTableCell align="right">{row.book_price}</StyledTableCell>
                <StyledTableCell align="right">{row.book_price}</StyledTableCell>
                
                <StyledTableCell align="right" style={{width:'150px'}}><Form.Control type="number" placeholder="" style={{textAlign:'right'}}  /></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleRender}>

Mua hàng          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
  const TotalBillFunc = () => {
    let total = rows.reduce((curr, row) => (
      // 
      (curr *= (row.Purchases * row.prices * row.inventory))
    ),1)
    setTotalBill(`Tổng tiền : ${total} VND`)
    console.log(total)
  }
  return (
    
    
    <div className="Bill">
      <div>
      <div>
      <Container className="d-grid" id="main-container">
        <Form className="text-left" id="sign-in-form">
          <div className="Bill-form-div">
            <FormGroup controlId="sign-in-name form-control" class="mb-3">
              
              <Form.Control
                className="form-control-sm Bill-form"
                type="text"
                size="sm"
                placeholder="Tên khách hàng"
                autoComplete="username"
                onChange={(e) => {setnameCus(e.target.value)}}
                
              />
            </FormGroup>
            <FormGroup controlId="sign-in-address form-control" class="mb-3">
              <Form.Control
                className="form-control-sm Bill-form form-control-sm-2"
                type="text"
                size="sm"
                placeholder="Địa chỉ"
                autoComplete=""
                onChange={(e) => {setAddress(e.target.value)}}
                
              />
               </FormGroup>
          </div>
         
          <div className="Bill-form-div">
          <FormGroup controlId="sign-in-phone form-control" class="mb-3">
            <Form.Control
              
              type="number"
              size="sm"
              placeholder="Điện thoại"
              autoComplete="username"
              className="form-control-sm Bill-form"
              onChange={(e) => {setPhone(e.target.value)}}            
              
              />
          </FormGroup>
          <FormGroup controlId="sign-in-email-address form-control" class="mb-3">
            <Form.Control
              
              type="email"
              size="sm"
              placeholder="Email"
              autoComplete="username"
              className="form-control-sm Bill-form form-control-sm-2"
              onChange={(e) => {setEmail(e.target.value)}}        
                 />
          </FormGroup>
          </div>
        </Form>
      </Container>
      </div>
      <Button variant="primary" size="lg" className="Bill-button" onClick={handleShow}>
        +&nbsp;&nbsp;&nbsp;Mua sách
      </Button>  
      {show && <BuyBook />}

      </div>
      <TableContainer component={Paper} className="tableContainer" >
        <Table sx={{ minWidth: 1100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên sách</StyledTableCell>
              <StyledTableCell align="right">Tác giả</StyledTableCell>
              <StyledTableCell align="right">Thể loại</StyledTableCell>

              <StyledTableCell align="right">Số lượng</StyledTableCell>
              <StyledTableCell align="right">Đơn giá</StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" style={{fontWeight: 'bold', maxWidth: '600px'}}>
                  {row.book_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.book_author}</StyledTableCell>
                <StyledTableCell align="right">{row.book_category}</StyledTableCell>
                <StyledTableCell align="right">{row.book_price}</StyledTableCell>
                
              </StyledTableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button variant="primary" size="lg" className="Bill-button" onClick={handleInVoice}>
          <FcAdvertising style={{marginBottom:'5.5px'}}/>&nbsp;&nbsp;&nbsp;Ghi nợ
        </Button> 
        <Button variant="primary" size="lg" className="Bill-button" onClick={TotalBillFunc} >
          <FcComboChart style={{marginBottom:'5.5px'}} />&nbsp;&nbsp;&nbsp;Thanh toán
        </Button> 
        
        <span className='totalBill'> {TotalBill === 1 ? 'Tổng : Dữ liệu chưa có' : TotalBill}</span>
      </div>
    </div>
  );
}