
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, addMessage } from '../Action';
const Chat = ({ user }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const sendMessage = () => {
    const message = { text: input, user };
    dispatch(addMessage(message));
    setInput('');
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === user ? 'sent' : 'received'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='btn btn-primary mt-2' onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;