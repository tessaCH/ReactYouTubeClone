import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/Videos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/search/' component={SearchPage} />
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />      
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />      
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
