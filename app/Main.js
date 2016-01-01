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


function createContainer(cb) {
  let body = document.querySelector('body');
  let script = document.querySelector('script');
  let appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  body.insertBefore(appContainer, script);

  cb();
};


function renderPage() {
  render((
    <Router>
      <Route path="/" component={App} >
        <Route path='about' component={About} />
      </Route>
    </Router>
  ), document.querySelector('.app-container'))
};

createContainer(renderPage);
