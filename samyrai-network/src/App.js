import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/header_img/profile';
import Dialogs from "./components/dialogs/dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Profile />
            </div>
            {/*<Profile />*/}
        </div>
    );
}
export default App;
//урок 18 закончен
