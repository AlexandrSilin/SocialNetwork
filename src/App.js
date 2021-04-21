import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import News from './components/news/News'
import Settings from './components/settings/Settings'
import Music from './components/music/Music'

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
