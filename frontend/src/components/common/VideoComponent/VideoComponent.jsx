import React, { useRef, useEffect } from 'react';

const VideoComponent = ({ url, onEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleEnded = () => {
      onEnded();
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  return (
    <div>
      <video
        ref={videoRef}
        controls={false}
        width="100%"
        height="auto"
        playsInline
        muted
        autoPlay
        preload="auto"
      >
        <source src={url} type='video/webm' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
