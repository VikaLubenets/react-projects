import React, { ChangeEvent, useState } from 'react';
import './ReservationForm.css';

export default function ReservationForm() {
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

  const handleReserve = () => {
    console.log('Table reserved!');
  };

  const handleCancel = () => {
    console.log('Reservation canceled!');
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <article className="regform-section">
      <h2 className="section-title">Reservation Form</h2>
      <p className="text">To book a table please fill out the form</p>
      <form className="form">
        <div className="form-line">
          <label htmlFor="address" className="form-label">
            Select Address:
          </label>
          <select
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          >
            <option value="" disabled>
              -- Select an address --
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
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-line">
          <label htmlFor="time" className="form-label">
            Select Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="form-line">
          <label htmlFor="numberOfGuests" className="form-label">
            Number of Guests:
          </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-line">
          <label htmlFor="specialInstruction" className="form-label">
            Special Instruction:
          </label>
          <textarea
            id="specialInstruction"
            name="specialInstruction"
            value={formData.specialInstruction}
            onChange={handleChange}
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
            value={formData.checkboxApproval}
            onChange={handleChange}
          />
        </div>
        <div className="form-btns">
          <button
            className="button reserve-btn"
            title="Reserve a Table"
            onClick={handleReserve}
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
  );
}
