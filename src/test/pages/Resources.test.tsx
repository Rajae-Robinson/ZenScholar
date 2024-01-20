import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Resources from "../../pages/Resources";

describe("Resources Page", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>,
    );

    // should have Mental Health Resources title
    expect(screen.getByText("Mental Health Resources")).toBeInTheDocument();
    // should highlight MOH Mental Health Prevention Line, general contact and region contact numbers
    expect(
      screen.getByText("Ministry of Health and Wellness Contact"),
    ).toBeInTheDocument();
    // should have Schedule an Appointment heading
    expect(screen.getByText("Schedule an Appointment")).toBeInTheDocument();
    // should have Mental health centers heading
    expect(screen.getByText("Mental Health Centers")).toBeInTheDocument();
    // should have web resources heading
    expect(screen.getByText("Web Resources")).toBeInTheDocument();
    // should have social accounts heading
    expect(screen.getByText("Social Accounts")).toBeInTheDocument();
  });
});
