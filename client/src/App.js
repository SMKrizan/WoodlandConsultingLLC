import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import TestimonialList from './components/TstList';
// import TstAdd from './components/TstAdd';
// import TstEdit from './components/TstEdit';
import Administrator from './components/AdminShow';
// import AdminUpdate from './components/AdminUpdate';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} />
    <Resource name='testimonials' list={TestimonialList} />
    <Resource name='administrator' list={Administrator} />
  </Admin>;
}

export default App;
