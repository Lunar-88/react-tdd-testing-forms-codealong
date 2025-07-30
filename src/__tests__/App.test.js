
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

test("checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", async () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  await userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", async () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  await userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
  await userEvent.click(addPepperoni);
  expect(addPepperoni).not.toBeChecked();
});

test("select element changes value when user selects a size", async () => {
  render(<App />);
  const sizeSelect = screen.getByRole("combobox", { name: /select size/i });
  expect(sizeSelect).toHaveValue("");
  await userEvent.selectOptions(sizeSelect, "Large");
  expect(sizeSelect).toHaveValue("Large");
});

test('"Your Selection" updates when pepperoni is selected', async () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  await userEvent.click(addPepperoni);
  
  // ✅ Use test ID to target correct element
  const selectionText = screen.getByTestId("selection-text");
  expect(selectionText).toHaveTextContent(/pepperoni/i);
});

test("user can type into contact info text box", async () => {
  render(<App />);
  const contactInput = screen.getByRole("textbox", { name: /contact info/i });
  await userEvent.type(contactInput, "test@example.com");
  expect(contactInput).toHaveValue("test@example.com");
});

test("submit button is in the document and clickable", async () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /submit order/i });
  expect(submitButton).toBeInTheDocument();
  await userEvent.click(submitButton);
});
