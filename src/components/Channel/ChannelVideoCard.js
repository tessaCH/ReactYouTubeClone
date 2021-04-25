import React from 'react';
import { withRouter } from 'react-router-dom';
import "./ChannelVideoCard.css";

const ChannelVideoCard = ({ title, thumbnail,link }) => (
    <div
        className="channelVideoCard"
        onClick={() => window.history.push(`${link}`)}
    >
    <img className="channelVideoCard_thumbnail" src= {thumbnail} alt="" />
        <div className="channelVideoCard_info">
            <div className="channelVideoCard_wrap">
                {title.toString()}
            </div>
        </div>
</div>
);

export default withRouter(ChannelVideoCard);