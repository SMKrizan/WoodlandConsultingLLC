import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import Nav from "./components/Nav";
import Map from './pages/Maps'
import { StoreProvider } from "./utils/GlobalState";

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem('id_token')
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql',
// })

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/map" component={Map} />
            {/* <Route exact path="/portfolio" component={Portfolio} /> */}
            {/* <Route exact path="/contact" component={Contact} /> */}
          </Switch>
        </StoreProvider>
      </div>
    </Router>
    // </ApolloProvider>

  );
}

export default App;
