const iniPosts = {
    posts: [],
     no: 10
}

export const postReducer = (iniVal=iniPosts, action) => {
    if(action.type === 'save-post'){
        return {
            ...iniVal,
            posts: action.payload
        }
    }

    return iniVal
}