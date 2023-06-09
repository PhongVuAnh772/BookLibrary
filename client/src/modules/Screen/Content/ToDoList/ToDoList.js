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
import {
  FcCurrencyExchange,
  FcFullTrash,
  FcDoughnutChart,
} from "react-icons/fc";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import NewToDoList from "./NewToDoList/NewToDoList";

import "./ToDoList.css";

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

export default function ToDoList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rows, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [statusPrice, setstatusPrice] = useState(false);
  const handleAdd = () => {
    axios
      .post(`http://localhost:8083/add-rule`, {
        ruleName: name,
        ruleDesciption: desc,
        status: statusPrice,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.location.reload();
      });
  };
  // console.log(listChange)
  const handleClick = (event, key) => {};

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("http://localhost:8083/find-all-rule");
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
  };
  const handleClickDelete = async (event, key) => {
    let response = await axios.delete(`http://localhost:8083/delete-rule`, {
      id: key,
    });

    if (Object.keys(response.data).length === 0) {
      window.location.reload();
    } else {
      console.log("Có lỗi khi đẩy dữ liệu");
    }
  };

  function ReList(event, key) {
    return (
      <>
        <Modal
          key={key}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Thêm quy định
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Tên quy định</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên quy định"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col>
                    <Form.Label>Giá trị</Form.Label>
                    <Form.Control
                      placeholder=""
                      type="number"
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSub">
                <Form.Label>Tình trạng sử dụng</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập thể loại"
                  onChange={(e) => setstatusPrice(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="primary" type="submit" onClick={handleAdd}>
              Tạo mới
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div className="ToDoList">
      <Button
        variant="primary"
        size="lg"
        className="ToDoList-button"
        onClick={handleShow}
      >
        +&nbsp;&nbsp;&nbsp;Thêm quy định
      </Button>
      <NewToDoList
        isOpen={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      <TableContainer component={Paper} className="tableContainer">
        <Table sx={{ minWidth: 1100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên quy định</StyledTableCell>
              <StyledTableCell align="right">Mô tả</StyledTableCell>
              <StyledTableCell align="right">
                Tình trạng sử dụng
              </StyledTableCell>
              <StyledTableCell align="right">Cập nhật</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, key) => (
              <StyledTableRow key={key}>
                <StyledTableCell component="th" scope="row">
                  {row.ruleName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.ruleDesciption}
                </StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>

                <StyledTableCell align="right">
                  <Button
                    variant="outline-primary"
                    onClick={(event) => ReList(event, key)}
                    key={key}
                  >
                    <FcDoughnutChart />
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="tableContainer-row-button"
                    onClick={(event) => handleClickDelete(event, row.id)}
                    key={key}
                  >
                    <FcFullTrash />
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
