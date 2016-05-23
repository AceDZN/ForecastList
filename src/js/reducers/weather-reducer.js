import {FETCH_FORECAST} from '../actions/index';

export default function(state = [],action){
  console.log(state);
  switch(action.type){
    case FETCH_FORECAST:
      return [action.payload.data, ...state];
    default:
      return state
  }
  return state;
}
