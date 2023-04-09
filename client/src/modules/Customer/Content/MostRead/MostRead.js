import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MostRead.css";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { BrowserRouter, Outlet } from "react-router-dom";
import MainPage from "./components/MainPage";
import BookPage from "./BookPage";

function MostRead() {
  return (
    <div style={{ marginLeft: "200px" }} className="most-read">
      <div
        className="most-read--top-reader"
        style={{
          backGroundColor: "red",
          minWidth: "250px",
          height: "100%",
          borderRadius: "4px",
        }}
      >
        <Row>
          <Col>
            <div
              className="title"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "17.6px",
                marginTop: "12px",
                paddingLeft: "5px",
              }}
            >
              <span style={{ paddingRight: "28px" }}>BXH THÁNG 04/2023</span>
              <EqualizerIcon
                style={{ marginBottom: "4px", color: "#dfdfdf" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="users img-user--top">
              <img
                alt=""
                className=""
                src="https://cdn.vegaid.vn/VxGVOCyj2W/250x125x1544056819/768/746/bb6/768746bb65b314162fa2891e2d2c2ece.jpg"
                style={{ width: "100%", height: "125px" }}
              />
              <div className="user-top">
                <p className="name-users-top">yangzzang1***</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="users">
              <p className="name-users">
                <span className="users-using-top" style={{ color: "red" }}>
                  1,072 phút
                </span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="users">
              <p className="name-users">
                <span style={{ color: "rgb(251, 173, 42)" }}>1</span>
                &nbsp;&nbsp;&nbsp;&nbsp;tranngocphu.**
                <span
                  className="users-using"
                  style={{ color: "rgb(251, 173, 42)" }}
                >
                  956 phút
                </span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="users">
              <p className="name-users">
                <span style={{ color: "rgb(251, 173, 42)" }}>2</span>
                &nbsp;&nbsp;&nbsp;&nbsp;moc***
                <span
                  className="users-using"
                  style={{ color: "rgb(78, 212, 36)" }}
                >
                  767 phút
                </span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="users">
              <p className="name-users">
                <span>3</span>&nbsp;&nbsp;&nbsp;&nbsp;meomeomeomeo
                <span className="users-using">474 phút</span>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="users">
              <p className="name-users">
                <span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;tel_0964781***
                <span className="users-using">343 phút</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="users">
              <p className="name-users">
                <span>5</span>&nbsp;&nbsp;&nbsp;&nbsp;fb117601711297
                <span className="users-using">231 phút</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="most-read--book">
        <div
          className="title"
          style={{
            borderBottom: "2px solid rgb(236,237,238)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "30px" }}>
            Đọc nhiều nhất
          </h3>
          {/* <MainPage />
          <Outlet /> */}
          {/* <BrowserRouter>
          </BrowserRouter> */}
          <BookPage />
        </div>
      </div>
    </div>
  );
}

export default MostRead;
