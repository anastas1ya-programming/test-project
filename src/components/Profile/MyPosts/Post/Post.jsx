import React, {useState} from 'react';
import c from './Post.module.css';

const Post =(props) =>{
    const[counter, setCounter] = useState(0)
    function toLike(){
        setCounter(counter+1)
    }

    return(
    <div>
        <div className={c.item}>
            <img src="https://i.pinimg.com/564x/01/89/b3/0189b3608b954f5826053a4388689dc0.jpg"/>
            {props.post}
            <div>
                <button className={c.btn} onClick={toLike}>♥</button>{counter}
            </div>
        </div>        
    </div>        

    )
}
export default Post;