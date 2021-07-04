import * as Types from '../constants/actionTypes';
let initialState = {
  friends: []
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_FRIENDS_SUCCESS:
      state = {
        ...state,
        friends: [...action.payload]
      }
      return state;
    default:
      return state;
  }
}

export default contactReducer;
