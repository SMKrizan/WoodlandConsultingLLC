import React, { useState } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './pages/Home';
import About from './pages/About';
import Maps from './pages/Maps';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  const [currentPage, handlePageChange] = useState('Home');

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
    <ApolloProvider client={client}>
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </main>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
