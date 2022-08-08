
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
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

