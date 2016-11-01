import React from 'react';

import ColorChanger from '../components/home/ColorChanger.jsx';

const propTypes = {

};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

 render() {
   const colors = ['red', 'blue', 'green', 'brown'];

   return(
     <div>
       <div className="">Home Page</div>
       <ColorChanger colors={colors} />
     </div>
   )
 }
};

Home.propTypes = propTypes;

export default Home;
