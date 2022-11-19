import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cakeReducers from "./cakes/cakeReducers";
import candyReducer from "./candy/candyReducers";

const rootReducer = combineReducers({
  cake: cakeReducers,
  candy: candyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
