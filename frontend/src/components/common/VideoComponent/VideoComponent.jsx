import React from 'react';
// import ReactPlayer from 'react-player';

const VideoComponent = ({ url, onEnded }) => {
  return (
    <div>
      <video
        src={url}
        controls={false}
        width="100%"
        height="auto"
        playsinline
        muted
        onEnded={onEnded}
        autoPlay
        preload="auto"
        loop
      />
    </div>
  );
};

export default VideoComponent;
