import {React} from "react";
import "./SideBar.css";
import { SideBarRow } from "./SideBarRow";
import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <>
      
        <nav>
          <ul className={'nav-menu-items' ? 'nav-menu-items active' : 'nav-menu-items'}>
            {SideBarRow.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
  
  </>
  );
}

export default SideBar;
