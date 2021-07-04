import * as Types from '../constants/actionTypes';

export const login = (data) => {
  return {
    type: Types.LOGIN,
    payload: data
  }
}

export const profile = () => {
  return {
    type: Types.GET_PROFILE
  }
}

export const profileSuccess = (data) => {
  return {
    type: Types.GET_PROFILE_SUCCESS,
    payload: data
  }
}
