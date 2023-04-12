import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

const fetchTickers = createAsyncThunk('tickers', async (_, thunkAPI) => {
  try {
    const api = function () {
      return new Promise(function (resolve, reject) {
        socket.on('connect', function (data) {
          socket.emit('start');
        });

        socket.on('ticker', function (data) {
          resolve(data);
        });
      });
    };
    const data = await api();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const addTickers = createAsyncThunk(
  'tickers/add',
  async (credentials, thunkAPI) => {
    try {
      socket.emit('start', credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const deleteTickers = createAsyncThunk(
  'tickers/delete',
  async (ticker, thunkAPI) => {
    try {
      socket.emit('delete', ticker);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const setInterval = createAsyncThunk(
  'set/interval',

  async (interval, thunkAPI) => {
    try {
      socket.emit('set_interval', interval);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  fetchTickers,
  addTickers,
  deleteTickers,
  setInterval,
};

export default operations;
