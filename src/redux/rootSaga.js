import { fork, all } from 'redux-saga/effects';
// Sagas
import sessionSagas from './session/sagas';

function* rootSaga() {
  yield all([
    fork(sessionSagas.nupnpSearchWatcher),
  ]);
}

export default rootSaga;
