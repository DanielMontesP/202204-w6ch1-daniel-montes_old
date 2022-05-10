import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Given a component Todo", () => {
  describe("When asked to render", () => {
    test("Render component Todo with button with text 'Add'", () => {
      const expectedValue = "Add";
      render(<Todo id="7778" name="ISDI Coders" done="yes" />);
      const linkElement = screen.getByText(expectedValue);
      expect(linkElement).toBeInTheDocument();
    });

    describe("When it receives name=ISDI Coders", () => {
      test("Render component Todo with a property name=ISDI Coders", () => {
        const expectedValue = "7778 -ISDI Coders";
        render(<Todo id="7778" name="ISDI Coders" done="yes" />);
        const linkElement = screen.getByText(expectedValue);
        expect(linkElement).toBeInTheDocument();
      });
    });

    describe("When asked to render component", () => {
      test("Render component Todo with a button with text='Delete'", () => {
        const onClick = jest.fn();
        render(<button onClick={onClick} />);
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(onClick).toHaveBeenCalled();
      });
    });
  });
});
