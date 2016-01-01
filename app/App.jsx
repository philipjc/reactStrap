import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header.jsx';


class App extends React.Component {
  constructor() {
    super(props);
    this.state = {

    }
  }

 render() {
   return (
     <div>
       <Header title="ES2015, Webpack, React, Istanbul, Karma, Jasmine, React Router, Redux" />
       <div className="">
         <ul>
          <li><Link to='/about'>About</Link></li>

         </ul>

         { this.props.children }
       </div>
     </div>
   )
 }
};

export default App;
