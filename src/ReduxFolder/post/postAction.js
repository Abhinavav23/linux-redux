import axios from "axios"

export const savePost = (posts) => {
    // let posts = ['abhinav']
    // const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log('before return', posts.data);
    return {
        type: 'save-post',
        payload: posts
    }
}

export const savePostAsync = (no) => {
    return async (dispatch, getState) => {
        console.log(no);
        const store = getState()
        console.log(store.no);
        console.log(dispatch);
        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        dispatch(savePost(posts.data))
    }
}