import React from 'react';
import { Link } from 'react-router';

import Header from './components/Header.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

 render() {
   console.log(this.props);
   return (
     <div>
       <Header title="ES2015, Webpack, React, Istanbul, Karma, Jasmine, React Router, Redux" />
       <div className="">
         <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>

         </ul>

         { this.props.children }
       </div>
     </div>
   )
 }
};

export default App;
