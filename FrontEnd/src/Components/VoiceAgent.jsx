import React, { useEffect } from 'react';

const VoiceAgent = () => {
  useEffect(() => {
    // Ensure the widget is properly initialized after component mount
    if (window.ElevenLabsConvai) {
      window.ElevenLabsConvai.init();
    }
  }, []);

  return (
    <div className="fixed bottom-20 right-4 sm:right-8 z-40">
      <elevenlabs-convai 
        agent-id="agent_1301k2z0v0nte2cv8pvgg08m80sp"
        className="voice-agent-widget"
      />
      <style jsx>{`
        .voice-agent-widget {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default VoiceAgent;
