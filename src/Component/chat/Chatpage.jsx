import React, { useState } from "react";
import "./ChatPage.css";
// import img from "../Assets/Frame 1.png";
export default function ChatPage  () {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi User name" },
    { sender: "bot", text: "I am a bot designed and trained to help you and answer your questions" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <center>
    <div className="chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <h2 className="Chat">Chat with us</h2>
        <button className="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
        <path d="M7.69982 20.5963L6.90332 19.7998L13.2033 13.4998L6.90332 7.19982L7.69982 6.40332L13.9998 12.7033L20.2998 6.40332L21.0963 7.19982L14.7963 13.4998L21.0963 19.7998L20.2998 20.5963L13.9998 14.2963L7.69982 20.5963Z" fill="black"/>
        </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "bot" ? "bot-message" : "user-message"}`}
          >
            <div className={`message-bubble ${message.sender}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <input
          type="text"
          className="input-field"
          placeholder="Ask your questions here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage} className="btn">
          <i className="fas fa-paper-plane" id="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="1.17478" y="0.925391" width="24.15" height="24.15" rx="12.075" stroke="#765378" stroke-width="1.05"/>
            <path d="M5.90782 20.3504L23.0497 13.0004L5.90782 5.65039L5.89966 11.3671L18.1497 13.0004L5.89966 14.6337L5.90782 20.3504Z" fill="#765378"/>
          </svg>
          </i>
        </button>
      </div>
    </div>
    </center>
  );
};


