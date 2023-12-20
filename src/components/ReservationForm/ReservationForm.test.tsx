import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from './ReservationForm';
import { BrowserRouter } from 'react-router-dom';

test('Renders the ReservationForm heading and handles input changes', () => {
  const mockHandler = jest.fn();

  render(
    <BrowserRouter>
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
          checkboxApproval: false,
        }}
        handler={mockHandler}
        availableTimes={[
          { id: 'time1', time: '14:00' },
          { id: 'time2', time: '19:00' },
          { id: 'time3', time: '20:00' },
        ]}
        dispatchTimes={() => {}}
      />
    </BrowserRouter>
  );

  const headingElement = screen.getByText('Reservation Form');
  expect(headingElement).toBeInTheDocument();

  const addressInput = screen.getByLabelText('Select Address:');
  fireEvent.change(addressInput, { target: { value: 'address1' } });
});
