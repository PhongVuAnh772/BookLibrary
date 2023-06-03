import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import moment from "moment";

function ReportSpecified({ time, show, handleClose, handleShow }) {
  const [multidata, setMultiData] = useState([]);
  const [result, setResult] = useState([]);

  //   useEffect(() => {
  //     async function fetchUsers() {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/purchaseorder"
  //       );
  //       setResult(response.data);
  //       setMultiData(response.data);
  //     }
  //     fetchUsers();
  //   }, []);
  //   const receivedDates = result.map((order) =>
  //     moment(order.received_date).format("DD/MM/YYYY")
  //   );
  //   console.log(receivedDates);
  //   const [startDateString, endDateString] = time.split("-");
  //   const startDate = moment(startDateString, "DD/MM/YYYY");
  //   const endDate = moment(endDateString, "DD/MM/YYYY");

  //   if (receivedDates) {
  //     const filteredDates = receivedDates.filter((date) => {
  //       const currentDate = moment(date, "DD/MM/YYYY");
  //       return currentDate.isBetween(startDate, endDate, null, "[]");
  //     });
  //     console.log(filteredDates);
  //   }
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "http://localhost:5000/api/purchaseorder"
      );
      setResult(response.data);
      setMultiData(response.data);
    }
    fetchUsers();
  }, []);

  const receivedDates = result.map((order) =>
    moment(order.received_date).format("DD/MM/YYYY")
  );
  const [startDateString, endDateString] = time.split("-");
  const startDate = moment(startDateString, "DD/MM/YYYY");
  const endDate = moment(endDateString, "DD/MM/YYYY");

  var compareDate = moment("20/3/2023", "DD/MM/YYYY");

  // omitting the optional third parameter, 'units'
  console.log(compareDate.isBetween(startDate, endDate));

  if (receivedDates) {
    const filteredDates = receivedDates.filter((date, index) => {
      const currentDate = moment(date, "DD/MM/YYYY");
      return currentDate.isBetween(startDate, endDate);
    });
    console.log(filteredDates);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {multidata.map((item) => (
            <div key={item.id}>
              <p>{item.received_date}</p>
              <p>{time}</p>
            </div>
          ))} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReportSpecified;
