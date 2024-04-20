import React from 'react';

const VideoComponent = ({ url, onEnded }) => {
  return (
    <div>
      <video
        controls={false}
        width="100%"
        height="auto"
        playsInline
        muted
        onEnded={onEnded}
        autoPlay
        preload="auto"
        loop
      >
        <source src={url} type='video/webm' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
