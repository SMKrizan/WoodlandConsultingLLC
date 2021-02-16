import React from "react";
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