import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  test("renders correctly", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );
    const screeningBtn = screen.getByRole("button", {
      name: /Go to Depression Screening Test/i,
    });
    const resourcesBtn = screen.getAllByRole("button", {
      name: /Mental Health Resources/i,
    });

    // Assert
    expect(screeningBtn).toBeInTheDocument();
    expect(resourcesBtn[0]).toBeInTheDocument();
  });
});
