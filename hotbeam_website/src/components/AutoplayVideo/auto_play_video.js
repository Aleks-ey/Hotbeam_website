import React from "react";

const AutoplayVideo = () => 
(
    <div 
            dangerouslySetInnerHTML={{
                __html: `
                <video autoPlay
                    muted
                    loop
                    playsInline
                    className="embeded-responsive-item" width="100%" height="" background-color='white'>
                    <source src={movie} type="video/mp4"/>
                    <source src={movie} type="video/webm"/>
                </video>'`
            }} 
        />
)

export default AutoplayVideo;