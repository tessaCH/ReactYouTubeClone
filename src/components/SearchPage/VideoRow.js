import React from 'react';
import "./VideoRow.css";

function VideoRow({ views, description, timestamp, channel, title, image }) {
    return (
        <div className="videoRow">
            <img alt="" src={image} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel.name}．{" "}
                    <span className="videoRow_subs">
                        <span className="videoRow_subsNumber">{channel.subs}</span>
                    </span>
                    {views} views．{timestamp}
                </p>
            </div>
            <p className="videoRow_description">{description}</p>
        </div>
    );
}

export default VideoRow;