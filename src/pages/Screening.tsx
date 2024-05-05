import Accordion from "../components/Accordion";
import PHQ9Form from "../components/Screening/PHQ9Form";
import { screeningFAQData } from "../components/Screening/constants";

export default function Screening() {
  return (
    <>
      <h1 className="text-xl text-heading mt-4 font-bold">
        PHQ-9 Questionnaire
      </h1>
      <Accordion accordionData={screeningFAQData} />
      <InfoAlert />
      <p className="mt-8 text-sm">
        Please answer honestly. Over the <b>last 2 weeks</b>, how often have you
        been bothered by any of the following problems?
      </p>
      <PHQ9Form />
    </>
  );
}

function InfoAlert() {
  return (
    <div
      className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 mt-12"
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <p>
          The PHQ-9 depression screening tool provided on this website is for
          informational purposes only and is not a substitute for professional
          medical advice. It is designed to help assess depressive symptoms but
          should not be used as a diagnostic tool. Consult with a qualified
          healthcare professional for accurate assessment and treatment
          recommendations.
        </p>
        <br />
        <i>
          We do not store any personal data or assessment results. Your
          participation is entirely anonymous and confidential.
        </i>
      </div>
    </div>
  );
}
