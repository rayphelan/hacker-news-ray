import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import Stories from '../Stories';

const App = () => {
  return (
    <Router data-testid="router">
      <div className="container">
        <Header data-testid="header" />
        <Navbar data-testid="navbar" />
      </div>
      <Switch data-testid="switch">
        <Route data-testid="homepage" path="/" component={HomePage} exact={true} />
        <Route data-testid="feedpage" path="/:feed" component={Stories} />
      </Switch>
    </Router>
  );
};

export default App;
