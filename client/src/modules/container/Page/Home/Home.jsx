import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import DefaultLayout from "../../DefaultLayout/DefaultLayout";
import Slide from "../../component/Slide/Slide";
import CardBookSmall from "../../component/CardBook/CardBookSmall/CardBookSmall.jsx";
import GrillBook from "../../component/GrillBook/GrillBook";
import { BsNewspaper } from "react-icons/bs";
import MediaDate from "../../component/MediaDate/MediaDate";
import { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Home() {
  let size = 9;
  let totalBook = 0;
  const [listBookCT1, setListBookCT1] = useState({
    page: 1,
    totalPage: 0,
    bookEntityList: [],
  });
  const [listBookCT2, setListBookCT2] = useState([]);
  const [listBookCT3, setListBookCT3] = useState([]);
  var settings = {
    dots: true,
    slidesToShow: 3,
  };

  useEffect(() => {}, [listBookCT1]);

  useEffect(() => {
    axios
      .post("http://localhost:8083/get-book-by-page", {
        page: listBookCT1.page,
        size: size,
      })
      .then((response) => {
        setListBookCT1(response.data);
      })
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:8083/get-all-book")
      .then((response) => {
        setListBookCT2(response.data);
        totalBook = listBookCT2.length;
      })
      .catch((error) => console.log(error));
  }, [listBookCT1.page]);

  return (
    <div className={cx("wrapper")}>
      <DefaultLayout
        listBookCT2={listBookCT2}
        setListBookCT2={setListBookCT2}
        check={true}
      >
        <div>
          <div className={cx("slide")}>
            <Slide />
          </div>
          <div className={cx("content1")}>
            <div className={cx("news")}>
              <div className={cx("title-news")}>
                <p>TIN TỨC</p>
                <BsNewspaper className={cx("news-icon")} />
              </div>
              <ul>
                <li>
                  <MediaDate />
                </li>
              </ul>
            </div>
            <div className={cx("free-hot")}>
              <div className={cx("title-free-hot")}>Tất cả sách</div>
              <GrillBook
                listBookCT1={listBookCT1}
                setListBookCT1={setListBookCT1}
                size={size}
              />
            </div>
          </div>
          <div className={cx("content2")}>
            <div className={cx("title-rank")}>
              <div>BẢNG XẾP HẠNG</div>
              <div>
                <Link className={cx("link-viewall")}>Xem tất cả</Link>
              </div>
            </div>
            <div className={cx("best-rank")}>
              <AliceCarousel
                mouseTracking
                disableDotsControls
                keyboardNavigation
                items={listBookCT2.map((bookCT2) => {
                  return <CardBookSmall bookCT2={bookCT2} />;
                })}
                responsive={{
                  1324: { items: 6 },
                }}
                renderPrevButton={() => (
                  <button
                    style={{
                      position: "absolute",
                      marginTop: "-170px",
                      marginLeft: "-550px",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "35px",
                      color: "#1ba085",
                    }}
                  >
                    {"<"}
                  </button>
                )}
                renderNextButton={() => (
                  <button
                    style={{
                      position: "absolute",
                      marginTop: "-170px",
                      marginLeft: "256px",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "35px",
                      color: "#1ba085",
                    }}
                  >
                    {">"}
                  </button>
                )}
              />
            </div>
          </div>
          <div className={cx("content3")}></div>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Home;
