import React, { useState } from "react";

function ValidateForm({ adultOpt, childOpt, accessOpt, date, selectedTime, fname, lname, email, phone }) {

  const [error, setError] = useState("")

  function Validation() {

    const adult = parseInt(adultOpt)
    const child = parseInt(childOpt)
    const access = parseInt(accessOpt)
    const currentDate = new Date()
    const selectedDate = new Date(date)

    setError("");

    if (adult === 0 && child === 0 && access === 0) {
      setError("Guest count cannot be empty")
      return
    }

    if (adult === 0 && access === 0 && child > 0) {
      setError("Cannot have children without any adults")
      return
    }

    if (selectedTime === "") {
      setError('Please choose a time')
      return
    }

    if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
      setError("Selected date cannot be in the past")
      return
    }

    if (fname.length === 0 || lname.length === 0) {
      setError(`${fname.length === 0 ? 'First' : 'Last'} name cannot be empty`)
      return
    }

    if (fname.length < 2 || lname.length < 2) {
      setError(`${fname.length < 2 ? 'First' : 'Last'} name cannot be shorter than 2 characters`)
      return
    }

    if (!email) {
      setError('Email Address can not be empty')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (!phone) {
      setError('Phone number can not be empty')
      return
    }

    if (isNaN(phone)) {
      setError('Please enter a valid phone number')
      return
    }

    window.location.href = "/"
  }

  return (
    <>
      <div className='btn-div'>
        {error && <p className="error">{error}</p>}
        <button type="submit" onClick={Validation}><span>Book now</span></button>
        <small>Table reservation is free of charge.</small>
      </div>
    </>
  )
}

export default ValidateForm