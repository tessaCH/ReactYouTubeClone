import React from 'react';
import VideoCard from "./VideoCard";
import VIDEO_DATA from "./video.data";
import "./RecommendedVideos.css";

class RecommendedVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: VIDEO_DATA
        };
          
    }
    render(){
        const {videos} = this.state;
        return (
            <div className = "recommendedVideos">
                <h2>Recommended</h2>
                <div className = "recommendedVideos_videos">
                    {
                        videos.map( ({id, ...otherSectionProps}) => (
                            <VideoCard key={id} {...otherSectionProps}/>  
                        ))
                    }
                </div>

            </div>
        );
    }
}

export default RecommendedVideos;