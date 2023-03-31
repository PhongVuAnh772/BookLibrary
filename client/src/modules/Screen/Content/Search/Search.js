
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
import List from './List'
import axios from 'axios';


import './Search.css'

// http://localhost:8082/bookmanager




export default function Search() {
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    axios.get('http://localhost:5000/api/book')
      .then(response => {
        const a = response.data;
        console.log(a);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  
  
  
  return (
    <div className="Search">
      <div className="Search-input">
      <Container className="d-grid" id="main-container">
        <Form className="text-left" id="sign-in-form">
          <FormGroup controlId="sign-in-email-address form-control" class="mb-3">
            
            <Form.Control
              size="lg"
              placeholder="Tìm kiếm loại sách"
              autoComplete="username"
              className='Search-form'
              onChange={e => setInputText(e.target.value)}
           />
        </FormGroup>
      </Form>
      </Container>
       

      </div>
      <List input={inputText}/>
    </div>
  );
}