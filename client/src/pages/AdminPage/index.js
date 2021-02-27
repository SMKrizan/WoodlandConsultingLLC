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
          <div className="pad">
              <div className="flex-ceround">
              <div>
                    <button onClick={Auth.logout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <span>Please log in.</span>
        )}
    </section>
  );
};

export default AdminPage;
