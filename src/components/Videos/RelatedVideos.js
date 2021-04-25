import React from 'react';
import VideoCard from "./VideoCard";
import VIDEO_DATA from "./video.data";
import "./RelatedVideos.css";

class RelatedVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: VIDEO_DATA,
            title: props.title,
            columns: parseInt(props.columns)
        };
    }
    
    render(){
        const {videos, title, columns} = this.state;        
        return (
            <div className = "relatedVideos">
                {title && <h2>{title}</h2>}
                <div className = "relatedVideos_videos">
                    {videos
                        .filter((video, idx) => (idx <  (columns>0 && columns * 4) ))                        
                        .map( ({id, ...otherSectionProps}) => (
                            <VideoCard key={id} {...otherSectionProps}/>  
                        ))                        
                    }
                </div>

            </div>
        );
    }
}

export default RelatedVideos;