import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = [
        {id:1, post: "Hi, I'm Shepard!"},
        {id:2, post: "I should go..."},
        {id:3, post: "Bye, my friends."},

    ]
    let postsElements = posts.map(post => (
        <Post key={post.id} post={post.post} id={post.id} />
    ));

    return (

        <div className={c.postsBlock}>
           <h2> My posts </h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={c.btn}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;