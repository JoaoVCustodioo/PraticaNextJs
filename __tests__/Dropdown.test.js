import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

test("calls onChange when an option is selected", () => {
  const options = ["audio", "gaming", "mobile", "tv"];
  const onChange = jest.fn();

  render(<Dropdown options={options} onChange={onChange} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "audio" },
  });

  expect(onChange).toHaveBeenCalledWith(
    expect.objectContaining({ target: { value: "audio" } })
  );
});
