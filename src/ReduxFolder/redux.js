import {legacy_createStore as createStore} from 'redux';
// action creator
export const updateLoginState = () => {
    return {
        type: 'update-login-state'
    }
}

// initial value
const iniVal = {
    isLoggedIn: false,
    name: 'default'
}

// reducer function
const appReducer = (initialValue=iniVal, myAction) => {
    // console.log(myAction);
    if(myAction.type === 'my name is abhinav'){
        return {isLoggedIn: true}
    }
    return initialValue
}

export const myStore = createStore(appReducer);
