import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { FcCurrencyExchange } from "react-icons/fc";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

import "./Collection.css";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Collection() {
  const [multiData, setMultiData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleClick(e, index, row) {
    console.log(e, index, row);
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Thu nợ</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              marginRight: "5px",
              maxHeight: "70vh",
              overflow: "scroll",
            }}
          >
            <TableContainer component={Paper} className="tableContainer">
              <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="right">
                      Số lượng mua
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleShow}>
              Mua hàng{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "http://localhost:5000/api/arinvoice-list"
      );
      setMultiData(response.data);
    }
    fetchUsers();
  }, []);
  return (
    <div className="Collection">
      <TableContainer component={Paper} className="tableContainer">
        <Table sx={{ minWidth: 1100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Họ tên</StyledTableCell>
              <StyledTableCell align="right">Địa chỉ</StyledTableCell>
              <StyledTableCell align="right">SĐT</StyledTableCell>
              <StyledTableCell align="right">Tổng nợ</StyledTableCell>
              <StyledTableCell align="right">Thu nợ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {multiData.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.adress}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.tob - row.paid}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    size="lg"
                    variant="outline-danger"
                    onClick={handleShow}
                  >
                    <FcCurrencyExchange />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div></div>
    </div>
  );
}
