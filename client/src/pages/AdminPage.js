// MVP: page holds admin profile data, data collected from user contact form, and form for entering testimonial info
// Nice to have: location to enter client list data, location to add photos and photo data

import React from 'react';
import { Resource } from 'react-admin';
import PostList from '../components/PostList';
import TestimonialList from '../components/TestimonialList';

const AdminPage = () => {
    return (
        <>
            <Resource name='posts' list={PostList} />
            <Resource name='testimonials' list={TestimonialList} create={TestimonialList} edit={TestimonialList} />
        </>
    )
}

export default AdminPage;