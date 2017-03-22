const ADD_ALBUM = 'ADD_ALBUM';
const DEL_ALBUM = 'DEL_ALBUM';
const ADD_SEARCH_LIST = 'ADD_SEARCH_LIST';
const SET_ALBUMS_FROM_LOCAL = 'SET_ALBUMS_FROM_LOCAL';
const GET_ALBUMS_FROM_API = 'GET_ALBUMS_FROM_API';

export const addAlbum = (data) => ({ type: ADD_ALBUM, data });
export const delAlbum = (data) => ({ type: DEL_ALBUM, data });

export const addSearchList = (data) => ({ type: ADD_SEARCH_LIST, data });
export const setAlbumsFromLocal = (data) => ({ type: SET_ALBUMS_FROM_LOCAL, data });
export const getAlbumsFromApi = (data) => ({ type: GET_ALBUMS_FROM_API, data });