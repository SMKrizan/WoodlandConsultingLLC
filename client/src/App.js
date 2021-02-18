import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Maps from './pages/Maps';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} />
    <Resource name='testimonials' list={TestimonialList} />
    <Resource name='administrator' list={Administrator} />
  </Admin>;
}

export default App;
