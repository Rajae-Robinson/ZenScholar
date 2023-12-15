import Accordion from "../components/Accordion";
import PHQ9Form from "../components/Screening/PHQ9Form";

export default function Screening() {
  const accordionData = [
    {
      id: 1,
      question: "What is the PHQ-9 Form?",
      answer:
        "The Patient Health Questionnaire 9 (PHQ-9) is a standardized questionnaire used to assess and measure the severity of depressive symptoms. It consists of nine questions related to mood, energy levels, sleep, and appetite.",
      additionalLinks: [
        {
          text: "PHQ-9 | NCBI",
          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1495268/",
        },
        {
          text: "Patient Health Questionnaire | ScienceDirect",
          href: "https://www.sciencedirect.com/topics/nursing-and-health-professions/patient-health-questionnaire-9",
        },
      ],
    },
    {
      id: 2,
      question: "Why is it important to take this assessment?",
      answer:
        "Taking this assessment can help individuals recognize and better understand their emotions and potential signs of depression. It's a useful tool for self-reflection and may prompt seeking professional help if needed.",
    },
    {
      id: 3,
      question: "Is this assessment a diagnosis?",
      answer:
        "No, the PHQ-9 is not a diagnostic tool. It's intended to offer insights and prompt discussions about mental health. For an accurate diagnosis, consulting a qualified healthcare professional is essential.",
    },
    {
      id: 4,
      question: "How often should I take this assessment?",
      answer:
        " The frequency of taking the assessment depends on individual needs or as recommended by a healthcare provider. Some individuals might take it regularly to monitor changes in their mental health.",
    },
  ];

  return (
    <>
      <p className="text-base text-heading mt-4 font-bold">
        PHQ-9 Depression Screening Questionnaire
      </p>
      <Accordion accordionData={accordionData} />
      <p className="mt-12">
        <i>
          We do not store any personal data or assessment results. Your
          participation is entirely anonymous and confidential.
        </i>
      </p>
      <p className="mt-8">
        Please answer honestly. Over the <b>last 2 weeks</b>, how often have you
        been bothered by any of the following problems?
      </p>
      <PHQ9Form />
    </>
  );
}
