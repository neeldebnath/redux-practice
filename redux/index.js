const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

/**
 * Action
 * @returns Action
 */
function buyCake(payload = 1) {
  return {
    type: BUY_CAKE,
    info: "First redux action",
    payload,
  };
}

function buyIceCream(payload = 1) {
  return {
    type: BUY_ICE_CREAM,
    info: "Buy Ice creams",
    payload,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Intial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake(3));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream(3));
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
