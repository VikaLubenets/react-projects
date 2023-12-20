/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { submitAPI } from '../../pages/BookingPage/fakeAPI';
import './ReservationForm.css';
import { ReservationFormProps } from './types';

export default function ReservationForm({
  data,
  handler,
  availableTimes,
  dispatchTimes,
}: ReservationFormProps) {
  const {
    address,
    date,
    time,
    numberOfGuests,
    name,
    email,
    phoneNumber,
    specialInstruction,
    checkboxApproval,
  } = data;
  const [showError, setShowError] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  useEffect(() => {
    if (date) {
      const parsedDate = new Date(date);
      const formattedDate = `${parsedDate.getFullYear()}-${
        parsedDate.getMonth() + 1
      }-${parsedDate.getDate()}`;

      dispatchTimes({ type: 'FETCH_TIMES', date: formattedDate });
    }
  }, [date, dispatchTimes]);

  const handleReserve = async (e: React.FormEvent<HTMLFormElement>) => {
    if (
      address &&
      date &&
      time &&
      numberOfGuests &&
      name &&
      email &&
      phoneNumber &&
      checkboxApproval
    ) {
      try {
        await submitAPI(data);
        dispatchTimes({ type: 'UPDATE_TIMES', selectedTime: time });
        setShowError(false);
        setReservationSuccess(true);
      } catch (error) {
        console.error('Error submitting reservation:', error);
        setShowError(true);
        setReservationSuccess(false);
      }
    } else {
      e.preventDefault();
      setShowError(true);
      setReservationSuccess(false);
    }
  };

  const handleCancel = () => {
    console.log('Reservation canceled!');
  };

  return (
    <div>
      {reservationSuccess ? (
        <div className="success-notification">
          Reservation successful! Thank you!
        </div>
      ) : (
        <article className="regform-section">
          <h2 className="section-title">Reservation Form</h2>
          <p className="text">To book a table please fill out the form</p>
          <form className="form" onSubmit={handleReserve}>
            <div className="form-line">
              <label htmlFor="address" className="form-label">
                Select Address:
              </label>
              <select
                id="address"
                name="address"
                value={address}
                onChange={handler}
              >
                <option value="" disabled>
                  Select an address
                </option>
                <option value="address1">Main Avenue 7</option>
                <option value="address2">Road Street 19</option>
                <option value="address3">St James street 5</option>
              </select>
            </div>
            <div className="form-line">
              <label htmlFor="date" className="form-label">
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handler}
              />
            </div>
            <div className="form-line">
              <label htmlFor="time" className="form-label">
                Select Time:
              </label>
              <select id="time" name="time" value={time} onChange={handler}>
                <option value="" disabled>
                  Select available time slot
                </option>
                {date &&
                  availableTimes.map((bookingTime) => (
                    <option key={bookingTime.id} value={bookingTime.id}>
                      {bookingTime.time}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-line">
              <label htmlFor="numberOfGuests" className="form-label">
                Number of Guests:
              </label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={numberOfGuests}
                onChange={handler}
              />
            </div>
            <div className="form-line">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handler}
              />
            </div>
            <div className="form-line">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handler}
              />
            </div>
            <div className="form-line">
              <label htmlFor="phoneNumber" className="form-label">
                Phone number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handler}
              />
            </div>
            <div className="form-line">
              <label htmlFor="specialInstruction" className="form-label">
                Special Instruction:
              </label>
              <textarea
                id="specialInstruction"
                name="specialInstruction"
                value={specialInstruction}
                onChange={handler}
              />
            </div>
            <div className="form-line">
              <label htmlFor="checkboxApproval">
                I agree with the Terms and Condition, and Privacy Policy
              </label>
              <input
                type={'checkbox'}
                id="checkboxApproval"
                name="checkboxApproval"
                checked={checkboxApproval}
                onChange={(e) => handler(e)}
              />
            </div>
            <div
              className="error-validation"
              style={{ display: showError ? 'block' : 'none' }}
            >
              Please fill in all required fields.
            </div>
            <div className="form-btns">
              <button
                className="button reserve-btn"
                title="Reserve a Table"
                type="submit"
              >
                Reserve
              </button>
              <button
                className="button cancel-btn"
                title="Cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </article>
      )}
    </div>
  );
}
