import { mapKeys, omit } from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const post = action.payload.data;
      // the syntatic sugar [] is a type of string interpolation
      return { ...state, [action.payload.data.id]: post};
    case DELETE_POST:
      return omit(state, action.payload);
    default:
      return state;
  }
}