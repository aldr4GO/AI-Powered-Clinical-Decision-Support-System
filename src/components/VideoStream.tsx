import React, { useEffect, useRef } from 'react';
import { useCallStore } from '../store/callStore';

export const VideoStream: React.FC<{ isLocal?: boolean }> = ({ isLocal = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { localStream, remoteStream } = useCallStore();
  const stream = isLocal ? localStream : remoteStream;

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={`relative rounded-lg overflow-hidden ${isLocal ? 'w-1/3' : 'w-full'}`}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isLocal}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded">
        {isLocal ? 'You' : 'Remote User'}
      </div>
    </div>
  );
};