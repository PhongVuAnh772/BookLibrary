import React, { useState } from "react";
import {ReportRow} from "./ReportRow"
import {Link} from "react-router-dom"
import './Reports.css'

function ReportRender() {
    const [sidebar, setSidebar] = useState(false);

  return (
    <div>
        <div className="App-report-name">
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            {ReportRow.map((item, index) => {
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
        </div>
    </div>
  )
}

export default ReportRender