import * as Types from '../constants/actionTypes';

let initialState = {
  profile: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_PROFILE_SUCCESS:
      state = {
        ...state,
        profile: {...action.payload}
      }
      return state;
    default:
      return state;
  }
}

export default authReducer;
