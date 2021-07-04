import { put, call } from '@redux-saga/core/effects';
import contactService from '../../services/contactService';
import { getAllFriendsSuccess } from '../actions/contactAction';

function* contactSaga () {
  try {
    let response = yield call(contactService.getAllFriends);
    if (response.status === 200) {
      yield put(getAllFriendsSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export default contactSaga;
