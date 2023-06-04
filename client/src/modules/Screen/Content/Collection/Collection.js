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
  const [books, setBooks] = useState([]);

  // const [bookSelected, setBookSelected] = useState([]);
  const [listBooksNeedBorrow, setListBooksNeedBorrow] = useState([]);
  const [listBooksNeedBorrowStaff, setListBooksNeedBorrowStaff] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [inforCus, setInforCus] = useState({
    nameCus: "",
    phone: "",
    address: "",
    date: "",
    email: "",
    book: [],
    staff: [],
  });

  const [errMess, setErrMess] = useState({
    nameCus: "",
    phone: "",
    address: "",
    email: "",
  });

  const handleOnChangeInforCus = (e, key) => {
    setInforCus({
      ...inforCus,
      [key]: e.target.value,
    });
  };
  const handleCheckPhone = async () => {
    let response = await axios.post(
      "http://localhost:8083/findbr-by-customer",
      {
        customerPhone: phoneNumber,
      }
    );
    if (Object.keys(response.data).length === 0) {
      alert("Số điện thoại không tồn tại trong hệ thống");
    } else {
      return setInforCus({
        nameCus: response.data[0].customerEntity.customerName,
        phone: response.data[0].customerEntity.customerPhone,
        address: response.data[0].customerEntity.customerAdress,
        email: response.data[0].customerEntity.customerEmail,
        date: response.data[0].borrowDate,
        book: response.data[0].bookEntityList,
        staff: response.data[0].staffEntity1,
      });
    }
  };
  // const booksBorrow = inforCus;
  const alo = inforCus.staff;
  console.log(inforCus);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showStaff, setShowStaff] = useState(false);
  const handleCloseStaff = () => setShowStaff(false);
  const handleShowStaff = () => setShowStaff(true);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleConfirmSelection = (selectedBooks) => {
    setListBooksNeedBorrow(selectedBooks);
  };

  const handleConfirmSelectionStaff = (selectedBooks) => {
    setListBooksNeedBorrowStaff(selectedBooks);
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

    const formattedDateNow = currentDate.toISOString();
    const futureDate = new Date(
      currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
    );
    const formattedDate7Now = futureDate.toISOString();

    const formatBookArr = listBooksNeedBorrowStaff.map((book, index) => {
      return {
        id: book.id,
        bookQuatity: 1,
      };
    });
    console.log(formatBookArr);
    let response = await axios.post("http://localhost:8083/save-borrowing", {
      bookEntityList: formatBookArr,
      borrowDate: formattedDateNow,
      customerEntity: {
        customerAdress: inforCus.address,
        customerEmail: inforCus.email,
        customerName: inforCus.nameCus,
        customerPhone: inforCus.phone,
        id: inforCus.id,
      },
      dueDate: formattedDate7Now,
      returned: false,
      staffEntity1: {
        id: listBooksNeedBorrow[0].id,
      },
    });
    if (Object.keys(response.data).length !== 0) {
      window.location.reload();
    } else {
      console.log("Có lỗi khi đẩy dữ liệu");
    }
  };

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

  return (
    <div className="Bill">
      <div className="Bill-form-div">
        <input
          className="form-control-sm Bill-form"
          type="text"
          size="sm"
          placeholder="Số điện thoại"
          autoComplete=""
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <p style={{ color: "red" }}>{errMess.nameCus}</p>
        <Button
          variant="primary"
          size="lg"
          className="Bill-button"
          onClick={handleCheckPhone}
          style={{ marginBottom: "20px" }}
        >
          <FcComboChart />
          &nbsp;&nbsp;&nbsp;Kiểm tra số điện thoại
        </Button>
      </div>
      {/* <div className="Bill-form-div">
        <input
          type="email"
          size="sm"
          placeholder="Email"
          autoComplete="username"
          className="form-control-sm Bill-form form-control-sm-2"
          onChange={(e) => {
            handleOnChangeInforCus(e, "email");
          }}
        />
        <p style={{ color: "red" }}>{errMess.email}</p>
      </div> */}
      <input
        className="form-control-sm Bill-form form-control-sm-2"
        type="text"
        size="sm"
        placeholder="Địa chỉ"
        autoComplete=""
        disabled
        value={inforCus.address}
      />
      <p style={{ color: "red" }}>{errMess.address}</p>
      <div className="Bill-form-div">
        <input
          type="text"
          size="sm"
          placeholder="Tên"
          autoComplete="username"
          className="form-control-sm Bill-form pt-17"
          value={inforCus.nameCus}
          disabled
        />
        <p style={{ color: "red" }}>{errMess.phone}</p>

        <input
          type="email"
          size="sm"
          placeholder="Email"
          autoComplete="username"
          className="form-control-sm Bill-form form-control-sm-2"
          value={inforCus.email}
          disabled
        />
        <p style={{ color: "red" }}>{errMess.email}</p>

        <input
          type="email"
          size="sm"
          placeholder="Ngày mượn"
          autoComplete="username"
          className="form-control-sm Bill-form form-control-sm-2"
          value={inforCus.date}
          disabled
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        {/* {show && <BuyBook />} */}

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
              {inforCus.book.length > 0 &&
                inforCus.book.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold", maxWidth: "600px" }}
                    >
                      {row.bookName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.bookAuthor}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.bookCategory}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.bookQuatity}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              {inforCus.book.length === 0 && (
                <StyledTableRow>Không có thông tin nào</StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} className="tableContainer">
          <Table sx={{ minWidth: 1100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tên nhân viên</StyledTableCell>
                <StyledTableCell align="right">Địa chỉ</StyledTableCell>
                <StyledTableCell align="right">SĐT</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alo.length > 0 &&
                alo.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ width: "150px" }}
                    >
                      {row.staffName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.staffAdress}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.phoneNumber}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              {alo.length === 0 && (
                <StyledTableRow>chưa có thông tin nhân viên</StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="Bill-button"
            onClick={handleBorrowing}
            style={{ marginTop: "20px" }}
          >
            <FcComboChart />
            &nbsp;&nbsp;&nbsp;Lập phiếu trả
          </Button>
        </div>
      </div>
    </div>
  );
}
