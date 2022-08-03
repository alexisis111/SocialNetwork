import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { addMessage, addPost } from "./redux/appState";


const rerenderEntireTree = (appState) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App appState={appState} addPost={addPost}  addMessage={addMessage} />
        </BrowserRouter>
    );
}

export default rerenderEntireTree;



