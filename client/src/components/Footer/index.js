import "./footer.css";
import React from "react";
import { useQuery } from "@apollo/react-hooks";

// import ReactDom from "react-dom";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook3.png";

import { GET_OWNER } from "../../utils/queries";

function Footer() {
  //get projects
  const { loading, data } = useQuery(GET_OWNER);
  const ownerData = data?.owner || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!ownerData) {
    return <h2>No Projects Currently Available</h2>;
  }

  return (
    <>
      <div className="footer">
        <div className="w100">
          <a
            href="https://www.linkedin.com/company/woodland-consulting-llc/about/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin link" src={linkedin} />
          </a>
          <div>
            <p>Woodland Consulting LLC</p>
          </div>
          <a
            href="https://www.facebook.com/woodlandconsultingllc/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="facebook link" src={facebook} />
          </a>
        </div>
        <div className="flex-ceround">
          <div className="mobile-stack">{ownerData.ownerName}</div>
          <div className="mobile-stack">{ownerData.ownerEmail}</div>
          <div className="mobile-stack">{ownerData.address}</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
