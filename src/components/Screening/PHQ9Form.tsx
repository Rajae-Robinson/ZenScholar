import { useState } from "react";
import ResultsModal from "./ResultsModal";

export default function PHQ9Form() {
  const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead, or of hurting yourself?",
  ];

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
    <div className="my-4 border-4 border-blue-800 p-4">
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
              heading={`Result: ${determineDepressionLevel(calculateScore())}`}
              body={`Based on your responses you recieved a total score of ${calculateScore()}.`}
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
  );
}
