import {combineReducers} from 'redux'

import albumsList from './albumsList'
import searchResultList from './searchResultList'


const rootReducer = combineReducers({
  albumsList,
  searchResultList,
});

export default rootReducer
