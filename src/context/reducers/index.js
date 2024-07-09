import { combineReducers } from "redux";
import userReducer from "./user-reducer";

const combinedReducers = combineReducers({
  user: userReducer,
});

export default combinedReducers;
