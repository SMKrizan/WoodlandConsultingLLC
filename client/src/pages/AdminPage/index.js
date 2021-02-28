import React from "react";
import MsgList from "../../components/MsgList";
import TstList from "../../components/TstList";
import OwnerInfo from "../../components/OwnerInfo";
import './adminmodal.css'
// import Auth from "../../utils/auth";
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuth0();

  return (

    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        <MsgList />
        <TstList />
        <OwnerInfo />
      </div>
    )
  );
};

export default AdminPage;
