import Form from '../booking/Form';
import { fetchAPI } from '../booking/API';
import './styles/Reservation.css';
import React, { useReducer } from "react";


function ReservationsPage() {

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <section className='res-section'>
        <div className='res-container'>
          <h1>Table reservation</h1>
        </div>

        <Form
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange} />
      </section>
    </>
  )
}

export default ReservationsPage;