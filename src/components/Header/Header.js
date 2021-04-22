import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from  "@material-ui/icons/Menu";
import SearchIcon from  "@material-ui/icons/Search";
import VideoCallIcon from  "@material-ui/icons/VideoCall";
import AppsIcon from  "@material-ui/icons/Apps";
import NotificationsIcon from  "@material-ui/icons/Notifications";
import Avatar from  "@material-ui/core/Avatar";

import './Header.css'

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className = "header">
            <div className = "header_left">
                <MenuIcon />
                <Link to="/">
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube Logo"
                />
                </Link>
            </div>
            <div className = "header_input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
            </div>
            <div className = "header_icons">
                <VideoCallIcon className = "header_icons"/>
                <AppsIcon />
                <NotificationsIcon />
                <Avatar
                    alt="robot"
                    src="https://avatars.githubusercontent.com/u/57258958?s=60&v=4"
                />
            </div>
        </div>
    );
}

export default Header;