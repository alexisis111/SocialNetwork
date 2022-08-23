
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
debugger
    let state = store.getState()
    rerenderEntireTree(state)
});

