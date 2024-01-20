import { Link } from "react-router-dom";

interface ImageCardCTAProps {
  title: string;
  description?: string;
  imagePath: string;
  websiteLink?: string;
  appointmentLink?: string;
  socialProfileLink?: string;
}

export default function ImageCardCTA({
  title,
  description,
  imagePath,
  websiteLink,
  appointmentLink,
  socialProfileLink,
}: ImageCardCTAProps) {
  return (
    <div className="w-[280px] min-w-[280px] bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center px-4 py-8">
        <img
          className="w-24 h-24 mb-3 rounded-full object-contain shadow-lg"
          src={imagePath}
          alt=""
        />
        <h5 className="mb-1 text-sm font-medium text-primary text-center">
          {title}
        </h5>
        <span className="text-xs">{description}</span>
        <div className="flex mt-4 md:mt-6">
          {websiteLink && (
            <Link
              to={websiteLink}
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Website
            </Link>
          )}
          {appointmentLink && (
            <Link
              to={appointmentLink}
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3"
            >
              Schedule Appointment
            </Link>
          )}
          {socialProfileLink && (
            <Link
              to={socialProfileLink}
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Visit Profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
