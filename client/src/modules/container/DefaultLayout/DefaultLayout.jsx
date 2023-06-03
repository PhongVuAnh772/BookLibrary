import React from "react";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children, listBookCT2, check }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header listBookCT2={listBookCT2} check={check} />
      </div>
      <div className={cx("content")}>{children}</div>
      <div className={cx("footer")}>{/* <Footer /> */}</div>
    </div>
  );
};

export default DefaultLayout;
