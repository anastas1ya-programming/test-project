import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(post => (
        <Post key={post.id} post={post.post} id={post.id} />
    ));
    let newPostElem = React.createRef();

    let addPost = () => {
        let text = newPostElem.current.value;
        props.addPost(text);
    }

    return (

        <div className={c.postsBlock}>
           <h2> My posts </h2>
            <div>
                <div>
                    <textarea className={c.ta} ref={newPostElem}></textarea>
                </div>
                <div>
                    <button className={c.btn} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;