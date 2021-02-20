// MVP: page holds admin profile data, data collected from user contact form, and form for entering testimonial info
// Nice to have: location to enter client list data, location to add photos and photo data

import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import Owner from '../components/Owner';
import Messages from '../components/Messages';
import Testimonials from '../components/Testimonials';

const AdminPage = () => {
    return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='messages' list={Messages} />
    <Resource name='testimonials' list={TstList} edit={TstEdit}  />
    <Resource name='owner' list={Owner} />
  </Admin>;
};

export default AdminPage;