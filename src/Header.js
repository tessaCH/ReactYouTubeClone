
import MenuIcon from  "@material-ui/icons/Menu";
import './Header.css'
import SearchIcon from  "@material-ui/icons/Search";
import VideoCallIcon from  "@material-ui/icons/VideoCall";
import AppsIcon from  "@material-ui/icons/Apps";
import NotificationsIcon from  "@material-ui/icons/Notifications";
import Avatar from  "@material-ui/core/Avatar";

function Header() {
    return (
        <div className = "header">
            <div className = "header_left">
                <MenuIcon />
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube Logo"
                />
            </div>
            <div className = "header_input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header_inputButton" />
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