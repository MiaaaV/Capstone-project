import Form from './Form';
import './styles/Reservation.css';
import React from "react";

function ReservationsPage() {

  return (
    <>
      <section className='res-section'>
        <div className='res-container'>
          <div className='res-content'>
            <h1>Table reservation</h1>

            <p>Please fill in the required fields below.</p>
          </div>
        </div>

        <Form />
      </section>
    </>
  )
}

export default ReservationsPage;