import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./store";
import * as actionTypes from "./actionTypes";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

store.dispatch(bugAdded("Bug 4"));
store.dispatch(bugResolved(1));

// store.subscribe(() => {
//   // Will be called everytime the state of store changed
//   console.log("Store changed!", store.getState());
// });

// const unsubscribe = store.subscribe(() => {
//   // Will be called everytime the state of store changed
//   console.log("Store changed!", store.getState());
// });

// store.dispatch({
//   type: actionTypes.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });

// unsubscribe();

// store.dispatch({
//   type: actionTypes.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
