import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
// import TstList from './components/TstList';
// import TstAdd from './components/TstAdd';
// import TstEdit from './components/TstEdit';
// import AdminShow from './components/AdminShow';
// import AdminUpdate from './components/AdminUpdate';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} />
    <Resource name='testimonials' list={ListGuesser} />
    <Resource name='administrator' list={ListGuesser} />
  </Admin>;
}

export default App;
