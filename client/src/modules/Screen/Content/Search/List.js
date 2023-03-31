import {React, useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'


import './Search.css'

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
  


function List(props) {
  const [users, setUsers] = useState([]);

    
    
    useEffect(() => {
      async function fetchUsers() {
        const response = await axios.get('http://localhost:5000/api/book');
        setUsers(response.data);
      }
      fetchUsers();
    }, []);
    const filteredData = users.filter((el) => {
      console.log(props.input)
      if (props.input === '') {
          
          return el;
      } else {
          return el.book_name.includes(props.input)
      }
  })
    return (
        
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
                {filteredData.map((row,index) => (
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
    )
}

export default List