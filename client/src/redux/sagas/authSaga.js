import { call, takeEvery, put } from 'redux-saga/effects';
import authService from '../../services/authService';
import * as Types from '../constants/actionTypes';
import history from '../../history';
import { profileSuccess } from '../actions/authAction';

function* login(data) {
  try {
    let res = yield call(authService.login, data.payload);
    if (res.status === 200) {
      localStorage.setItem('token', res.data.data);
      history.push('/');
    }
  } catch (error) {
    console.log(error.response);
  }
}

function* profile() {
  try {
    let res = yield call(authService.getProfile);
    if (res.status === 200) {
      yield put(profileSuccess(res.data));
    }
  } catch (error) {
    console.log(error.response);
  }
}

function* authSaga() {
  yield takeEvery(Types.LOGIN, login);
  yield takeEvery(Types.GET_PROFILE, profile);
}

export default authSaga;