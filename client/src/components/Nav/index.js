import React from "react";
// import Auth from "../../utils/auth";
import { WrappedMap } from "react-router-dom";
// import { Link, WrappedMap } from "react-router-dom";
function Nav() {
    return (
        <ul className>
            {/* <Link to="/map">
                Map
            </Link> */}
            <WrappedMap googleMapUrl> </WrappedMap>
        </ul>
    );
}

export default Nav;