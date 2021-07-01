import { call, takeEvery } from 'redux-saga/effects';
import authService from '../../services/authService';
import * as Types from '../constants/actionTypes';
import history from '../../history';

function* login(data) {
  try {
    let res = yield call(authService.login, data.payload);
    if (res.status === 200) {
      sessionStorage.setItem('token', res.data.data);
      history.push('/');
    }
  } catch (error) {
    console.log(error.response);
  }
}

function* authSaga() {
  yield takeEvery(Types.LOGIN, login);
}

export default authSaga;