
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/appState';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (_appState) => {

    root.render(
        <BrowserRouter>
            <App appState={store.getState()}
                addPost={store.addPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
                updateMessageText={store.updateMessageText.bind(store)} />
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

