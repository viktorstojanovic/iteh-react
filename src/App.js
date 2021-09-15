import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Cards from './components/Cards';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Cards} />
        <Route path="/form" exact component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
