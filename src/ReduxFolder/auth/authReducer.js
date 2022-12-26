// initial value
export const iniAuthValue = {
    count: 10,
  appName: "Newton App",
  isLoggedIn: false,
  name: "default",
};

// reducer function
export const authReducer = (initialValue=iniAuthValue, myAction) => {
    console.log('from auth reducer');
    console.log(myAction);
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
