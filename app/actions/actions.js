
// action
export const CHANGE_COLOR = 'CHANGE_COLOR';


// action creator
export function changeColor(color) {
  return {
    type: 'CHANGE_COLOR',
    color
  }
};
