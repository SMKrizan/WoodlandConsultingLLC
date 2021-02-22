// MVP: page holds admin profile data, data collected from user contact form, and form for entering testimonial info
// Nice to have: location to enter client list data, location to add photos and photo data

import React, { useState } from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import classnames from 'classnames';

import ManageMsg from '../../components/ManageMsg';
import ManageTst from '../../components/ManageTst';
import OwnerInfo from '../../components/OwnerInfo';
// import Auth from '../../utils/auth';

const AdminPage = (props) => {

    return (
        <div>
                <ManageMsg />
                <ManageTst />
                <OwnerInfo />
        </div>
    )
};

export default AdminPage;