import React from "react";
import MsgList from "../../components/MsgList";
import TstList from "../../components/TstList";
import OwnerInfo from "../../components/OwnerInfo";
import './adminmodal.css'

const AdminPage = (props) => {
  return (
    <div>
      {props.isAuthenticated ? (
        <div className="pad">
          <MsgList />
          <TstList />
          <OwnerInfo />
        </div>
      ) : (
          <span>Please log in.</span>
        )}
    </div>
  );
};

export default AdminPage;
