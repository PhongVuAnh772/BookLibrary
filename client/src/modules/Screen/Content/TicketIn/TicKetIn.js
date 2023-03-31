
import {React,useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal_addBook from './Modal_addBook/Modal_addBook.js';
import { Button, Container, Form, FormGroup } from "react-bootstrap";

import axios from 'axios'


import './TicKetIn.css'

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



export default function TicKetIn() {

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [users, setUsers] = useState([]);
  
  


  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:5000/api/book');
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  const handleSubmit = (data) => {
    console.log(data.name);
    console.log(data.author);
    console.log(data.category);
    console.log(data.inventory);
    console.log(data.price);
  }
  
  console.log('Done')
  return (
    
    <div className="TicKetIn">
      
      <Button variant="primary" size="lg" className="TicKetIn-button" onClick={handleShow}>
        Thêm sách
      </Button>    
    
        <Modal_addBook 
          isOpen={showModal}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      
      <>
         <TableContainer component={Paper} className="tableContainer">
            <Table sx={{ minWidth: 1100 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell style={{fontWeight: 'bold'}}>Tên sách</StyledTableCell>

                <StyledTableCell align="right">Tác giả</StyledTableCell>
                <StyledTableCell align="right">Thể loại</StyledTableCell>
                <StyledTableCell align="right">Đơn giá</StyledTableCell>
                <StyledTableCell align="right">Lượng tồn</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((row,index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row" style={{fontWeight: 'bold', maxWidth: '600px'}}>
                    {row.book_name}
                    </StyledTableCell>
                    <StyledTableCell align="right" >{row.book_author}</StyledTableCell>
                    <StyledTableCell align="right">{row.book_category}</StyledTableCell>
                    <StyledTableCell align="right">{row.book_price}</StyledTableCell>
                    <StyledTableCell align="right">{row.book_inventory}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
       
       </>
      
      
      </div>
  );
}