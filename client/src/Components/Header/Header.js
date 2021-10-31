import React from 'react';
import "./header.css";
import { FaBars, FaUpload, FaMobileAlt, FaBell, FaSearch } from 'react-icons/fa'
import Logo from "../../Assets/Images/LOGO.svg";
import PP from "../../Assets/Images/pp.jpg"


const Header = ({hideSidebar, unHideSidebar}) => {
    const onClickHandler = ()=> {
        unHideSidebar(!hideSidebar);
    }
    return (
        <div className="header">
        <div className="header--logo">
        <FaBars size="24" onClick={onClickHandler}/>
        <img src={Logo} alt="MyTube logo here" height="45" />
        </div>
        <div className="header-right">
            <FaSearch size="24" />
            <FaUpload size="24" />
            <FaMobileAlt size="24" />
            <FaBell size="24" />
            <img src={PP} alt="user-profile" height="45" width="45" style={{borderRadius:"50%"}} />
        </div>
        </div>
    )
}

export default Header
