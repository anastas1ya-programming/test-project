const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, I'm Shepard!"},
                {id: 2, post: "I should go..."},
                {id: 3, post: "Bye, my friends."},
                {id: 4, post: "Oh, wait..."},
            ],
            newPostText: 'this is an app'
        },
        dialogPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Bye..."},
                {id: 3, message: "What's up"},
                {id: 4, message: "I'm an engineer"},
            ],
            dialogs: [
                {id: 1, name: "Octavia"},
                {id: 2, name: "Clarke"},
                {id: 3, name: "Bellamy"},
                {id: 4, name: "Raven"},
                {id: 5, name: "Diyoza"},
                {id: 6, name: "Emory"},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    },

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default store