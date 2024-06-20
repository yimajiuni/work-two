import { render, screen } from "@testing-library/react";
import StateTutorial from "./StateTutorial";

test("renders learn react link", () => {
  render(<StateTutorial />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
