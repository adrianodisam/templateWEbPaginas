import React from 'react';
import tape from './vecteezy_justice-and-law-concept-male-judge-in-a-courtroom-on-wooden_10927073_989.mp4';

const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: '30rem',
        position: 'absolute',
        // left: '50%',
        objectFit: 'cover',
        // transform: 'translate(-10%,-10%)',
        zIndex: '-1',
      }}
    >
      <source src={tape} type="video/mp4" />
    </video>
  );
};

export default Video;
