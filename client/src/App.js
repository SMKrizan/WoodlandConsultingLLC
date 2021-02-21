import React, { useState } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './pages/Home';
import About from './pages/About';
// 
import GoogleMapReact from './pages/GoogleMapReact';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
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
        return <GoogleMapReact />;
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
      <Router>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main >
          {
            // Render the component returned by 'renderPage()'
            renderPage(currentPage)
          }
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
