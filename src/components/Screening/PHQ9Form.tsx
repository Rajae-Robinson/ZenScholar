import { useState } from "react";
import ResultsModal from "./ResultsModal";
import { PHQ9Questions as questions } from "./constants";
import { Link } from "react-router-dom";

export default function PHQ9Form() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(value, 10);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const calculateScore = () => {
    return answers.reduce((acc, currentValue) => acc + currentValue, 0);
  };

  const determineDepressionLevel = (score: number): string => {
    if (score == 0) return "No Depression";
    else if (score >= 1 && score <= 4) return "Minimal Depression";
    else if (score >= 5 && score <= 9) return "Mild Depression";
    else if (score >= 10 && score <= 14) return "Moderate Depression";
    else if (score >= 15 && score <= 19) return "Moderately Severe Depression";
    else if (score >= 20 && score <= 27) return "Severe Depression";

    return "Score not recognised.";
  };

  return (
    <>
      <div
        data-testid="phq9-form"
        className="my-4 border-4 border-blue-800 p-4"
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="space-y-2">
              <p className="text-sm text-accent">{`Q${
                index + 1
              }: ${question} *`}</p>
              <div className="flex flex-col ml-8">
                <label htmlFor={`question-${index + 1}-0`}>
                  <input
                    type="radio"
                    id={`question-${index + 1}-0`}
                    name={`question-${index + 1}`}
                    value="0"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required
                    disabled={submitted}
                  />
                  &nbsp;Not at all
                </label>
                <label htmlFor={`question-${index + 1}-1`}>
                  <input
                    type="radio"
                    id={`question-${index + 1}-1`}
                    name={`question-${index + 1}`}
                    value="1"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required
                    disabled={submitted}
                  />
                  &nbsp;Several days
                </label>
                <label htmlFor={`question-${index + 1}-2`}>
                  <input
                    type="radio"
                    id={`question-${index + 1}-2`}
                    name={`question-${index + 1}`}
                    value="2"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required
                    disabled={submitted}
                  />
                  &nbsp;More than half the days
                </label>
                <label htmlFor={`question-${index + 1}-3`}>
                  <input
                    type="radio"
                    id={`question-${index + 1}-3`}
                    name={`question-${index + 1}`}
                    value="3"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required
                    disabled={submitted}
                  />
                  &nbsp;Nearly every day
                </label>
              </div>
            </div>
          ))}
          <div className="mt-6">
            {submitted ? (
              <ResultsModal
                heading={`Result`}
                body={
                  <p className="leading-relaxed text-gray-500">
                    The PHQ-9 depression screening tool on this website provides
                    informational guidance only and is{" "}
                    <strong>
                      not a substitute for professional diagnosis or treatment
                    </strong>
                    . Its results should not be considered a definitive
                    assessment; please consult a qualified healthcare
                    professional for an accurate evaluation of your mental
                    health.
                    <br />
                    <br />
                    Here is your result:
                    <br />
                    <strong>Score</strong>: {calculateScore()}
                    <br />
                    <strong>Depression Severity</strong>:{" "}
                    {determineDepressionLevel(calculateScore())}
                    <br />
                    <br />
                    <strong>
                      <i>Interpretation</i>
                    </strong>
                    : Scores of 5, 10, 15, and 20 indicate the threshold
                    different levels of depression: mild, moderate, moderately
                    severe, and severe, respectively. Note: If a patient answers
                    yes to Question 9 about suicide risk, they should undergo
                    further evaluation by someone skilled in assessing this
                    risk.
                    <br />
                    <br />
                    If you are in crisis or need immediate assistance, please{" "}
                    <Link to="/resources" className="text-accent">
                      contact a crisis helpline or emergency services in your
                      area
                    </Link>
                    . Take care and be kind to yourself. You are not alone.
                    <br />
                    <br />
                    <Link
                      to="/resources"
                      target="_blank"
                      className="text-accent font-bold"
                    >
                      Guidlines for medical professionals on how to interpret
                      PHQ-9 scores.
                      <svg
                        className="w-3 h-3 ms-2.5 inline-block rtl:rotate-[270deg]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                      </svg>
                    </Link>
                  </p>
                }
              />
            ) : (
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 disabled:bg-gray-500"
                disabled={submitted}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <p className="text-accent">
        Questionnaire adapted from&nbsp;
        <a
          href="https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          American Psychological Association
        </a>
        .
      </p>
    </>
  );
}
