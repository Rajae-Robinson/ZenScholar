import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <footer>
      <div className=" w-full bg-primary text-white  ">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5 pl-8">
              <br></br>
              <br></br>
              <h4 className="font-semibold text-base text-blue-300">
                {" "}
                ZenScholar
              </h4>
              <p className="italic"> Resources for Student</p>
              <p className="italic"> Mental Wellness</p>
            </div>

            <div className="mb-5">
              <h4 className="font-semibold text-sm">Pages</h4>
              <br></br>
              <ul>
                <Link to="#header" className="hover:text-blue-300">
                  <li className="pb-3" onClick={scrollToTop}>
                    {" "}
                    Home
                  </li>
                </Link>
                <Link to="/resources" className="hover:text-blue-300">
                  <li className="pb-3">
                    <i className="fa fa-chevron-right"></i> Resources
                  </li>
                </Link>
                <Link to="/about" className="hover:text-blue-300">
                  <li className="pb-3">
                    <i className="fa fa-chevron-right"></i> About
                  </li>
                </Link>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="font-semibold text-sm">Useful Links</h4>
              <br></br>
              <ul>
                <Link to="/resources" className="hover:text-blue-300">
                  <li className="pb-3">
                    <i className="fa fa-chevron-right"></i> Mental Health
                    Resources{" "}
                  </li>
                </Link>
                <Link to="/screening" className="hover:text-blue-300">
                  <li className="pb-3">
                    <i className="fa fa-chevron-right"></i> PHQ-9 Screening Test
                  </li>
                </Link>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="font-semibold text-sm"> MOH Emergency Contacts</h4>
              <br></br>
              <ul>
                <li className="pb-3">East Region: 876-927-2272</li>
                <li className="pb-3">Southern Region: 876-962-3370</li>
                <li className="pb-3">Western Region: 876-952-5100-9</li>
                <li className="pb-3">South East Region: 876-930-1152 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
