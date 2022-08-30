import React from 'react';
import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Settings from "./components/settings/settings";
import {Routes, Route} from "react-router-dom";
import NotFoundPage from './components/notFoundPage/notFoundPage';
import NavContainer from './components/nav/navContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import MusicContainer from './components/music/musicContainer';

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/music' element={<MusicContainer/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
//урок 49 закончен, пользователи и музыка


