import React from 'react';
import ChannelVideoCard from "./ChannelVideoCard";
import ChannelCard from "./ChannelCard";
import VIDEO_DATA from "../Videos/video.data";
import { withRouter } from 'react-router-dom';
import "./ChannelInfluence.css";


class ChannelInfluence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channelvideos: VIDEO_DATA,
            channelInfo: VIDEO_DATA[0].channel
        };
    }
    
    render(){
        const {channelvideos, channelInfo} = this.state;
        return (
            <div className = "channelInfluence">
                <ChannelCard avatar= {channelInfo.avatar} title={channelInfo.name} onClick={() => window.history.push(`${channelInfo.link}`)}/>
                <div className = "channelInfluence_InfoBox">
                    <div className = "channelInfluence_infolist">
                        <div className = "channelInfluence_info">
                            <div className = "channelInfluence_infoTitle">頻道分類</div>
                            <div className = "channelInfluence_infoContent">Music</div>
                        </div>
                        <div className = "channelInfluence_info">
                            <div className = "channelInfluence_infoTitle">訂閱數</div>
                            <div className = "channelInfluence_infoContent">{channelInfo.subs}</div>
                        </div>
                        <div className = "channelInfluence_info">
                            <div className = "channelInfluence_infoTitle">平均觀看數</div>
                            <div className = "channelInfluence_infoContent">1,000</div>
                        </div>
                        <div className = "channelInfluence_info">
                            <div className = "channelInfluence_infoTitle">平均互動數</div>
                            <div className = "channelInfluence_infoContent">20</div>
                        </div>
                        <div className = "channelInfluence_info">
                            <div className = "channelInfluence_infoTitle">影響力分數</div>
                            <div className = "channelInfluence_infoContent">100</div>
                        </div>
                    </div>                
                    <hr />
                    <div className = "channelInfluence_videos">
                        {channelvideos
                            .filter((channelvideo, idx) => idx <  4 )                        
                            .map( ({id, ...otherSectionProps}) => (
                                <ChannelVideoCard key={id} {...otherSectionProps}/>  
                            ))                        
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ChannelInfluence);