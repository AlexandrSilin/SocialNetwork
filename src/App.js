import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import News from './components/news/News'
import Settings from './components/settings/Settings'
import Music from './components/music/Music'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/find_users' component={UsersContainer}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
