import React from "react";
import "./Nav.css";

const Nav = props => (
<div className="row">
        <div className="nav">{props.children}</div>
    </div>
);

export default Nav;