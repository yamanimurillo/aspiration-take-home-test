import { render, screen } from '@testing-library/react';
import CustomInput from '../components/app/custom-input.styles';

describe("Custom input component", () => {
  it("should render input text", async() => {
    render(<CustomInput></CustomInput>);
    const input = await screen.findByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});