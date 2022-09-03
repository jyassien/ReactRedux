import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer, //You can give a name you want.
  logged: loggedReducer,
});

export default allReducers;
