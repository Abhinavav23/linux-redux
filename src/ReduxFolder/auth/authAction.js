// action creator
export const login = (name) => {
    // return an action
    return {
      type: "login",
      payload: name
    };
};
  
export const logout = () => {
    return {
    type: "logout",
    payload: 'default'
    };
};