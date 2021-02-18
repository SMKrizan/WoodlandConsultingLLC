import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
// 
import Maps from './pages/Maps';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'

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

  return (
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
}

export default App;
