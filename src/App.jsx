import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import AppLayout from './components/AppLayout';

import Home from './pages/Home';
import About from './pages/About';
import Documents from './pages/Documents';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
          </Switch>
        </AppLayout>
      </div>
    </Router>
  );
};

export default App;
