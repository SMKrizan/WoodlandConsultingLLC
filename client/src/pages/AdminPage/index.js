import React from "react";
import MsgList from "../../components/MsgList";
import TstList from "../../components/TstList";
import OwnerInfo from "../../components/OwnerInfo";
import './adminmodal.css'
import Auth from "../../utils/auth";

const AdminPage = (props) => {
  return (
    <section>
      {Auth.loggedIn() ? (
        <div className="pad">
          <MsgList />
          <TstList />
          <OwnerInfo />
        </div>
      ) : (
          <span>Please log in.</span>
        )}
    </section>
  );
};

export default AdminPage;
