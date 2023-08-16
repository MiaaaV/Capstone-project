import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);

    if (dispatchOnDateChange) {
      dispatchOnDateChange(today);
    }
  }, [dispatchOnDateChange]);

  const handleDateChange = (newDate) => {
    setDate(newDate);

    if (dispatchOnDateChange) {
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
    localStorage.setItem('confirmToast', 'true');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <fieldset>
          <div className='vw-helper grid-helper'>
            <div className="field">
              <h2>Guest count</h2>

              <div>
                <label htmlFor="adultOpt">Adults: </label>
                <select
                  id='adultOpt'
                  name="adult"
                  value={adult}
                  onChange={e => setAdult(e.target.value)}
                  required>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6 or more</option>
                </select>
              </div>

              <div>
                <label htmlFor="childOpt">Children: </label>
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

              <div>
                <label htmlFor="accessOpt">Access: </label>
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

            <div className='field'>
              <h2>Occasion</h2>

              <p className='occasion-p'>Let us know about your special occasion!</p>
              <div className='occasion'>
                {/*<FontAwesomeIcon icon={faChampagneGlasses} />*/}
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
          </div>
        </fieldset>

        <fieldset>
          <div className='vw-helper datetime-div'>
            <h2>Select date & time</h2>

            <div className='date'>
              <input
                type="date"
                id="date"
                value={date}
                onChange={e => handleDateChange(e.target.value)} />
            </div>

            <div className='datetime'>
              {date && (
                <>
                  <label htmlFor='time'>Available times for&nbsp;
                    <output>
                      {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </output>
                  </label>
                  <div className='option-grid'
                    id='time'
                    name='time'
                    value={time}
                    onChange={e => setTime((e.target.value))}>
                    {availableTimes.map((time) => (
                      <div
                        key={time}
                        id={`available-time-button-${time.replace(":", "")}`}
                        type="button"
                        className={`option-button ${selectedTimes.includes(time) ? 'selected' : ''}`}
                        onClick={() => toggleTime(time)}>
                        {time}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

        </fieldset>

        <fieldset>
          <div className='vw-helper'>
            <div className='contact-div'>
              <h2>Add your details</h2>

              <div className='contact-info'>
                <div className='details'>
                  <label htmlFor="fname">First name</label>
                  <input id='fname' type='text'
                    placeholder='Jason'
                    value={fname} onChange={e => setFname(e.target.value)}
                    required />
                </div>

                <div className='details'>
                  <label htmlFor="lname">Last name</label>
                  <input id='lname' type='text'
                    placeholder='Derulo'
                    value={lname} onChange={e => setLname(e.target.value)}
                    required />
                </div>

                <div className='details'>
                  <label htmlFor="email">Email</label>
                  <input id='email' type='email'
                    placeholder='jason.derulo@gmail.com'
                    value={email} onChange={e => setEmail(e.target.value)}
                    required />
                </div>

                <div className='details'>
                  <label htmlFor="phone">Phone</label>
                  <input id='phone'
                    type='tel'
                    placeholder='+123 45 678 9101'
                    value={phone} onChange={e => setPhone(e.target.value)}
                    required />
                </div>
              </div>
            </div>

            <div className='contact-div'>
              <div className='textarea'>
                <label htmlFor="notes">Notes/special requests:</label>
                <textarea id="notes"
                  name="notes"
                  rows="4" cols="40"
                  value={notes} onChange={e => setNotes(e.target.value)}
                  placeholder='Outdoor seating if possible, please!'>
                </textarea>
              </div>
            </div>
          </div>
        </fieldset>

        <ValidateForm
          adultOpt={adult}
          childOpt={child}
          accessOpt={access}
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