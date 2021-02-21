// MVP: page holds admin profile data, data collected from user contact form, and form for entering testimonial info
// Nice to have: location to enter client list data, location to add photos and photo data

import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";

import DispMessages from '../../components/DispMessages';
// import DispTestimonials from '../components/DispTestimonials';
// import DispOwner from '../components/DispOwner';
import Auth from '../../utils/auth';

const AdminPage = () => {
    return (
        <div>
            <DispMessages />
        </div>
    )
};

export default AdminPage;