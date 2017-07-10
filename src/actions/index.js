import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=omajul85';

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, cb) {
  const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`)
    .then(() => cb());

  return {
    type: DELETE_POST,
    payload: id
  };
}

export function createPost(values, cb) {
  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, values)
    .then(() => cb());

  return {
    type: CREATE_POST,
    payload: request
  };
}