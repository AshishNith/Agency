import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PopupButton } from 'react-calendly';

const TypingIndicator = () => (
  <div className="flex items-center space-x-2 p-4 rounded-2xl bg-white/10 rounded-bl-sm max-w-[80%]">
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
    </div>
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am GoRan Bot. Ask me anything about our agency, services, or just say hi!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSubmit = async (e, action) => {
    if (e) e.preventDefault();
    if (!input.trim() && !action) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Add typing indicator immediately
      setMessages(prev => [...prev, { from: 'bot', isTyping: true }]);

      const reply = await fetch('https://agency-ikgd.vercel.app/api/chat', {
      // const reply = await fetch('http://localhost:5000/api/chat', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (!reply.ok) throw new Error('Network response was not ok');
      
      const data = await reply.json();
      // Remove typing indicator and add actual response
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      setMessages(prev => [...prev, { 
        from: 'bot', 
        text: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const formatMessage = (text) => {
    const formattedText = text.split('\n').map((line, i) => {
      const boldPattern = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldPattern.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(<span key={`${i}-${lastIndex}`}>{line.slice(lastIndex, match.index)}</span>);
        }
        parts.push(<span key={`${i}-${match.index}`} className="font-bold">{match[1]}</span>);
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(<span key={`${i}-${lastIndex}`}>{line.slice(lastIndex)}</span>);
      }
      return <span key={i} className="block">{parts.length > 0 ? parts : line}</span>;
    });

    return formattedText;
  };

  // Add quick replies for common actions
  const quickReplies = [
    { text: "Schedule a Meeting", action: "schedule" },
    { text: "View Services", action: "services" },
    { text: "Get Pricing", action: "pricing" },
    { text: "Contact Team", action: "contact" }
  ];

  // Updated initial message with quick replies
  const initialMessage = {
    from: 'bot',
    text: "Hello! I'm GoRan's AI assistant. How can I help you today? You can ask me about our services, or schedule a meeting directly.",
    showQuickReplies: true
  };

  // const [messages, setMessages] = useState([initialMessage]);

  // Handle quick reply clicks
  const handleQuickReply = (action) => {
    switch(action) {
      case 'schedule':
        setMessages(prev => [...prev, 
          { from: 'user', text: "I'd like to schedule a meeting" },
          { 
            from: 'bot', 
            text: "Great! You can schedule a meeting directly using the button below:",
            showCalendly: true 
          }
        ]);
        break;
      // Add other cases for different quick replies
      default:
        handleSubmit({ preventDefault: () => {} }, action);
    }
  };

  // Update message rendering to include Calendly button
  const renderMessage = (msg, index) => {
    return (
      <div key={index} className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
        {msg.isTyping ? (
          <TypingIndicator />
        ) : (
          <div className={`flex flex-col gap-3 max-w-[85%] sm:max-w-[80%]`}>
            <div className={`p-3 sm:p-4 rounded-2xl ${
              msg.from === 'bot' 
                ? 'bg-white/10 rounded-bl-sm' 
                : 'bg-purple-500/30 rounded-br-sm'
            }`}>
              <p className="text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">
                {formatMessage(msg.text)}
              </p>
            </div>
            
            {msg.showQuickReplies && (
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(reply.action)}
                    className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {msg.showCalendly && (
              <PopupButton
                url="https://calendly.com/ranjanashish9992/strategy-call-build-your-brand-online"
                rootElement={document.getElementById('root')}
                text="Schedule Meeting →"
                className="px-4 py-2 bg-purple-500/80 text-white text-sm rounded-xl hover:bg-purple-500/90 transition-all w-fit"
              />
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Floating Chat Button - Adjusted for mobile */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 p-3 sm:p-5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg hover:bg-white/20 transition-all"
      >
        <MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Chatbot Panel - Made responsive */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 sm:bottom-24 sm:right-8 w-full sm:w-[420px] h-[80vh] sm:h-[600px] bg-black/40 backdrop-blur-xl border-t sm:border border-white/10 sm:rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-white/5">
              <div>
                <h2 className="text-white font-semibold text-lg sm:text-xl">GoRan Bot</h2>
                <p className="text-white/60 text-xs sm:text-sm">AI Assistant</p>
              </div>
              <button 
                onClick={handleToggle}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="text-white/80 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto text-white space-y-3 sm:space-y-4 scrollbar-hide">
              {messages.map((msg, index) => renderMessage(msg, index))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-t border-white/10 bg-white/5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder={isLoading ? "Thinking..." : "Type your message..."}
                className="flex-1 p-2.5 sm:p-3 text-sm rounded-xl bg-white/10 text-white placeholder-white/50 outline-none focus:bg-white/15 transition-colors disabled:opacity-50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-purple-500/80 text-white text-sm rounded-xl hover:bg-purple-500/90 disabled:opacity-50 transition-all transform active:scale-95 flex items-center gap-2"
              >
                {isLoading ? (
                  <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : 'Send'}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add global styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Chatbot;