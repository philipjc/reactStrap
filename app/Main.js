import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './App.jsx';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import Services from './views/Services.jsx';


if (ON_TEST) {
  // run test code, mocks etc
  var test = require('../tests/app.test');
};


function renderPage() {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />

      </Route>
    </Router>
  ), document.querySelector('.app'))
};

renderPage();
