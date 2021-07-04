import * as Types from '../constants/actionTypes';

export const getAllFriends = () => {
  return {
    type: Types.GET_ALL_FRIENDS
  }
}

export const getAllFriendsSuccess = (data) => {
  return {
    type: Types.GET_ALL_FRIENDS_SUCCESS,
    payload: data
  }
}
