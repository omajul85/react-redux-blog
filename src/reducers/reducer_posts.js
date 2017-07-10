import { mapKeys } from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const post = action.payload.data;
      // the syntatic sugar [] is a type of string interpolation
      return { ...state, [action.payload.data.id]: post};
    default:
      return state;
  }
}