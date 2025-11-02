import React from 'react';

const VoiceAgent = () => {
  return (
    <vapi-widget
      public-key="7cf2ddd1-82f1-4182-b4fc-fd157278d5ad"
      assistant-id="f2b747df-9102-4c42-94a1-60651915d57a"
      mode="voice"
      theme="dark"
      base-bg-color="#000000"
      accent-color="#554832"
      cta-button-color="#000000"
      cta-button-text-color="#ffffff"
      border-radius="large"
      size="full"
      position="bottom-right"
      title="Start A Call"
      start-button-text="Start"
      end-button-text="End Call"
      chat-first-message="Hey, How can I help you today?"
      chat-placeholder="Type your message..."
      voice-show-transcript="true"
      consent-required="true"
      consent-title="Terms and conditions"
      consent-content="By clicking 'Agree,' and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
      consent-storage-key="vapi_widget_consent"
    />
  );
};

export default VoiceAgent;
