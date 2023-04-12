const getTickers = state => state.tickers.tickers;

const getInterval = state => state.tickers.interval;

const tickersSelectors = {
  getTickers,
  getInterval,
};
export default tickersSelectors;
