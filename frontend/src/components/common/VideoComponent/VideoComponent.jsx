import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = ({ url, onEnded }) => {
  return (
    <div>
      <ReactPlayer
        url={url}
        controls={false}
        width="100%"
        height="auto"
        config={{
          file: {
            forceVideo: true,
          },
        }}
        playsinline
        muted
        onEnded={onEnded}
        playing={true}
        preload="auto"
        loop={true}
      />
    </div>
  );
};

export default VideoComponent;
