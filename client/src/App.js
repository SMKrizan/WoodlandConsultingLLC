import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AdminPage from './pages/AdminPage';
import { StoreProvider } from './utils/GlobalState';
import Header from './components/Header';
import Footer from './components/Footer';

//const cache = new InMemoryCache();

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
        return <Map />;
      case 'Portfolio':
        return <Portfolio />;
      case 'AdminPage':
        return <AdminPage />;
      default:
        return <Contact />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          <main >
            {
              // Render the component returned by 'renderPage()'
              renderPage(currentPage)
            }
          </main>
          <Footer />
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
