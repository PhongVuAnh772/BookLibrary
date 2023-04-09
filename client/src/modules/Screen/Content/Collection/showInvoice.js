import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FcCurrencyExchange } from "react-icons/fc";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ShowInvoice({ handleClose, isOpen, index }) {
  const [users, setUsers] = useState([]);

  const handleClickDelete = (index) => {
    const userIdToDelete = users[index].id;
    axios
      .delete(`http://localhost:5000/api/collection/${userIdToDelete}`)
      .then((response) => {
        setUsers(users.filter((user, i) => i !== index));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Modal
        show={isOpen}
        onHide={handleClose}
        key={index}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Thu nợ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{index}</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nhập số tiền</Form.Label>
            <Form.Control type="number" placeholder="Số tiền" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClickDelete}>
            Chấp nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowInvoice;
