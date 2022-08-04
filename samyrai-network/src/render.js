import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { addMessage, addPost,  updateMessageText,  updatePostText } from "./redux/appState";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (appState) => {
    
    root.render(
        <BrowserRouter>
            <App appState={appState} addPost={addPost}  addMessage={addMessage} updatePostText ={updatePostText} updateMessageText={updateMessageText} />
        </BrowserRouter>
    );
}

export default rerenderEntireTree;



