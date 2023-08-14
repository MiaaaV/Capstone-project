import { render, fireEvent, waitFor } from '@testing-library/react';
import Form from './Form';


test("Selecting and displaying correct format for date and time", async () => {
  const availableTimes = ['19:00'];
  const { container } = render(<Form availableTimes={availableTimes} />);

  const dateInput = container.querySelector('#date');
  fireEvent.change(dateInput, { target: { value: '2023-08-10' } });

  await waitFor(() => {
    expect(dateInput).toHaveValue('2023-08-10');
  });

  await waitFor(() => {
    const availableTimeButton = container.querySelector('#available-time-button-1900');
    fireEvent.click(availableTimeButton);
  });

  await waitFor(() => {
    const availableTimeButton = container.querySelector(
      "#available-time-button-1900"
    );
    expect(availableTimeButton).toHaveClass('selected');
  });
});