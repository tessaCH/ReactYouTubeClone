import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RelatedVideos from './components/Videos/RelatedVideos';
import ChannelInfluence from './components/Channel/ChannelInfluence'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/search/' component={{ChannelInfluence}} />
          <Route path="/ddd">
            <div className="app_page">
              <ChannelInfluence />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />      
              <RelatedVideos title='Recommended' columns='2'/>
            </div>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
