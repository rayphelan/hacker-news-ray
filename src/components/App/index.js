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
    <Router>
      <div className="container">
        <Header />
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/:feed" component={Stories} />
      </Switch>
    </Router>
  );
};

export default App;
