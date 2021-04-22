import React from 'react';
import Avatar from  "@material-ui/core/Avatar";
import { VerifiedIcon } from "@material-ui/icons/CheckCircleOutlineOutlined";

import "./ChannelRow.css";

function ChannelRow({ avatar, name, subs, noOfVideos, description, verified }) {
    return (
        <div className="channelRow">
            <Avatar className='channelRow_logo'
                    alt={name}
                    src={avatar}
            />
            <div className="channelRow_text">
                {name} {verified && <VerifiedIcon/>}
            </div>
            <p>{subs} subscribers．{noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    );
}

export default ChannelRow;