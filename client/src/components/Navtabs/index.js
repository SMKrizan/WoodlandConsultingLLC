import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navtabs() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Map">Map</Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>

        {Auth.loggedIn() ? (
          <li className="nav-item" key={"AdminPage"}>
            <Link to="/AdminPage">AdminPage</Link>
          </li>
        ) : (
          <> </>
        )}
      </ul>
    </div>
  );
}

export default Navtabs;
