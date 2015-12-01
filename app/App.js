import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';

if (ON_TEST) {
  // run test code, mocks etc
  var test = require('../tests/app.test');
}

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<Main title="FUCK OFF" />, app);
}
