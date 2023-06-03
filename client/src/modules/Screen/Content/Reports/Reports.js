import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../../../img/report.png";
import { ReportRow } from "./ReportRow";
import ReportSpecified from "./ReportSpecified";

import "./Reports.css";

function Reports() {
  const [time, setTime] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [showReport, setShowReport] = useState(false);

  const onChange = (dates) => {
    const currDate = new Date();
    const [start] = dates;
    setStartDate(start);
    const selectedDate = `${start.getDate()}/${start.getMonth()}/${start.getFullYear()}-${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()}`;
    setTime(selectedDate);
  };
  const handleReportSubmit = () => {
    setShowReport(true);
  };

  return (
    <div className="App">
      <div className="App-report-name">
        <nav>
          {ReportRow.map((item, index) => {
            return (
              <Link to={item.path} className="nav-menu-items">
                <span className="nav-menu-items-span">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="input-container">
        <div className="App-report-calendar">
          <label className="App-report-calendar-label">
            Hãy chọn thời gian muốn tra cứu
          </label>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={new Date()}
            maxDate={new Date()}
            selectsRange
            inline
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <img className="App-report-logo" alt="" src={logo} />
      </div>
      <Button
        variant="primary"
        size="lg"
        className="Reports-button"
        onClick={handleReportSubmit}
      >
        Nộp báo cáo
      </Button>
      {showReport && (
        <ReportSpecified
          time={time}
          show={true}
          handleClose={() => setShowReport(false)}
          handleShow={() => setShowReport(true)}
        />
      )}
    </div>
  );
}

export default Reports;
