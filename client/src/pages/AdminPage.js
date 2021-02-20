// MVP: page holds admin profile data, data collected from user contact form, and form for entering testimonial info
// Nice to have: location to enter client list data, location to add photos and photo data

import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Messages from '../components/Messages';
import Testimonials from '../components/Testimonials';
import Owner from '../components/Owner';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_OWNER, GET_TESTIMONIALS, GET_MESSAGES } from '../utils/queries';
import { OWNER_LOGIN, UPDATE_OWNER, ADD_TESTIMONIAL, UPDATE_TESTIMONIAL, REMOVE_TESTIMONIAL } from '../utils/mutations';
import Auth from '../utils/auth';

const AdminPage = () => {
  
};

export default AdminPage;