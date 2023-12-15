import { useState } from "react";

type Link = {
  text: string;
  href: string;
};

interface IAccordion {
  id: number;
  question: string;
  answer: string;
  additionalLinks?: Link[];
}

type AccordionProps = {
  accordionData: IAccordion[];
};

export default function Accordion({ accordionData }: AccordionProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      //   data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      //   data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      {accordionData.map((item: IAccordion) => (
        <div key={item.id}>
          <h2 id={`accordion-flush-heading-${item.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-accent border-b border-gray-500 gap-3"
              onClick={() => toggleAccordion(item.id)}
              data-accordion-target={`#accordion-flush-body-${item.id}`}
              aria-expanded={activeAccordion === item.id ? "true" : "false"}
              aria-controls={`accordion-flush-body-${item.id}`}
            >
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 ${
                  activeAccordion === item.id
                    ? "transform rotate-360"
                    : "rotate-180"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${item.id}`}
            className={`${activeAccordion === item.id ? "block" : "hidden"}`}
            aria-labelledby={`accordion-flush-heading-${item.id}`}
          >
            <div className="py-5 border-b border-gray-200">
              <p className="mb-2 text-body">{item.answer}</p>
              {item.additionalLinks && (
                <ul className="ps-5 text-body list-disc">
                  {item.additionalLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
