import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Octavia"},
        {id: 2, name: "Clarke"},
        {id: 3, name: "Bellamy"},
        {id: 4, name: "Raven"},
    ]
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Bye..."},
        {id: 3, message: "What's up"},
        {id: 4, message: "I'm an engineer"},
    ]
    let dialogsElements = dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElement = messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={c.messages}>
                {messagesElement}
            </div>
        </div>
    )

}
export default Dialogs;