import {FETCH_FORECAST} from '../actions/index';

export default function(state = [],action){
  switch(action.type){
    case FETCH_FORECAST:
      return [action.payload.data, ...state];
    default:
      return state
  }
  return state;
}
