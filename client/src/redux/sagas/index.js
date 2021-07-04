import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import contactSaga from './contactSaga';

export function* rootSaga() {
  yield all([
    authSaga(),
    contactSaga()
  ]);
}

export default rootSaga;
