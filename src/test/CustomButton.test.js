import { render, screen } from '@testing-library/react';
import CustomButton from '../components/app/custom-button.styles';

describe("Custom button component", () => {
  it("should render button", async() => {
    render(<CustomButton>Search</CustomButton>);
    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });
});