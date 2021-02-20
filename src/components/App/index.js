import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import HomePage from '../HomePage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </Router>
  );
};

export default App;
