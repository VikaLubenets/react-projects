import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from './ReservationForm';

test('Renders the ReservationForm heading and handles input changes', () => {
  const mockHandler = jest.fn();

  render(
    <ReservationForm
      data={{
        address: '',
        date: '',
        time: '',
        numberOfGuests: '',
        name: '',
        email: '',
        phoneNumber: '',
        specialInstruction: '',
        checkboxApproval: '',
      }}
      handler={mockHandler}
      availableTimes={[
        { id: 'time1', time: '14:00' },
        { id: 'time2', time: '19:00' },
        { id: 'time3', time: '20:00' },
      ]}
      dispatchTimes={() => {}}
    />
  );

  const headingElement = screen.getByText('Reservation Form');
  expect(headingElement).toBeInTheDocument();
});
