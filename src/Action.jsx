
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await axios.get('https://chat-app-server-6nay.onrender.com/messages');
  return response.data;
});

export const addMessage = createAsyncThunk('messages/addMessage', async (message) => {
  const response = await axios.post('https://chat-app-server-6nay.onrender.com/messages', message);
  return response.data;
});
