import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePost, savePostAsync } from '../../ReduxFolder/post/postAction'

export const PostTitle = () => {
    // const [posts, setPosts] = useState([]);
    const posts = useSelector((store) => store.posts);
    console.log(posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(savePostAsync(1))
    }, [])
  return (
    <>
        <h3>Posts</h3>
        {
            posts.map((post) => {
                return <p key={post.id}>{post.title}</p>
            })
        }
    </>
  )
}
