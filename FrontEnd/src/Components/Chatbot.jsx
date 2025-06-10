import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am GoRan Bot. Ask me anything about our agency, services, or just say hi!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const reply = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (!reply.ok) throw new Error('Network response was not ok');
      
      const data = await reply.json();
      const botMessage = { from: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [...prev, { 
        from: 'bot', 
        text: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
      setInput('');
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

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-8 right-8 z-50 p-5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg hover:bg-white/20 transition-all"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>

      {/* Chatbot Panel with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 w-[420px] h-[600px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <div>
                <h2 className="text-white font-semibold text-xl">GoRan Bot</h2>
                <p className="text-white/60 text-sm">AI Assistant</p>
              </div>
              <button 
                onClick={handleToggle}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="text-white/80 w-5 h-5" />
              </button>
            </div>

            {/* Messages with hidden scrollbar */}
            <div className="flex-1 p-6 overflow-y-auto text-white space-y-4 scrollbar-hide">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`p-4 rounded-2xl max-w-[80%] ${
                      msg.from === 'bot' 
                        ? 'bg-white/10 rounded-bl-sm' 
                        : 'bg-purple-500/30 rounded-br-sm'
                    }`}
                  >
                    <p className="text-[15px] leading-relaxed whitespace-pre-line">
                      {formatMessage(msg.text)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - Updated without speech button */}
            <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4 border-t border-white/10 bg-white/5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder={isLoading ? "Thinking..." : "Type your message..."}
                className="flex-1 p-3 rounded-xl bg-white/10 text-white placeholder-white/50 outline-none focus:bg-white/15 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-5 py-3 bg-purple-500/80 text-white rounded-xl hover:bg-purple-500/90 disabled:opacity-50 transition-colors font-medium"
                disabled={isLoading}
              >
                Send
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