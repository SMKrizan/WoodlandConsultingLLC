import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';


function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} />
  </Admin>;
}

export default App;
