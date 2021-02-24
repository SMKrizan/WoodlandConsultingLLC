import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/auth";
// import MsgList from "../../components/MsgList";
// import TstList from "../../components/TstList";
import OwnerInfo from "../../components/OwnerInfo";
const AdminPage = (props) => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          {/* <MsgList /> */}
          {/* <TstList /> */}
          <OwnerInfo />
        </div>
      ) : (
          <span>Please log in.</span>
        )}
    </div>
  );
};
export default AdminPage;