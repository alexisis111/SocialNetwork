import React from 'react';
import './App.css';
import HeaderContainer from './components/header/headerContainer';
import Settings from "./components/settings/settings";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './components/notFoundPage/notFoundPage';
import NavContainer from './components/nav/navContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import MusicContainer from './components/music/musicContainer';
import ProfileContainer from "./components/profile/profileContainer";
import My from './components/profile/my';
import Login from './components/login/login';



function App() {

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route  path='profile/:userId' element={<ProfileContainer />} />
                    <Route path='/profile' element={<My />} />
                    <Route path='/dialogs/*' element={<DialogsContainer />} />
                    <Route path='/music' element={<MusicContainer />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/login' element={< Login />} />
                    <Route path='/auth' element={< Login />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
//урок 60


