import { GET_CURR_USER } from "../actions/types";

const initialState = {
  user: {
    email: "No user logged in",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURR_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
