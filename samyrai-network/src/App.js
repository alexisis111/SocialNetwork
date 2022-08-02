import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from "./components/dialogs/dialogs";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './components/notFoundPage/notFoundPage';

function App(props) {
    
    return (
        <div className="app-wrapper">
            <Header />
            <Nav  appState={props.appState.sidebar} />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile appState={props.appState.profilePage} />} />
                    <Route path='/dialogs/*' element={<Dialogs appState={props.appState}/>} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}
export default App;
//урок 25 закончен
