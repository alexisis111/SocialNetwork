import React from 'react';
import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './components/notFoundPage/notFoundPage';
import NavContainer from './components/nav/navContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';

function App() {
    
    return (
        <div className="app-wrapper">
            <Header />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/dialogs/*' element={<DialogsContainer />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<div>user</div>} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}
export default App;
//урок 48 закончен, ...state

