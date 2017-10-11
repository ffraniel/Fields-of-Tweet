import React from 'react';
import NavBar from './NavBar';
import Trend from './Trend'
import Profile from './Profile'
import TwitBox from './TwitBox'
import Feed from './Feed'
import Suggestions from './Suggestions'

class App extends React.Component {
  render () {
    return (
      <div className="component-App">
        <NavBar />
        <div className='main container'>
          <div className="row">
            <div className="col-md-3">
              <Profile />
              <Trend />
            </div>
            <div className="col-md-6">
              <TwitBox />
              <Feed />
            </div>
            <Suggestions />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

