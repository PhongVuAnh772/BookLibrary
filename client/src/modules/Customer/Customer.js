import {React} from "react";
import { BrowserRouter,Outlet,Route,Routes } from "react-router-dom";
import Header from "./Header/Header"
import Content from "./Content/Content"
import Footer from "./Footer/Footer"

import "./Customer.css";

function Customer() {
  return (
    <div className="f-container fixed-h">   
      <Header />
      <Content />
      <Footer />  
    </div>
  );
}

export default Customer;