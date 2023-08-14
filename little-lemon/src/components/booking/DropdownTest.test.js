import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/user-event';
import Form from './Form';

test("Selecting an option updates the state for adults", async () => {
  const availableTimes = ['19:00'];
  const { container } = render(<Form availableTimes={availableTimes} />);
  const optionNo = Math.floor(Math.random() * 7);

  const selectElement = container.querySelector("#adultOpt");
  fireEvent.change(selectElement, { target: { value: String(optionNo) } });

  await waitFor(() => {
    expect(selectElement.value).toBe(String(optionNo));
  });
});

test("Selecting an option updates the state for children", async () => {
  const availableTimes = ['19:00'];
  const { container } = render(<Form availableTimes={availableTimes} />);
  const optionNo = Math.floor(Math.random() * 6);

  const selectElement = container.querySelector("#childOpt");
  fireEvent.change(selectElement, { target: { value: String(optionNo) } });

  await waitFor(() => {
    expect(selectElement.value).toBe(String(optionNo));
  });
});

test("Selecting an option updates the state for access", async () => {
  const availableTimes = ['19:00'];
  const { container } = render(<Form availableTimes={availableTimes} />);
  const optionNo = Math.floor(Math.random() * 6);

  const selectElement = container.querySelector("#accessOpt");
  fireEvent.change(selectElement, { target: { value: String(optionNo) } });

  await waitFor(() => {
    expect(selectElement.value).toBe(String(optionNo));
  });
});


/*test("Selecting an option for adult updates the state", () => {
  const { container } = render(<Form />);
  const optionNo = Math.floor(Math.random() * 7);

  const selectElement = container.querySelector("#adultOpt");
  fireEvent.change(selectElement, { target: { value: String(optionNo) } });

  console.log(optionNo)
  expect(selectElement.value).toBe(String(optionNo));
});

test("Selecting an option for child updates the state", () => {
  const { container } = render(<Form />);
  const optionNo = Math.floor(Math.random() * 6);

  const selectElement = container.querySelector("#childOpt");
  fireEvent.change(selectElement, { target: { value: String(optionNo) } });

  console.log(optionNo)
  expect(selectElement.value).toBe(String(optionNo));
});

test("Selecting an option for accessibility updates the state", () => {
  const { container } = render(<Form />);
  const optionNo = Math.floor(Math.random() * 6);

  const selectElement = container.querySelector("#accessOpt");
  fireEvent.change(selectElement, { target: { value: String(optionNo) } });

  console.log(optionNo)
  expect(selectElement.value).toBe(String(optionNo));
}); */