import React from 'react';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     />
            </BrowserRouter>

        </React.StrictMode>
    )
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

