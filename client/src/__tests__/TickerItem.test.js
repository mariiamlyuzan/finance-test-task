import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TickerItem } from '../componenets/TickerItem';
import { tickersOperations } from '../redux/ticker';
import * as reduxHooks from 'react-redux';
jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('TickerItem', () => {
  it('should change the text of the button when clicked', async () => {
    render(<TickerItem />);

    const copyButton = screen.getByRole('button', { name: 'show less' });
    expect(copyButton).toBeInTheDocument();

    await userEvent.click(copyButton);

    const copiedButton = screen.getByRole('button', { name: 'show more' });
    expect(copiedButton).toBeInTheDocument();
  });

  it('should create TickerItem', () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    const component = render(
      <TickerItem
        ticker="AAPL"
        exchange="NASDAQ"
        price="244.12"
        change="77.83"
        change_percent="0.02"
        dividend="0.59"
        yield="0.50"
        last_trade_tim="2023-04-11T17:30:12.000Z"
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should dispatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedDeleteTicker = jest.spyOn(tickersOperations, 'deleteTickers');

    render(
      <TickerItem
        ticker="AAPL"
        exchange="NASDAQ"
        price="244.12"
        change="77.83"
        change_percent="0.02"
        dividend="0.59"
        yield="0.50"
        last_trade_tim="2023-04-11T17:30:12.000Z"
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /button-name/i }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedDeleteTicker).toHaveBeenCalledWith('AAPL');
  });
});
