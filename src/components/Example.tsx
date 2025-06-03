import React, { useState, useEffect, useRef } from 'react';

// Define the Message interface for type safety
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
}

// Main App component
const Example: React.FC = () => {
  // State to hold the list of messages
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hey there! How are you?', sender: 'other', timestamp: '10:00 AM' },
    { id: 2, text: 'I\'m doing great, thanks! How about you?', sender: 'user', timestamp: '10:01 AM' },
    { id: 3, text: 'I\'m good too! Just working on a new project.', sender: 'other', timestamp: '10:05 AM' },
    { id: 4, text: 'Sounds interesting! What kind of project?', sender: 'user', timestamp: '10:06 AM' },
    { id: 5, text: 'It\'s a chat application with a custom design.', sender: 'other', timestamp: '10:07 AM' },
    { id: 6, text: 'Oh, that\'s cool! I\'m building something similar.', sender: 'user', timestamp: '10:08 AM' },
    { id: 7, text: 'Let me know if you need any help!', sender: 'other', timestamp: '10:09 AM' },
    { id: 8, text: 'Will do! Thanks!', sender: 'user', timestamp: '10:10 AM' },
  ]);

  // State to hold the current message being typed
  const [newMessage, setNewMessage] = useState<string>('');
  // Ref for the messages container to enable auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to the bottom of the messages whenever they update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMsg: Message = {
        id: messages.length + 1,
        text: newMessage.trim(),
        sender: 'user', // Assuming the user is always sending messages from this interface
        timestamp: timeString,
      };
      setMessages([...messages, newMsg]);
      setNewMessage(''); // Clear the input field
    }
  };

  // Function to handle Enter key press in the input field
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent new line in textarea
      handleSendMessage();
    }
  };

  return (
    // Main container for the chat application
    <div className="flex flex-col h-screen w-full bg-[var(--color-bg-200)] font-[Inter]">
      {/* Chat Header */}
      <header className="bg-[var(--color-brand-800)] text-white p-4 shadow-md rounded-b-lg">
        <h1 className="text-xl font-semibold text-[var(--color-title-950)]">
          <span className="text-white">Chat Application</span>
        </h1>
      </header>

      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--color-fill-100)] rounded-lg m-4 shadow-inner">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 rounded-xl shadow-md
                ${message.sender === 'user'
                  ? 'bg-[var(--color-card-400)] text-[var(--color-title-950)] rounded-br-none'
                  : 'bg-[var(--color-text-300)] text-[var(--color-subtitle-900)] rounded-bl-none'
                }`}
            >
              <p className="text-sm break-words">{message.text}</p>
              <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-right' : 'text-left'} text-[var(--color-subtitle-900)] opacity-80`}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
        {/* Empty div to scroll to the bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input Area */}
      <div className="p-4 bg-[var(--color-second-700)] flex items-center rounded-t-lg">
        <textarea
          className="flex-1 p-3 rounded-lg border-2 border-[var(--color-border-50)] focus:outline-none focus:border-[var(--color-card-400)] resize-none
                     bg-white text-[var(--color-title-950)] placeholder-[var(--color-subtitle-900)] h-12 overflow-hidden"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          rows={1} // Start with one row, will expand with content if resize-none was not used
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-6 py-3 bg-[var(--color-card-400)] text-white font-semibold rounded-lg shadow-md
                     hover:bg-[var(--color-text-300)] transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-card-400)] focus:ring-opacity-75"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Example;
