import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://i.pinimg.com/236x/26/f0/db/26f0db155bf6a2508c52040084eba161.jpg'></img>
      </header>
      <nav className='nav'>
        <div>
          <a href='#s'>Profile</a>
        </div>
        <div>
          <a href='#s'>Messages</a>
        </div>
        <div>
          <a href='#s'>News</a>
        </div>
        <div>
          <a href='#s'>Music</a>
        </div>
        <div>
          <a href='#s'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg'></img>
        </div>
        <div>ava + desc</div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            post1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
