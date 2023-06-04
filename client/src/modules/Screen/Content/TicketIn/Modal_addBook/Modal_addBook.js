import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import { React, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import Notify from "./Notify";

export default function Modal_addBook({ handleClose, isOpen, handleSubmit }) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [inventory, setInventory] = useState("");
  const [price, setPrice] = useState("");
  const [users, setUsers] = useState([]);

  const handleClickSubmit = async () => {
    let response = await axios.post("http://localhost:8083/add-staff", {
      id: 2,
      staffName: name,
      staffAdress: author,
      phoneNumber: category,
      position: "employee",
      workingDays: inventory,
      penaltyFee: 0,
      borrowingsEntityList: null,
      returnBookEntityList: null,
      totalSalary: 0,
    });
    if (response && response.data && response.data.success === true) {
      window.location.reload();
    } else {
      console.log(response.data.message);
    }
    <Notify />;
  };

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("http://localhost:5000/api/book");
      setUsers(response.data);
    }
    fetchUsers();
  }, []);
  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm nhân viên
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Tên nhân viên</Form.Label>
              <Form.Control
                type="text"
                name="form1"
                placeholder="Nhập tên nhân viên"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>địa chỉ</Form.Label>
              <Form.Control
                type="text"
                name="form2"
                placeholder="Nhập địa chỉ"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSub">
              <Form.Label>SĐT</Form.Label>
              <Form.Control
                type="text"
                name="form3"
                placeholder="Nhập SĐT"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col>
                  <Form.Label>Số ngày làm</Form.Label>
                  <Form.Control
                    placeholder=""
                    name="form4"
                    type="number"
                    onChange={(e) => {
                      setInventory(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label>Số tiền phạt</Form.Label>
                  <Form.Control
                    placeholder=""
                    name="form5"
                    type="number"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClickSubmit}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
