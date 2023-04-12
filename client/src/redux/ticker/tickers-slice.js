import { createSlice } from '@reduxjs/toolkit';

import tickersOperations from './tickers-operations';

const initialState = {
  tickers: [],
  interval: 0,
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        tickersOperations.fetchTickers.fulfilled,
        (state, { payload }) => {
          return {
            ...state,
            tickers: payload.items,
            interval: payload.interval,
          };
        },
      )
      .addCase(
        tickersOperations.addTickers.fulfilled,
        (state, { payload }) => {},
      )
      .addCase(
        tickersOperations.deleteTickers.fulfilled,
        (state, { payload }) => {},
      )
      .addCase(
        tickersOperations.setInterval.fulfilled,
        (state, { payload }) => {},
      );
  },
});

export default tickersSlice.reducer;
