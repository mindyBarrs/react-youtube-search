import React from "react";

/* STYLESHEET */
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div onClick={ () => onVideoSelect(video) } className="video-item item" >
            <img className="ui image" alt={`${video.snippet.title} thumbnail`} src={ video.snippet.thumbnails.medium.url } />
            
            <div className="content">
                <div className="header">
                    { video.snippet.title }
                </div>
            </div>
        </div>
    );
}

export default VideoItem;