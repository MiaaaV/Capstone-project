import React from "react";

function ValidateForm({ adultOpt, childOpt, accessOpt, fname, lname, email, phone }) {

  function Validation() {

    const adult = parseInt(adultOpt);
    const child = parseInt(childOpt);
    const access = parseInt(accessOpt);

    if (adult === 0 && child === 0 && access === 0) {
      alert("Guest count cannot be empty!");
      return;
    }

    if (adult === 0 && child > 0) {
      alert("Cannot have children without any adults");
      return;
    }

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

    if (!phone) {
      alert('Phone number can not be empty')
      return
    }

    if (isNaN(phone)) {
      alert('Please enter a valid phone number')
      return
    }

    window.location.href = "/"
  }

  return (
    <>
      <div className='btn-div'>
        <button type="submit" onClick={Validation}><span>Book now</span></button>
        <small>Table reservation is free of charge.</small>
      </div>
    </>
  )
}

export default ValidateForm