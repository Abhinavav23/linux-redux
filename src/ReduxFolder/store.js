import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer, iniAuthValue } from "./auth/authReducer";
import { postReducer } from "./post/postReducer";
import { initialShopValue, shopReducer } from "./shop/shopReducer";
import thunk from 'redux-thunk';

// initial value
// const iniVal = {
//     count: 10,
//   appName: "Newton Application",
//   isLoggedIn: false,
//   name: "default",
// };

// {
//     isLoggedIn: true,
//     name: 'abhinav'
// }

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('inside logger function middleware');
      console.log('action',action);
      // console.log(store, );
      if(action.payload === ''){
        action.payload = 'this is a default user'
      }
      next(action);
    }
  }
}

// const bothReducersCombined = combineReducers({
//   authUser: authReducer,
//   shop: shopReducer
// })

// const iniValue = {
//   authUser: iniAuthValue,
//   shop: initialShopValue
// }


// export const myStore = createStore(bothReducersCombined,applyMiddleware(logger));

export const myStore = createStore(postReducer, applyMiddleware(thunk))
