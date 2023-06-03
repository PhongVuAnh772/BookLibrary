import React from "react";
import {
  FcHome,
  FcSearch,
  FcMoneyTransfer,
  FcMultipleInputs,
  FcTodoList,
  FcCollaboration,
  FcRedo,
  FcPhoneAndroid,
} from "react-icons/fc";

export const SideBarRow = [
  {
    title: "Trang chủ",
    path: "/screen/home",
    icon: <FcHome />,
    cName: "nav-text",
  },
  {
    title: "Tìm kiếm",
    path: "/screen/search",
    icon: <FcSearch />,
    cName: "nav-text",
  },
  {
    title: "Lập phiếu mượn",
    path: "/screen/bill",
    icon: <FcMoneyTransfer />,
    cName: "nav-text",
  },
  {
    title: "Quản lý mượn trả",
    path: "/screen/collection",
    icon: <FcMultipleInputs />,
    cName: "nav-text",
  },
  {
    title: "Quản lý nhân viên",
    path: "/screen/newProduct",
    icon: <FcPhoneAndroid />,
    cName: "nav-text",
  },
  {
    title: "Báo cáo",
    path: "/screen/reports",
    icon: <FcCollaboration />,
    cName: "nav-text",
  },
  {
    title: "Quy định",
    path: "/screen/regulations",
    icon: <FcTodoList />,
    cName: "nav-text",
  },

  {
    title: "Đăng xuất",
    path: "/",
    icon: <FcRedo />,
    cName: "nav-text",
  },
];
