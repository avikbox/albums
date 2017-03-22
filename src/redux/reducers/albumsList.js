const ADD_ALBUM = 'ADD_ALBUM';
const DEL_ALBUM = 'DEL_ALBUM';
const SET_ALBUMS_FROM_LOCAL = 'SET_ALBUMS_FROM_LOCAL';

const initialState = {
  albums: [],
};

export default function reducer (state = initialState, action) {
  console.log('ACTION DATA', action.data);
  switch (action.type) {
    case ADD_ALBUM:
      state.albums.push(action.data);
      state = {...state, albums: state.albums};
      localStorage.setItem('albums', JSON.stringify(state.albums));
      break;

    case DEL_ALBUM:
      let albumsFiltered = state.albums.filter((item) => item.id !== action.data );
      state = {...state, albums: albumsFiltered};
      localStorage.setItem('albums', JSON.stringify(state.albums));
      break;

    case SET_ALBUMS_FROM_LOCAL:
      state = {...state, albums: action.data};
      break;
  }

  return state;
}
