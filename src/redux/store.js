import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// USER
import getCurrUser from "./reducers/userReducer";

const rootReducer = combineReducers({
  getCurrUser,
});

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
