import React from 'react';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
import VIDEO_DATA from "../Videos/video.data";
import CHANNEL_DATA from "./channel.data";
import { TuneOutlinedIcon } from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: VIDEO_DATA,
            channel: CHANNEL_DATA
        };
          
    }
    render(){
        const {videos} = this.state.videos;
        const channel= this.state.channel;
        return (
            <div className="searchPage">
                <div className="searchPage_filter">
                    <TuneOutlinedIcon />
                    <h2>FILTER</h2>
                </div>
                
                <hr />
                {channel.map( ({id, ...otherSectionProps}) => (
                    <ChannelRow key={id} {...otherSectionProps}/>  
                 ))
                }
                <hr />
                {videos.map( ({id, ...otherSectionProps}) => (
                    <VideoRow key={id} {...otherSectionProps}/>  
                 ))
                }
            </div>
        );
    }
}

export default SearchPage;