export default function HelpLineCard() {
  return (
    <>
      <div className="w-[400px] bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center px-4 py-8">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-sm font-medium text-gray-900">
            Ministry of Health
          </h5>
          <span className="text-xs text-gray-500">Some description</span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Website
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
