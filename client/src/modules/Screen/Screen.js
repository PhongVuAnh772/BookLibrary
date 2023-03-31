import {React} from "react";
import { BrowserRouter,Outlet,Route,Routes } from "react-router-dom";

import SideBar from "./SideBar/SideBar";
import "./Screen.css";

function Screen() {
  return (
    <div className="screen">     
            <SideBar />
            <Outlet />
    </div>
  );
}

export default Screen;