import React from "react";
import "./Header.css";
const Header = ({children,backGr}) => {
    return <header className={backGr}>{children}</header>
}
Header.defaultProps = {
    backGr : "defaultHeader"
}

export default Header;