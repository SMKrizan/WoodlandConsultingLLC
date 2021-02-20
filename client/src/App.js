import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
// 
import Map from './pages/Map';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';


import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/graphql'
});


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
        return <Map />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return 'Contact';
      default:
        return <Contact />;
    }
  };

  return (
    <ApolloProvider client={client}>

      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
