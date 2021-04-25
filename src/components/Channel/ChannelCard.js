import React from 'react';
import "./ChannelCard.css";

const ChannelCard = ({ title, avatar }) => (
    <div className="channelCard">
        <div className="channelCard_thumbnailBox">
            <img className="channelCard_thumbnail" src= {avatar} alt="" />
        </div>
        <div className="channelCard_info">
            {title}
        </div>
    </div>
);

export default ChannelCard;