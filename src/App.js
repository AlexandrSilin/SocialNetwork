import React from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import News from './components/news/News'
import Settings from './components/settings/Settings'
import Music from './components/music/Music'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Loader} from "./components/loader/Loader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return this.props.initialized ? (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavContainer/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <DialogsContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/find_users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        ) : <Loader />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => dispatch(initializeApp())
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
