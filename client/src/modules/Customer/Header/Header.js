import {React, useState,useEffect} from 'react'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import './Header.css'
import TextField from "@mui/material/TextField";


function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [hideElement, setHideElement] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);


  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset >= 300) {
        setHideElement(true);
        // setIsActive(current => !current);
        setIsActiveSearch(current => !current);


      } else {
        setHideElement(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={`nav ${isActive ? 'width' : ''}`}>
      <a href="#3" className="nav__brand">
        <img alt="" src="https://ebook.waka.vn/themes/desktop/images/logo-waka.png?v=1" style={{width: '110px',
    height: '34px'}}/>
      </a>
      <div className='content-center'>
        <div className="text-form">
          <input
          id="outlined-basic"
          variant="outlined"
          label="Search"
          className={`form ${isActive ? '' : ''}`}
          placeholder="Nhập tên sách"
        />
          <div><button className="text-form--button">Tìm kiếm</button></div>
          <div><img alt="" src="https://ebook.waka.vn/themes/desktop/images/hieu-soi.png" className="text-form--img"/></div>
          <div><img alt="" src="	https://ebook.waka.vn/themes/desktop/reactjs/images/1366/waka-vip.png" className="text-form--img-2"/></div>
          <div><button className="text-form--button__login">Đăng nhập</button></div>
      </div>

      <ul className={active} style={{border: '0px', display: hideElement ? '' : '' }}>
        <li className="nav__item" >
          <a href="#5" className="nav__link">
            <AiOutlineUnorderedList style={{marginRight: '10px',marginLeft: '3px'}}/>
          Danh mục
          </a>
        </li>
        <li className="nav__item">
          <a href="#6" className="nav__link">
          Sách mới nhất
          </a>
        </li>
        <li className="nav__item">
          <a href="#6" className="nav__link">
          Bảng xếp hạng
          </a>
        </li>
        <li className="nav__item">
          <a href="#7" className="nav__link">
          Miễn phí HOT
          </a>
        </li>
        <li className="nav__item">
          <a href="#7" className="nav__link">
          Tuyển tập
          </a>
        </li>
        <li className="nav__item">
          <a href="#2" className="nav__link">
            Khuyên đọc
          </a>
        </li>
      </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;