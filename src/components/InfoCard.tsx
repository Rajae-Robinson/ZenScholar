import { Link } from "react-router-dom";

interface InfoCardProps {
  title: string;
  description: string;
  link: string;
}

export default function InfoCard({ title, description, link }: InfoCardProps) {
  return (
    <div className="w-[300px] min-w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-base font-bold tracking-tight text-primary text-center">
        {title}
      </h5>
      <p className="mb-3 font-normal">{description}</p>
      <Link
        to={link}
        target="_blank"
        className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}
