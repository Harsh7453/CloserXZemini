import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, Monitor, MessageSquare, Settings, Maximize2 } from 'lucide-react';
import { ParticleBackground } from '../components/Particles/ParticleBackground';
import { VideoControls } from '../components/Consultation/VideoControls';
import { LiveTranscription } from '../components/Consultation/LiveTranscription';
import { ChatPanel } from '../components/Consultation/ChatPanel';

export const ConsultationRoom: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    initializeMedia();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const initializeMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsVideoOn(videoTrack.enabled);
    }
  };

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setIsMuted(!audioTrack.enabled);
    }
  };

  const toggleScreenShare = async () => {
    try {
      if (!isScreenSharing) {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true
        });
        if (videoRef.current) {
          videoRef.current.srcObject = screenStream;
        }
        setIsScreenSharing(true);
        
        // Listen for when user stops screen sharing
        screenStream.getVideoTracks()[0].onended = () => {
          if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
          }
          setIsScreenSharing(false);
        };
      } else {
        if (videoRef.current && stream) {
          videoRef.current.srcObject = stream;
        }
        setIsScreenSharing(false);
      }
    } catch (error) {
      console.error('Error sharing screen:', error);
      setIsScreenSharing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[calc(100vh-8rem)]">
          {/* Main Content */}
          <div className={`flex-1 flex flex-col ${showChat ? 'mr-4' : ''}`}>
            {/* Video Area */}
            <div className="relative flex-1 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted={isMuted}
                />
              </div>

              {/* Floating Controls */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleFullscreen}
                  className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-black/60 transition-all"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-black/60 transition-all"
                >
                  <Settings className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Bottom Controls */}
              <VideoControls
                isVideoOn={isVideoOn}
                setIsVideoOn={toggleVideo}
                isMuted={isMuted}
                setIsMuted={toggleAudio}
                isScreenSharing={isScreenSharing}
                setIsScreenSharing={toggleScreenShare}
              />
            </div>

            {/* Live Transcription */}
            <LiveTranscription />
          </div>

          {/* Chat Panel */}
          {showChat && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-96"
            >
              <ChatPanel onClose={() => setShowChat(false)} />
            </motion.div>
          )}

          {/* Chat Toggle */}
          {!showChat && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowChat(true)}
              className="fixed right-8 bottom-8 p-4 bg-primary rounded-full shadow-lg
                       hover:bg-primary/90 transition-all"
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};