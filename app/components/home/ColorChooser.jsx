import React from 'react'

const propTypes = {
  // onClick: PropTypes.func.isRequired
}

export default class ColorChooser extends React.Component {
 constructor(props) {
   super(props)
   this.state = {}
 }

 render() {

   const { color } = this.props;

   const theseStyles = {
     color: 'white',
     background: color
   };

   return(
     <div className="color-changer__chooser">
       <button onClick={ this.props.onClick }>
         Choose
       </button>
       <span style={theseStyles}>
         { color }
       </span>
     </div>
   )
 }
}

ColorChooser.propTypes = propTypes;
