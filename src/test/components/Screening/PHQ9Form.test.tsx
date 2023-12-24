import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PHQ9Questions } from "../../../components/Screening/constants";
import PHQ9Form from "../../../components/Screening/PHQ9Form";

describe("PHQ9 Form", () => {
  test("should have the nine standard questions", () => {
    render(<PHQ9Form />);
    PHQ9Questions.forEach((question, index) => {
      const prefixedQuestion = `Q${index + 1}: ${question} *`;
      const questionLabel = screen.getByText(prefixedQuestion);
      expect(questionLabel).toBeInTheDocument();
    });
  });
});
