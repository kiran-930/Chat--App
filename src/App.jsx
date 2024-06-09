// src/components/App.js
import React from 'react';
import Chat from '../src/components/Chat';
import './App.css';

const App = () => {
  return (
    <div className="app">
       <h1 className='text-'>ChatCascade</h1>
      <div className="chat-container mt-2">
        <Chat user="user1" /> 
        <Chat user="user2" />
      </div>
    </div>
  );
};

export default App;
