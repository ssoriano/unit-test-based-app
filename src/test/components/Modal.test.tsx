import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { renderWithUser } from "../utils";
import { Scenario } from "../../components/Scenario";

describe("Modal", () => {
  const mockClose = vi.fn();

  beforeAll(() => {
    mockClose.mockReset();
  });

  afterEach(() => {
    mockClose.mockClear();
  });

  test("renders modal with expected controls", () => {
    render(<Scenario />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  describe("when passed onClose handler", () => {
    test("calls onClose action when pressing the ESC key", () => {
      render(<Scenario onClose={mockClose} />);
      fireEvent.keyDown(screen.getByRole("dialog"), {
        key: "Escape",
        code: "Escape",
      });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("renders dismissible button that calls onClose action when clicked", async () => {
      const { user } = renderWithUser(<Scenario onClose={mockClose} />);
      const closeButton = screen.getByRole("button", { name: /close/i });
      await user.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("calls onClick action when clicking outside of the modal", async () => {
      const { user } = renderWithUser(
        <Scenario data-testid="mockId" onClose={mockClose} />,
      );
      const scrimElement = screen.getByTestId("mockId");
      await user.click(scrimElement);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
