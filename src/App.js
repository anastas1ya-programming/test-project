import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {addPost, updateNewPostText} from "./redux/state";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.appState.dialogPage.dialogs}
                                                               messages={props.appState.dialogPage.messages}/>}/>
                    <Route path="/profile" element={<Profile posts={props.appState.profilePage.posts}
                                                             newPostText = {props.appState.profilePage.newPostText}
                                                             addPost={props.addPost}
                                                             updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
