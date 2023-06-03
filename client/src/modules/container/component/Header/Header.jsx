import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import {
  AiOutlineSearch,
  AiOutlineUnorderedList,
  AiFillCreditCard,
  AiOutlineHome,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

const { SubMenu } = Menu;

const cx = classNames.bind(styles);

function Header(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [value, setValue] = useState("");

  let resultSearch = [];
  const handleChange = (event) => {
    setValue(event.target.value);
    handleMouseEnter(event);
  };

  const handleSearch = (event) => {
    if (event.keyCode === 13) {
      if (value === "") {
        return;
      }
      resultSearch = [
        ...props.listBookCT2.filter((book) => {
          return book.bookName.toLowerCase().includes(value.toLowerCase());
        }),
      ];

      navigate("/listbooksearch", { state: [...resultSearch] });
    }
  };
  const handleSearch1 = (event) => {
    if (value === "") {
      return;
    }
    resultSearch = [
      ...props.listBookCT2.filter((book) => {
        return book.bookName.toLowerCase().includes(value.toLowerCase());
      }),
    ];

    navigate("/listbooksearch", { state: [...resultSearch] });
  };

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      return;
    }
  };
  const handleClickSearch = () => {
    navigate("/home");
  };
  const handleMouseEnter = (event) => {
    if (props.check === true) {
      event.target.focus();
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-top")}>
        <div className={cx("logo-search")}>
          <div className={cx("logo")}>
            <img
              src="https://ebook.waka.vn/themes/desktop/images/logo-waka.png?v=1"
              alt="logo"
            />
          </div>
          <div className={cx("search")}>
            <input
              autofocus={true}
              placeholder="Nhập tên sách"
              value={value}
              onChange={(event) => {
                handleChange(event);
              }}
              onKeyDown={handleSearch}
              onClick={handleClickSearch}
              onMouseEnter={handleMouseEnter}
            ></input>
            {value !== "" && (
              <ul className={cx("result-search")}>
                {typeof props.listBookCT2 !== "undefined" &&
                  props.listBookCT2
                    .filter((book) => {
                      if (value === "") {
                        return 1 < 0;
                      }
                      return book.bookName
                        .toLowerCase()
                        .includes(value.toLowerCase());
                    })
                    .map((book) => {
                      return (
                        <li className={cx("list-book-search-li")}>
                          <Link
                            className={cx("list-book-search")}
                            to="/detailbook"
                            state={book}
                          >
                            {book.bookName}
                          </Link>
                        </li>
                      );
                    })}
              </ul>
            )}
            <button onClick={handleSearch1}>
              <AiOutlineSearch className={cx("search-icon")} />
              Tìm kiếm
            </button>
          </div>
        </div>
        <div className={cx("menu")}>
          <a>
            <img
              src="https://ebook.waka.vn/themes/desktop/images/hieu-soi.png"
              alt="logo"
            ></img>
          </a>
          {localStorage.getItem("token") && (
            <Tippy content="Làm thẻ" className={cx("tippy")} theme="tomato">
              <Link to="/registercard">
                <AiFillCreditCard
                  className={cx("card-icon")}
                  style={{
                    color: "#eeb815",
                    fontSize: "46px",
                    paddingTop: "10px",
                  }}
                />
              </Link>
            </Tippy>
          )}
          {localStorage.getItem("token") ? (
            <button onClick={handleLogout}>ĐĂNG XUẤT</button>
          ) : (
            <button onClick={handleOpen}>ĐĂNG NHẬP</button>
          )}
          <Login
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleOpen1={handleOpen1}
          />
          <Register
            open1={open1}
            handleOpen1={handleOpen1}
            handleClose1={handleClose1}
          />
        </div>
      </div>
      <div className={cx("header-bottom")}>
        <ul className={cx("nav")}>
          <li>
            <span>
              <AiOutlineUnorderedList className={cx("list-icon")} />
            </span>
            <div>
              <Menu className={cx("menu")}>
                <SubMenu className={cx("submenu")} title="Danh mục">
                  <Menu.Item key="setting:1">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Trinh thám - Kinh dị"}
                    >
                      Trinh thám - Kinh dị
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:2">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Viễn tưởng - Giả tưởng"}
                    >
                      Viễn tưởng - Giả tưởng
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:3">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Khởi nghiệp - Làm giàu"}
                    >
                      Khởi nghiệp - Làm giàu
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:4">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Marketing - Bán hàng"}
                    >
                      Marketing - Bán hàng
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:5">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Quản trị - Lãnh đạo"}
                    >
                      Quản trị - Lãnh đạo
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:6">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Tài chính cá nhân"}
                    >
                      Tài chính cá nhân
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:7">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Phát triển cá nhân"}
                    >
                      Phát triển cá nhân
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:8">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/bookbycategory"
                      state={"Doanh nhân - Bài học kinh doanh"}
                    >
                      Doanh nhân - Bài học kinh doanh
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </li>
          <li>
            <Link to="/home" className={cx("link-menu")}>
              <AiOutlineHome className={cx("home-icon")} />
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className={cx("link-menu")} to="/topbook">
              Bảng xếp hạng
            </Link>
          </li>
          <li>
            <Link className={cx("link-menu-not")}>Miễn phí HOT</Link>
          </li>
          <li>
            <Link className={cx("link-menu-not")}>Tuyển tập</Link>
          </li>
          <li>
            <Link className={cx("link-menu-not")}>Khuyên đọc</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
