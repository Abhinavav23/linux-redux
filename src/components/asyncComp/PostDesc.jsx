import React from 'react'
import { useSelector } from 'react-redux'

export const PostDesc = () => {
    const posts = useSelector((store) => store.posts);

  return (
    <>
        <h3>Post Description</h3>
        {
            posts.map((post) => {
                return <p key={post.id}>{post.body}</p>
            })
        }
    </>
  )
}
