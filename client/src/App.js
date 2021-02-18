import React, { useState } from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import Home from './pages/Home';
import About from './pages/About';
import Maps from './pages/Maps';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Switch statement returns appropriate component for 'currentPage'
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Map':
        return <Maps />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <Contact />;
    }
  };

  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} />
    <Resource name='testimonials' list={TestimonialList} />
    <Resource name='administrator' list={Administrator} />
    <body>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </main>
      <Footer />
    </body>
);
  </Admin>;
}

  export default App;
