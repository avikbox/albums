
import getAlbums from './getAlbums'

export default function* rootSaga() {
  yield [
    getAlbums(),

  ]
}