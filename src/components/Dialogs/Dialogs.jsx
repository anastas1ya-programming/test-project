import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import InputField from "./InputField/InputField";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElement = props.messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)
    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={c.messages}>
                    {messagesElement}
                </div>
            </div>
            <InputField/>
        </div>
    )

}
export default Dialogs;