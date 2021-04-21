import "./VideoCard.css";


function VideoCard({ title, channel, view_count, upload_date, thumbnail }) {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src= {thumbnail} alt="" />
            <div className="videoCard_info">
                <div className="videoCard_text">
                    <div className="videoCard_wrap">
                    {title.toString()}
                    </div>
                    <div className='videoCard_footer'>
                    <span className="videoCard_channel">{channel}</span>
                    <span className="videoCard_view">觀看數：{view_count.toLocaleString('en')}次 | {20210422-upload_date}天前</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;