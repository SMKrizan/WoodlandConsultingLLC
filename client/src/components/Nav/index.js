import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className>
            <Link to="/map">
                Map
            </Link>
        </ul>
    );
}

export default Nav;