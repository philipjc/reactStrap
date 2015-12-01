import React from 'react';

const propTypes = {
  title: React.PropTypes.string
};

export default class Main extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     header: this.props.title
   }
 }

 render() {

   return(
     <div className="main">
       <h1>{ this.state.header }</h1>
     </div>
   );
 }
};

Main.propTypes = propTypes;
