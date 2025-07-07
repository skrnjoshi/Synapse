// client/src/store.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import setAuthToken from "./utils/setAuthToken";

const store = configureStore({
  reducer: rootReducer,
});

let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
