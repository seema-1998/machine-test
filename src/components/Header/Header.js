import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activePage, setActivePage] = useState("");


    useEffect(() => {
     
        let path = window.location.pathname;
        if (path === "/HomePage" || path === "/") {
          setActivePage("HomePage");
          
        } else if (path === "/user") {
          setActivePage("user");
          
        } else if (path === "/task") {
          setActivePage("task");
         
        } 
       
      }, []);
    return (
        <>
         <div className="common-top-bar1">
            <div className="logo">
                <img
                    className="img"
                        
                        src={require("../../assets/images/logo.png")}
                        alt="LOGO"
                />
            </div>
            <ul>
                    <li><Link  className={`${activePage === "user" && "active"}`}  to="/user">User</Link></li>
                    <li><Link  className={`${activePage === "task" && "active"}`} to="/task">Task</Link></li>
                    <li><Link className={`${activePage === "HomePage" && "active"}`} to="/HomePage">Home</Link></li>
        
            </ul>
           
      </div>
        </>
    );
};

export default Header;