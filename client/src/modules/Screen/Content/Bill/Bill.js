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
import { FcAdvertising, FcComboChart } from "react-icons/fc";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
// import BillRow from "./BillRow";

import "./Bill.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(255, 145, 157)",
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

export default function Bill() {
  const [TotalBill, setTotalBill] = useState(1);

  const [rows, setUsers] = useState([]);
  const [nameCus, setnameCus] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const handleConfirmSelection = (selectedBooks) => {
    setSelectedBooks(selectedBooks);
  };
  const handleBorrowing = async () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const milliseconds = currentDate
      .getMilliseconds()
      .toString()
      .padStart(3, "0");
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

    let response = await axios.post("http://localhost:8083/save-borrowing", {
      bookEntityList: [
        {
          bookQuatity: 2,
          id: 1,
        },
      ],
      borrowDate: formattedDate,
      customerEntity: {
        customerAdress: address,
        customerEmail: email,
        customerName: nameCus,
        customerPhone: phone,
        id: 1,
      },
      dueDate: "2023-05-16T07:40:28.546Z",
      returned: false,
      staffEntity1: {
        id: 1,
      },
    });
    if (response && response.data && response.data.success === true) {
      window.location.reload();
    } else {
      console.log(response.data.message);
    }
  };
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("http://localhost:8083/get-all-book");
      setUsers(response.data);
    }
    fetchUsers();
  }, []);
  function handleBlur(row, e, index) {
    console.log(e.target.value);
    row["value"] = e.target.value;
    console.log(row);
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const data = {
      [name]: value,
    };

    axios
      .post("http://localhost:5000/api/purchaseorder", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleRender() {}

  const ModalList = ({ isOpen, onClose, onConfirm }) => {
    const [bookList, setBookList] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    useEffect(() => {
      if (isOpen) {
        // Make an axios GET request to fetch the book list
        axios
          .get("http://localhost:8083/get-all-book")
          .then((response) => {
            setBookList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [isOpen]);

    const handleCheckboxChange = (event) => {
      const bookId = event.target.value;
      const isChecked = event.target.checked;
      const rowData = JSON.parse(
        event.currentTarget.getAttribute("data-row-data")
      );
      if (event.target.checked) {
        setSelectedBooks((prevSelectedBooks) => [
          ...prevSelectedBooks,
          rowData,
        ]);
      } else {
        setSelectedBooks((prevSelectedBooks) =>
          prevSelectedBooks.filter((book) => book.id == rowData.id)
        );
      }
      console.log(selectedBooks, rowData);
    };

    const handleConfirm = () => {
      if (selectedBooks.length !== 1) {
        alert("Please select only one book.");
        return;
      } else {
        onConfirm(selectedBooks);
        onClose();
        console.log();
      }
    };

    if (!isOpen) {
      return null;
    }

    return (
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sách muốn mượn
          </Modal.Title>
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
                  <StyledTableCell>Tên sách</StyledTableCell>
                  <StyledTableCell align="right">Tác giả</StyledTableCell>
                  <StyledTableCell align="right">Thể loại</StyledTableCell>

                  <StyledTableCell align="right">Số lượng tồn</StyledTableCell>
                  <StyledTableCell align="right">
                    Tích vào để mượn
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookList.map((row) => (
                  <StyledTableRow key={row.name} style={{ fontWeight: "bold" }}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ width: "150px" }}
                    >
                      {row.bookName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.bookAuthor}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.bookQuatity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.bookCategory}{" "}
                    </StyledTableCell>

                    <StyledTableCell align="right" style={{ width: "10px" }}>
                      <Form.Check
                        type="checkbox"
                        label=""
                        onChange={handleCheckboxChange}
                        data-row-data={JSON.stringify(row)} // Truyền dữ liệu hàng dưới dạng chuỗi JSON
                      />
                    </StyledTableCell>
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
          <Button variant="primary" onClick={handleConfirm}>
            Mượn
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <div className="Bill">
      <div className="Bill-form-div">
        <input
          className="form-control-sm Bill-form"
          type="text"
          size="sm"
          placeholder="Tên khách hàng"
          autoComplete="username"
          onChange={(e) => {
            setnameCus(e.target.value);
          }}
        />
        <input
          className="form-control-sm Bill-form form-control-sm-2"
          type="text"
          size="sm"
          placeholder="Địa chỉ"
          autoComplete=""
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>

      <div className="Bill-form-div">
        <input
          type="number"
          size="sm"
          placeholder="Điện thoại"
          autoComplete="username"
          className="form-control-sm Bill-form pt-17"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <input
          type="email"
          size="sm"
          placeholder="Email"
          autoComplete="username"
          className="form-control-sm Bill-form form-control-sm-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <Button
          variant="primary"
          size="lg"
          className="Bill-button"
          onClick={handleShow}
        >
          +&nbsp;&nbsp;&nbsp;Mượn sách
        </Button>
        {/* {show && <BuyBook />} */}

        <ModalList
          isOpen={handleShow}
          onClose={handleClose}
          onConfirm={handleConfirmSelection}
        />

        <TableContainer component={Paper} className="tableContainer">
          <Table sx={{ minWidth: 1100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tên sách</StyledTableCell>
                <StyledTableCell align="right">Tác giả</StyledTableCell>
                <StyledTableCell align="right">Thể loại</StyledTableCell>

                <StyledTableCell align="right">Số lượng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: "bold", maxWidth: "600px" }}
                  >
                    {row.book_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.book_author}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.book_category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.book_price}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="Bill-button"
            onClick={handleBorrowing}
          >
            <FcComboChart style={{ marginBottom: "5.5px" }} />
            &nbsp;&nbsp;&nbsp;Lập phiếu mượn
          </Button>
        </div>
      </div>
    </div>
  );
}
