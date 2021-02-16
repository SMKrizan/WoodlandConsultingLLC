import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Map from './pages/Maps'
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
  
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/map" component={Map} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>


  );
}

export default App;
