import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import Screening from "../../pages/Screening";
import { render, screen } from "@testing-library/react";
import { screeningFAQData } from "../../components/Screening/constants";

describe("Screening Page", () => {
  test("should have FAQ", () => {
    render(
      <MemoryRouter>
        <Screening />
      </MemoryRouter>
    );
    screeningFAQData.forEach((item) => {
      const question = screen.getByText(item.question);
      expect(question).toBeInTheDocument();
    });
  });

  test("should have privacy text", () => {
    render(
      <MemoryRouter>
        <Screening />
      </MemoryRouter>
    );
    const privacyTextRegex = /We do not store any personal data or assessment results\. Your participation is entirely anonymous and confidential\./i;
    const privacyText =
      screen.getByText(privacyTextRegex);

    expect(privacyText).toBeInTheDocument();
  });
});
