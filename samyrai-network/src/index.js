
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';
import StoreContext from './storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {

    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {

    let state = store.getState()
    rerenderEntireTree(state)
});

