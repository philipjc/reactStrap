import React from 'react'

import ColorChooser from './ColorChooser.jsx';

const propTypes = {

}

export default class ColorChanger extends React.Component {
 constructor(props) {
   super(props)
   this.state = {}
 }

 createcolorChoosers() {
   const { colors } = this.props;

   return colors.map((color, idx) => {
     return (
       <ColorChooser
         color={color}
         key={idx}
         onClick={ () => onColorClick(color) }
        />
     )
   });
 }

 render() {

   const choosers = this.createcolorChoosers();

   return(
     <div className="color-changer">

       <p>Push a button to change to that color.</p>

       { choosers }

     </div>
   )
 }
}

ColorChanger.propTypes = propTypes
