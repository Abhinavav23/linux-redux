import { legacy_createStore as createStore } from "redux";
import { authReducer } from "./auth/authReducer";

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

export const myStore = createStore(authReducer, iniVal);
