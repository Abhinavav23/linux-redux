import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { shopReducer } from "./shop/shopReducer";

// initial value
const iniVal = {
    count: 10,
  appName: "Newton Application",
  isLoggedIn: false,
  name: "default",
};

// {
//     isLoggedIn: true,
//     name: 'abhinav'
// }

const bothReducersCombined = combineReducers({
  authUser: authReducer,
  shop: shopReducer
})

export const myStore = createStore(bothReducersCombined);
