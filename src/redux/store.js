import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FilterReducer } from "./reducers";

const reducer = combineReducers({
  FilterReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === "CLEAR_SESSION") {
    state = undefined;
  }
  return reducer(state, action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => (next) => (action) => {
  let result = next(action);
  return result;
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
