import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./modules/Auth/Home/Home";
import SignUp from "./modules/Auth/SignUp/SignUp";
import Screen from "./modules/Screen/Screen";

import Bill from "./modules/Screen/Content/Bill/Bill";
import HomeWeb from "./modules/Screen/Content/HomeWeb/HomeWeb";
import Collection from "./modules/Screen/Content/Collection/Collection";
import Search from "./modules/Screen/Content/Search/Search";
import ToDoList from "./modules/Screen/Content/ToDoList/ToDoList";
import Reports from "./modules/Screen/Content/Reports/Reports";
import TicKetIn from "./modules/Screen/Content/TicketIn/TicKetIn";
// import Customer from "./modules/Customer/Customer";
import DetailBook from "./modules/container/Page/DetailBook/DetailBook";
import ListBookByCategory from "./modules/container/Page/ListBookByCategory/ListBookByCategory";
import RegisterCard from "./modules/container/Page/RegisterCard/RegisterCard";
import ListBookSearch from "./modules/container/Page/ListBookSearch/ListBookSearch";
import TopBook from "./modules/container/Page/TopBook/TopBook";
import HomeWebb from "./modules/container/Page/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeWebb />} />
      {/* <Route path="/login" element={<Home />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/home" element={<HomeWebb />} />
      <Route path="/detailbook" element={<DetailBook />}></Route>
      <Route path="/bookbycategory" element={<ListBookByCategory />}></Route>
      <Route path="/registercard" element={<RegisterCard />}></Route>
      <Route path="/listbooksearch" element={<ListBookSearch />}></Route>
      <Route path="/topbook" element={<TopBook />}></Route>

      {/* <Route path="*" element={<Navigate to="/home" />}></Route> */}
      <Route path="/screen" exact element={<Screen />}>
        <Route path="/screen/home" exact element={<HomeWeb />} />
        <Route path="/screen/bill" element={<Bill />} />
        <Route path="/screen/collection" element={<Collection />} />
        <Route path="/screen/newProduct" element={<TicKetIn />} />
        <Route path="/screen/search" element={<Search />} />
        <Route path="/screen/regulations" element={<ToDoList />} />
        <Route path="/screen/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;
