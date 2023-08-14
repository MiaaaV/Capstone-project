import React from "react";

function ValidateForm({ fname, lname, email, phone }) {

  function Validation() {
    if (fname.length === 0 || lname.length === 0) {
      alert(`${fname.length === 0 ? 'First' : 'Last'} name cannot be empty`);
      return;
    }

    if (fname.length < 2 || lname.length < 2) {
      alert(`${fname.length < 2 ? 'First' : 'Last'} name cannot be shorter than 2 characters`);
      return;
    }

    if (!email) {
      alert('Email Address can not be empty')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (isNaN(phone)) {
      alert('Please enter a valid phone number')
      return
    }

    alert('Form is valid')
    window.location.href = "/confirmation"
  }

  return (
    <>
      <div className='btn-div'>
        <button type="submit" onClick={Validation}>Book now (validated)</button>
        <small>Table reservation is free of charge.</small>
      </div>
    </>
  )
}

export default ValidateForm