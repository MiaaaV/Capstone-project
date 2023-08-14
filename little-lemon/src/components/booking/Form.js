import React, { useState, useEffect } from 'react';
import './Form.css';
import './FormQuery.css';
import ValidateForm from './FormValidation';

function Form({ availableTimes, dispatchOnDateChange }) {

  const [adult, setAdult] = useState(0)
  const [child, setChild] = useState(0)
  const [access, setAccess] = useState(0)
  const [occasion, setOccasion] = useState("None")

  const [date, setDate] = useState("")

  const [time, setTime] = useState("")
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (dispatchOnDateChange !== undefined) {
      dispatchOnDateChange(newDate);
    }
  };

  // allows only one button to be pressed at a time
  const toggleTime = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter((item) => item !== time));
    } else {
      setSelectedTimes([time]);
    }
  };

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <fieldset>
          <div className="field amount">
            <h2>Guest count</h2>

            <div className='select'>
              <label htmlFor="adults">Adults: </label>
              <select id='adultOpt'
                name="adult"
                value={adult}
                onChange={e => setAdult(e.target.value)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </select>
            </div>

            <div className='select'>
              <label htmlFor="children">Children: </label>
              <select id='childOpt'
                name="child"
                value={child}
                onChange={e => setChild(e.target.value)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className='select'>
              <label htmlFor="access">Access: </label>
              <select id='accessOpt'
                name="access"
                value={access}
                onChange={e => setAccess(e.target.value)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className='field occasion'>
            <h2>Occasion</h2>

            <small>Let us know about your special occasion!</small>
            <div className='occasion-btn-div'>
              <br />
              <select name="occasion"
                placeholder='none'
                value={occasion}
                onChange={e => setOccasion(e.target.value)}>
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <h2>Select date & time</h2>
          <div className='field'>
            <input
              type="date"
              id="date"
              value={date}
              onChange={e => handleDateChange(e.target.value)} />

            <div>
              <label htmlFor='time'>Available times</label>
              <div className='select-grid'
                id='time'
                name='time'
                value={time}
                onChange={e => setTime((e.target.value))}>
                {availableTimes.map((time) => (
                  <div
                    key={time}
                    id={`available-time-button-${time.replace(":", "")}`}
                    type="button"
                    className={`option-button ${selectedTimes.includes(time) ? 'selected' : ''
                      }`} onClick={() => toggleTime(time)}>
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="field">
            <h2>Add your details</h2>

            <div className='contact-info'>
              <div className='details'>
                <label htmlFor="name">First name</label>
                <input id='f-name' type='text'
                  placeholder='Jason'
                  value={fname} onChange={e => setFname(e.target.value)}
                  required />
              </div>

              <div className='details'>
                <label htmlFor="name">Last name</label>
                <input id='l-name' type='text'
                  placeholder='Derulo'
                  value={lname} onChange={e => setLname(e.target.value)}
                  required />
              </div>

              <div className='details'>
                <label htmlFor="email">Email</label>
                <input id='f-email' type='email'
                  placeholder='jason.derulo@gmail.com'
                  value={email} onChange={e => setEmail(e.target.value)}
                  required />
              </div>

              <div className='details'>
                <label htmlFor="name">Phone</label>
                <input id='f-phone'
                  type='tel'
                  placeholder='+123 45 678 9101'
                  value={phone} onChange={e => setPhone(e.target.value)}
                  required />
              </div>

              <div id='textarea'>
                <label htmlFor="notes">Notes/special requests:</label>
                <textarea id="f-notes"
                  name="notes"
                  rows="4" cols="40"
                  value={notes} onChange={e => setNotes(e.target.value)}
                  placeholder='Outdoor seating if possible, please!'>
                </textarea>
              </div>
            </div>
          </div>

          {/*<div className='btn-div'>
            <button type='submit' onClick={Validation}>Book now </button>
            <small>Table reservation is free of charge.</small>
          </div>*/}
        </fieldset>

        <ValidateForm
          fname={fname}
          lname={lname}
          email={email}
          phone={phone}
          handleSubmit={handleSubmit} />
      </form >

    </>
  )
}

export default Form