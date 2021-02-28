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
import AdminAccess from './pages/AdminAccess';
import 'react-responsive-modal/styles.css';
import { ProtectedRoute } from './components/Protected';

import AuthService from "./utils/auth";

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

  const [isAuthenticated, setAuthenticated] = useState(AuthService.loggedIn())

  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AdminPage" component={AdminPage} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Map" component={Map} />
            <Route exact path="/AdminAccess" component={AdminAccess} />
            <ProtectedRoute to="/admin_page" />
            <ProtectedRoute component={AdminAccess} />
          </Switch>
          <Footer />
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
