// initial value
// const iniVal = {
//     count: 10,
//   appName: "Newton App",
//   isLoggedIn: false,
//   name: "default",
// };

// reducer function
export const authReducer = (initialValue, myAction) => {
    console.log('from reducer');
    console.log(initialValue);
    if (myAction.type === "login") {
      return { 
              ...initialValue,
              isLoggedIn: true, 
              name: myAction.payload, 
          };
    }
    if(myAction.type === 'logout'){
      return {
          ...initialValue,
          isLoggedIn: false,
          name: myAction.payload
      }
    }
    return initialValue;
};
