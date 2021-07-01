import * as Types from '../constants/actionTypes';

export const login = (data) => {
  return {
    type: Types.LOGIN,
    payload: data
  }
}
