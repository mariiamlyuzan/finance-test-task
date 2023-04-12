import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TickersList } from '../componenets/TickersList';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const tickers = [
  {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '244.12',
    change: '77.83',
    change_percent: '0.02',
    dividend: '0.59',
    yield: '0.50',
    last_trade_time: '2023-04-11T17:30:12.000Z',
  },
  {
    ticker: 'GOOGL',
    exchange: 'NASDAQ',
    price: '124.14',
    change: '11.04',
    change_percent: '0.31',
    dividend: '0.23',
    yield: '1.55',
    last_trade_time: '2023-04-11T17:30:12.000Z',
  },
];

describe('TickersList', () => {
  it('should create TickersList with empty tickers', () => {
    useSelector.mockReturnValue([]);
    const component = render(<TickersList />);
    expect(component).toMatchSnapshot();
  });

  it('should create TickersList with tickers', () => {
    useSelector.mockReturnValue(tickers);
    const component = render(<TickersList />);
    expect(component).toMatchSnapshot();
  });
});

describe('events', () => {
  it('render search input', () => {
    const { container } = render(<input type="text" />);
    const inputEl = container.firstChild;
    expect(inputEl).toBeInTheDocument();
    userEvent.type(inputEl, 'TSLA');
    expect(inputEl.value).toBe('TSLA');
  });
  it('toggle onClick', () => {
    const { container } = render(<button type="button" />);
    const buttonToggle = container.firstChild;
    userEvent.click(buttonToggle);
    expect(buttonToggle).toHaveAttribute('type');
  });
});
