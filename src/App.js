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

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav siteBar={props.AppState.siteBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile dispatch={props.dispatch}
                                                                  profile={props.AppState.profile}/>}/>
                    <Route path='/messages' render={() => <Dialogs dispatch={props.dispatch}
                                                                   dialogs={props.AppState.dialogs}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
