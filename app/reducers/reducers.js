import CHANGE_COLOR from '../actions/actions';

const initialState = {
  backgroundColor: 'pink'
};


const changeColorApp = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_COLOR':
      return Object.assign({}, state, {
        backgroundColor: action.color
      });

    default:
      return state;
  }
}

export default changeColorApp;

// switch (action.color) {
//   case 'red':
//     return {
//       color: action.color
//     };
//
//   default:
//   return state;
// }
