import React from 'react';
import { withRouter } from 'react-router-dom';
import "./VideoCard.css";

const VideoCard = ({ title, channel, view_count, timestamp, thumbnail,link }) => (
    <div
        className="videoCard"
        onClick={() => window.history.push(`${link}`)}
    >
    <img className="videoCard_thumbnail" src= {thumbnail} alt="" />
    <div className="videoCard_info">
        <div className="videoCard_text">
            <div className="videoCard_wrap">
                {title.toString()}
            </div>
            <div className='videoCard_footer'>
                <span className="videoCard_channel">{channel.name}</span>
                <span className="videoCard_view">觀看數：{view_count.toLocaleString('en')}次 | {timestamp}</span>
            </div>
        </div>
    </div>
</div>
);

export default withRouter(VideoCard);