import React from "react";
import c from './InputField.module.css'
const InputField =() =>{
    let newMessage = React.createRef();
    let sendMessage =() => {
        let text = newMessage.current.value;
        alert(text);
    }
    return(
        <div className={c.sendArea}>
            <div>Отправить новое сообщение</div>
            <textarea className={c.ta} ref={newMessage}></textarea>
            <button className={c.btn} onClick={sendMessage}>Отправить</button>
        </div>
    )
}
export default InputField;