// //========================================
// // 1st example
// //========================================
// const redux = require("redux");
// const createStore = redux.createStore;

// const BUY_PASTA = "BUY_PASTA";

// function buyPasta() {
//   return {
//     type: BUY_PASTA,
//     quantity: 10,
//   };
// }

// const initialState = {
//   numOfPasta: 20,
//   numOfPizza: 30,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PASTA:
//       return {
//         ...state,
//         numOfPasta: state.numOfPasta - 1,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// console.log("INITIAL STATE", store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log("UPDATE STATE", store.getState())
// );

// store.dispatch(buyPasta());
// store.dispatch(buyPasta());
// store.dispatch(buyPasta());
// unsubscribe();

//=============================================
// 2nd example
//=============================================

const redux = require("redux");
const createStore = redux.createStore;

const BUY_ROCKET = "BUY_ROCKET";

function buyRocket() {
  return {
    type: BUY_ROCKET,
    payload: 200,
  };
}

const initialState = {
  numOfRocket: 10,
  numOfCar: 20,
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ROCKET:
      return {
        ...state,
        numOfRocket: state.numOfRocket - 1,
      };
    default:
      return state;
  }
};

const store = createStore(rocketReducer);

console.log("INITIAL STATE", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("UPDATE STATE", store.getState())
);

store.dispatch(buyRocket());
store.dispatch(buyRocket());

unsubscribe();
