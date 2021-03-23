import {
  FETCH_USERS_SUCCESS,
  REMOVE_USER,
  RESET_USERS,
} from "../actions/Types";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case REMOVE_USER:
      return {
        users: state.users.filter((_) => _.id !== action.payload),
      };

    default: {
      return state;
    }
  }
}
