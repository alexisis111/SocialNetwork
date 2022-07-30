import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

let PostsData = [
    { message: 'hey hey hey', likesCount: 6 },
    { message: 'hello', likesCount: 44 },
    { message: 'how are you', likesCount: 0 }
]

let DialogData = [
    { id: 1, name: "Sveta" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Goga" },
    { id: 6, name: "Lara" }
]

let MessageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" },
    { id: 3, message: "Wow" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App PostsData={PostsData} DialogData={DialogData} MessageData={MessageData} />
    </BrowserRouter>
);


