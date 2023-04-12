import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as reduxHooks from 'react-redux';
jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('SetInteravalForm', () => {
  it('select options', () => {
    const { selectOptions, getByRole, getByText } = render(
      <select>
        <option value={2000}>2000</option>
        <option value={5000}>5000</option>
        <option value={10000}>10000</option>
      </select>,
    );

    userEvent.selectOptions(getByRole('combobox'), '2000');
    expect(getByText(2000).selected).toBeTruthy();

    userEvent.selectOptions(getByRole('combobox'), '5000');
    expect(getByText(5000).selected).toBeTruthy();
    expect(getByText(2000).selected).toBeFalsy();
  });
});
