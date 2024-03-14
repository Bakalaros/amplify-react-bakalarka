import React from 'react';
import "../styles/mediaWithText.css";

function MediaWithText({ text, nadpis, mediaUrl, mediaType, textPosition, textColor }) {
    return (
        <div className="media-with-text" style={{ color: textColor }}>
            {textPosition === 'left' && (
                <div className="text-left">
                    <h3 className="title">{nadpis}</h3>
                    <p className="text">{text}</p>
                </div>
            )}

            {mediaType === 'image' && (
                <div className="media-container">
                    <img src={mediaUrl} className="media-pic" alt="media" />
                </div>
            )}

            {mediaType === 'video' && (
                <div className="media-container">
                    <video src={mediaUrl} className="media-item" controls={false} autoPlay muted loop />
                </div>
            )}
            {mediaType === 'none' && (
                <div className="media-container">
                </div>
            )}


            {textPosition === 'right' && (
                <div className="text-right">
                    <h3 className="title">{nadpis}</h3>
                    <p className="text">{text}</p>
                </div>
            )}
        </div>
    );
}

export default MediaWithText;
