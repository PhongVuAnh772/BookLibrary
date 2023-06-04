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
import Modal_addBook from "./Modal_addBook/Modal_addBook";

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

export default function TicKetIn() {
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("http://localhost:8083/find-all-staff");
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

  console.log("Done");
  return (
    <div className="TicKetIn">
      <Button
        variant="primary"
        size="lg"
        className="TicKetIn-button"
        onClick={handleShow}
      >
        Thêm nhân viên
      </Button>

      <Modal_addBook
        isOpen={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />

      <>
        <TableContainer component={Paper} className="tableContainer">
          <Table sx={{ minWidth: 1100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ fontWeight: "bold" }}>
                  Tên nhân viên
                </StyledTableCell>

                <StyledTableCell align="right">Địa chỉ</StyledTableCell>
                <StyledTableCell align="right">Số điện thoại</StyledTableCell>
                <StyledTableCell align="right">Số ngày làm</StyledTableCell>
                <StyledTableCell align="right">Số tiền phạt</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: "bold", maxWidth: "600px" }}
                  >
                    {row.staffName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.staffAdress}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.workingDays}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.totalSalary}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="outline-primary">
                      <FcDoughnutChart />
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="tableContainer-row-button"
                      onClick={(event) => handleClickDelete(event, row.id)}
                    >
                      <FcFullTrash />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </div>
  );
}
