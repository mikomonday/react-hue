import { takeLatest, call, put } from 'redux-saga/effects';
import services from '../../services';
import actions from './actions';
import types from './types';

function* nupnpSearchSaga() {
  try {
    const response = yield call(services.nupnpSearch);
    if (response.status >= 200 && response.status < 300) {
      yield put(actions.setBridgeInfo(response.data));
    } else {
      throw new Error('Could not connect to Hue bridge discovery server');
    }
  } catch (error) {
    yield put(actions.errorBridgeInfo(`Bridge Connection Error: ${error.message}`));
  }
}

function* nupnpSearchWatcher() {
  yield takeLatest(types.BRIDGE_INFO_REQUEST, nupnpSearchSaga);
}

export default {
  nupnpSearchWatcher,
};
