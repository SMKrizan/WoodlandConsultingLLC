import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import {useSpring, animated} from 'react-spring'

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
//import 'react-responsive-modal/styles.css';
// import { Fade } from 'reactstrap';

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

  //const propsMove = useSpring({opacity: 1, from: {opacity: 0}});

  // const renderPage = () => {

  //   switch (currentPage) {
  //     case 'Home':
  //       return <Home handlePageChange={handlePageChange} />;
  //     case 'About':
  //       return <About />;
  //     case 'Map':
  //       return <Map />;
  //     case 'Portfolio':
  //       return <Portfolio />;
  //     case 'Contact':
  //       return <Contact />;
  //     case 'AdminPage':
  //       return <AdminPage />
  //     default:
  //       return <Home />;
  //   }
  // };

  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Header currentPage={currentPage}/>
      
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/AdminPage" component={AdminPage} />
                  <Route exact path="/Portfolio" component={Portfolio} />
                  <Route exact path="/Contact" component={Contact} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/Map" component={Map} />
                  <Route component={Home} />
              </Switch>
     
          <Footer/>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
