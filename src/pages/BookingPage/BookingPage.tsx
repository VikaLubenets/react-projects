import React, { ChangeEvent, useReducer, useState } from 'react';
import Header from '../../components/Header/Header';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import { initialTimesState, timesReducer } from './reducer';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    address: '',
    date: '',
    time: '',
    numberOfGuests: '',
    name: '',
    email: '',
    phoneNumber: '',
    specialInstruction: '',
    checkboxApproval: '',
  });

  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    initialTimesState
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <ReservationForm
          handler={handleChange}
          data={formData}
          availableTimes={availableTimes}
          dispatchTimes={dispatchTimes}
        />
      </main>
    </React.Fragment>
  );
}
