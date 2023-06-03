// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilAnchor,
  UilAirplay,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Tổng quan",
    path: "/system",
  },
  {
    icon: UilClipboardAlt,
    heading: "Quản lý thẻ",
    path: "/system/cardSystem",
  },
  {
    icon: UilUsersAlt,
    heading: "Thông tin KH",
    path: "/system/customerSystem",
  },
  {
    icon: UilPackage,
    heading: "Quản lý sách",
    path: "/system/bookSystem",
  },
  {
    icon: UilChart,
    heading: "Quản lý NV",
    path: "/system/employeeSystem",
  },
  {
    icon: UilAirplay,
    heading: "Quản lý GD",
    path: "/system/purchasesSystem",
  },
  {
    icon: UilAnchor,
    heading: "Quản lý luật lệ",
    path: "/system/ruleSystem",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sách có trong hệ thống",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 1],
      },
    ],
  },
  {
    title: "Khách hàng đã thuê",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 1],
      },
    ],
  },
  {
    title: "Thẻ khách hàng hiện có",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 1],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Vũ Anh Phong",
    noti: "Đã đặt sách",
    time: "25 phút trước",
  },
  {
    img: img1,
    name: "Vũ Anh Phong",
    noti: "Đã đặt sách",
    time: "25 phút trước",
  },
  {
    img: img1,
    name: "Vũ Anh Phong",
    noti: "Đã đặt sách",
    time: "25 phút trước",
  },
];
