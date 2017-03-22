const ADD_SEARCH_LIST = 'ADD_SEARCH_LIST';
const GET_ALBUMS_FROM_API = 'GET_ALBUMS_FROM_API';

const initialState = {
  searchResult: [],
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_SEARCH_LIST:
      let searchResult = action.data;
      state = {...state, searchResult}; console.log('STATE SEARCH LIST', state);
      break;
  }

  return state;
}
