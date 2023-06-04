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

  // const [bookSelected, setBookSelected] = useState([]);
  const [listBooksNeedBorrow, setListBooksNeedBorrow] = useState([]);
  const [listBooksNeedBorrowStaff, setListBooksNeedBorrowStaff] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [inforCus, setInforCus] = useState({
    nameCus: "",
    phone: "",
    address: "",
    email: "",
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
    let response = await axios.post("http://localhost:8083/find-customer", {
      customerPhone: phoneNumber,
    });
    if (Object.keys(response.data).length === 0) {
      alert("Số điện thoại không tồn tại trong hệ thống");
    } else {
      return setInforCus({
        id: response.data.id,
        nameCus: response.data.customerName,
        phone: response.data.customerPhone,
        address: response.data.customerAdress,
        email: response.data.customerEmail,
      });
    }
  };
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

  const ModalList = ({ isOpen, onClose, onConfirm }) => {
    const [bookList, setBookList] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    useEffect(() => {
      if (isOpen) {
        // Make an axios GET request to fetch the book list
        axios
          .get("http://localhost:8083/get-all-book")
          .then((response) => {
            let bookList = response.data;
            bookList = bookList.map((book) => {
              return {
                ...book,
                isChecked: false,
              };
            });
            setBookList(bookList);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [isOpen]);

    const handleCheckboxChange = (event, bookSelected) => {
      // const bookId = event.target.value;
      // const isChecked = event.target.checked;
      // const rowData = JSON.parse(
      //   event.currentTarget.getAttribute("data-row-data")
      // );
      // if (event.target.checked) {
      //   setSelectedBooks((prevSelectedBooks) => [
      //     ...prevSelectedBooks,
      //     rowData,
      //   ]);
      // } else {
      //   setSelectedBooks((prevSelectedBooks) =>
      //     prevSelectedBooks.filter((id) => id !== rowData)
      //   );
      // }
      // console.log(selectedBooks, rowData);

      const { checked } = event.target;
      if (checked) {
        let listSelected = selectedBooks;
        let newBookList = bookList.map((book) => {
          return book.id === bookSelected.id
            ? { ...book, isChecked: true }
            : book;
        });
        listSelected.push(bookSelected);
        setSelectedBooks(listSelected);
        setBookList(newBookList);
      } else {
        let listSelected = selectedBooks;
        let newBookList = bookList.map((book) => {
          return book.id === bookSelected.id
            ? { ...book, isChecked: false }
            : book;
        });
        listSelected = listSelected.filter(
          (book) => book.id !== bookSelected.id
        );
        setSelectedBooks(listSelected);
        setBookList(newBookList);
      }
    };

    const handleConfirm = () => {
      if (selectedBooks.length === 0) {
        alert("Please select the book need borrow.");
        return;
      } else {
        onConfirm(selectedBooks);
        onClose();
        console.log(listBooksNeedBorrowStaff);
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
                        checked={row.isChecked}
                        onChange={(e) => handleCheckboxChange(e, row)}
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

  const ModalListStaff = ({ isOpen, onClose, onConfirm }) => {
    const [bookList, setBookList] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    useEffect(() => {
      if (isOpen) {
        // Make an axios GET request to fetch the book list
        axios
          .get("http://localhost:8083/find-all-staff")
          .then((response) => {
            let bookList = response.data;
            bookList = bookList.map((book) => {
              return {
                ...book,
                isChecked: false,
              };
            });
            setBookList(bookList);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [isOpen]);

    const handleCheckboxChange = (event, bookSelected) => {
      // const bookId = event.target.value;
      // const isChecked = event.target.checked;
      // const rowData = JSON.parse(
      //   event.currentTarget.getAttribute("data-row-data")
      // );
      // if (event.target.checked) {
      //   setSelectedBooks((prevSelectedBooks) => [
      //     ...prevSelectedBooks,
      //     rowData,
      //   ]);
      // } else {
      //   setSelectedBooks((prevSelectedBooks) =>
      //     prevSelectedBooks.filter((id) => id !== rowData)
      //   );
      // }
      // console.log(selectedBooks, rowData);

      const { checked } = event.target;
      if (checked) {
        let listSelected = selectedBooks;
        let newBookList = bookList.map((book) => {
          return book.id === bookSelected.id
            ? { ...book, isChecked: true }
            : book;
        });
        listSelected.push(bookSelected);
        setSelectedBooks(listSelected);
        setBookList(newBookList);
      } else {
        let listSelected = selectedBooks;
        let newBookList = bookList.map((book) => {
          return book.id === bookSelected.id
            ? { ...book, isChecked: false }
            : book;
        });
        listSelected = listSelected.filter(
          (book) => book.id !== bookSelected.id
        );
        setSelectedBooks(listSelected);
        setBookList(newBookList);
      }
    };

    const handleConfirm = () => {
      if (selectedBooks.length === 0) {
        alert("Hãy chọn 1 nhân viên đảm nhiệm");
        return;
      } else if (selectedBooks.length > 1) {
        alert("Chỉ được chọn 1 nhân viên đảm nhiệm");
        return;
      } else {
        onConfirm(selectedBooks);
        onClose();
        console.log(listBooksNeedBorrow[0].id);
      }
    };

    if (!isOpen) {
      return null;
    }

    return (
      <Modal
        show={showStaff}
        onHide={handleCloseStaff}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nhân viên
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
                  <StyledTableCell>Tên nhân viên</StyledTableCell>
                  <StyledTableCell align="right">Địa chỉ</StyledTableCell>
                  <StyledTableCell align="right">SĐT</StyledTableCell>

                  <StyledTableCell align="right">
                    Tích vào chọn nhân viên
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
                      {row.staffName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.staffAdress}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.phoneNumber}
                    </StyledTableCell>

                    <StyledTableCell align="right" style={{ width: "10px" }}>
                      <Form.Check
                        type="checkbox"
                        label=""
                        checked={row.isChecked}
                        onChange={(e) => handleCheckboxChange(e, row)}
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
          onConfirm={handleConfirmSelectionStaff}
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
              {listBooksNeedBorrowStaff.length > 0 &&
                listBooksNeedBorrowStaff.map((row) => (
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
              {listBooksNeedBorrowStaff.length === 0 && (
                <StyledTableRow>Không có quyển sách nào</StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="primary"
          size="lg"
          className="Bill-button"
          onClick={handleShowStaff}
          style={{ marginTop: "50px" }}
        >
          <FcComboChart />
          &nbsp;&nbsp;&nbsp;Chọn nhân viên
        </Button>

        <ModalListStaff
          isOpen={handleCloseStaff}
          onClose={handleCloseStaff}
          onConfirm={handleConfirmSelection}
        />
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
              {listBooksNeedBorrow.length > 0 &&
                listBooksNeedBorrow.map((row) => (
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
              {listBooksNeedBorrow.length === 0 && (
                <StyledTableRow>chưa có nhân viên đảm nhiệm</StyledTableRow>
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
            &nbsp;&nbsp;&nbsp;Lập phiếu mượn
          </Button>
        </div>
      </div>
    </div>
  );
}
