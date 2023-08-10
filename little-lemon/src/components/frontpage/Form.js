import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Form.css';

function Form() {

  // Amount of guests
  const [adult, setAdult] = useState(0)
  const [child, setChild] = useState(0)
  const [access, setAccess] = useState(0)

  // Occasion
  const [occasion, setOccasion] = useState("None")

  // Times
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
  ];

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Details
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  // Form submit
  const [formData, setFormData] = useState({});
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <fieldset>
          <div className="field amount">
            <h2>Guest count</h2>

            <div className='select custom-select'>
              <label htmlFor="adults">Adults: </label>
              <select name="adult" value={adult}
                onChange={e => setAdult(e.target.value)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>

            <div className='select custom-select'>
              <label htmlFor="children">Children: </label>
              <select name="child" value={child} onChange={e => setChild(e.target.value)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className='select custom-select'>
              <label htmlFor="access">Access: </label>
              <select name="access" value={access} onChange={e => setAccess(e.target.value)}>
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
            <div>
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
            <input type="date" id="date" />

            <div className="select-grid">
              <small>Our kitchen closes at <strong>10:00 PM</strong></small>
              {options.map((option) => (
                <button
                  key={option}
                  className={`option-button ${selectedOptions.includes(option) ? 'selected' : ''
                    }`}
                  onClick={() => toggleOption(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
          <small>Arrivals within 30 minutes or reservation is auto-canceled, and the table opens.</small>
        </fieldset>

        <fieldset>
          <div className="field">
            <h2>Add your details</h2>

            <div className='contact-info'>
              <div className='details'>
                <label htmlFor="name" value={name}>Name</label>
                <input id='f-name' type='text' placeholder='Jason Derulo' value={name} onChange={e => setName(e.target.value)} />
              </div>

              <div className='details'>
                <label htmlFor="email">Email</label>
                <input id='f-email' type='email' placeholder='jason.derulo@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div className='details'>
                <label htmlFor="name">Phone</label>
                <input id='f-phone'
                  type='tel'
                  placeholder='+123 45 678 9101'
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="notes">Notes/special requests:</label>
            <textarea id="f-notes"
              name="notes"
              rows="4" cols="40"
              value={notes} onChange={e => setNotes(e.target.value)}
              placeholder='Outdoor seating if possible, please!'>
            </textarea>
          </div>

          <div className='btn-div'>
            <Link to="/confirmation"><input id='form-btn' type='submit' value="Book now" /></Link>
            <small>Table reservation is free of charge.</small>
          </div>
        </fieldset>

      </form >
      <output><b>test output:</b><br />
        1. {adult},{child},{access},{occasion} <br />
        2.  <br />
        3. {name},{email},{phone}<br />
        4. {notes}
      </output>
    </>
  )
}

export default Form