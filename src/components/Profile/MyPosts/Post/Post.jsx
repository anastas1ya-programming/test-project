import React from 'react';
import c from './Post.module.css';

const Post =(props) =>{
    return(
    <div>
        <div className={c.item}>
            <img src="https://i.pinimg.com/564x/01/89/b3/0189b3608b954f5826053a4388689dc0.jpg"/>
            {props.post}
            <div>
                <span>like</span>
            </div>
        </div>        
    </div>        

    )
}
export default Post;