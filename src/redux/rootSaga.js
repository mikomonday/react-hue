import { fork } from 'redux-saga/effects';
// Sagas
import sessionSagas from './session/sagas';

function* rootSaga() {
  yield [
    fork(sessionSagas.nupnpSearchWatcher),
  ];
}

export default rootSaga;
