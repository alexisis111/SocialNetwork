import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import DialogsPage from "./components/dialogs/dialogsPage";
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
                    <Route path='/profile' 
                    element={<Profile appState={props.appState.profilePage} dispatch={props.dispatch}  />} />
                    <Route path='/dialogs/*' element={<DialogsPage appState={props.appState.dialogsPage} dispatch={props.dispatch}/>} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}
export default App;
//урок 42 закончен, исправил ошибку гит

