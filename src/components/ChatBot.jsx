import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../constant';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about sorting algorithms or coding doubts.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false); 

  useEffect(() => {
    setTimeout(() => setVisible(true), 10); 
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        URL,
        {
          contents: [{ parts: [{ text: input }] }]
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no response.";
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Sorry, something went wrong!' }]);
    }

    setLoading(false);
  };

  return (
    <div
      className={`fixed top-20 right-6 w-[350px] h-[500px] bg-[#111] border border-green-700 rounded-xl z-50 shadow-lg flex flex-col transition-all duration-500 ease-in-out transform ${
        visible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}
    >
      <div className="p-3 border-b border-green-700 flex justify-between items-center">
        <h2 className="text-green-400 font-bold">AI Bot</h2>
        <button
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300); 
          }}
          className="text-white hover:text-red-500"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm text-white">
        {messages.map((msg, i) => (
          <div key={i} className={`text-${msg.sender === 'user' ? 'right' : 'left'}`}>
            <span className={`inline-block p-2 rounded-xl ${msg.sender === 'user' ? 'bg-green-700' : 'bg-gray-700'}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-gray-400 italic">Typing...</div>}
      </div>

      <div className="p-3 flex gap-2 border-t border-green-700">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask your doubt..."
          className="flex-1 px-3 py-2 rounded bg-gray-900 text-white border border-green-700"
        />
        <button onClick={handleSend} className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
