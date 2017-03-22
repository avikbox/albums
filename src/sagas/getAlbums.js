import {takeEvery} from 'redux-saga'
import {call, put} from 'redux-saga/effects'


import { addSearchList } from '../redux/actions/actions'


function* getAlbumsFromAPI(action) {

}

export default function* watchRunGetAlbums() {
  yield takeEvery('GET_ALBUMS_FROM_API', getAlbumsFromAPI)
}
