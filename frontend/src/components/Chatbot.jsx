import { useState } from 'react';
import axios from 'axios';
import '../styles/components/chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:8000/copywriting', {
        prompt: input,
        content_type: 'chat_response'
      });
      const botMessage = { sender: 'bot', text: response.data.content };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong!' };
      setMessages([...messages, userMessage, errorMessage]);
    }
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about loans, accounts, or more..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;