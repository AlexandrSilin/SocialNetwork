import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import News from './components/news/News'
import Settings from './components/settings/Settings'
import Music from './components/music/Music'
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav sideBar={props.AppState.sideBarReducer.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/messages' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
