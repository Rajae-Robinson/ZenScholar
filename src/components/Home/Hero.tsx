import hero from "../../assets/img/hero.svg";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <header className="flex flex-col text-center leading-9 md:leading-normal md:text-left md:flex-row md:h-screen overflow-clip">
      <Fade className="order-2 md:order-1" triggerOnce>
        <div className="space-y-5">
          <h1 className="md:mt-16 text-heading leading-10 md:leading-[60px] text-3xl font-thin">
            <span className="font-bold">ZenScholar:</span>
            Tools & Resources for Student Mental Wellness
          </h1>
          <p className="text-body mt-2 lg:w-[85%]">
            Ever felt the weight of university life impacting your mental
            well-being? <b>You&apos;re not alone</b>. Our mission is to shed
            light on the silent mental struggles of Jamaican university
            students. Join us in breaking the stigma and discovering the support
            you deserve. Take our depression test, explore mental health
            resources, and take the first step towards a brighter and more
            balanced campus life.
          </p>
          <div className="mt-12 flex flex-col items-center space-y-5 md:flex-row md:items-start md:space-y-0 md:space-x-4">
            <Link to="/screening">
              <button className="text-white bg-primary py-2 px-4 hover:bg-accent whitespace-nowrap">
                Go to Depression Screening Test
              </button>
            </Link>
            <Link to="/resources">
              <button className="border-primary border-2 py-2 px-4 hover:shadow-md whitespace-nowrap">
                Mental Health Resources
              </button>
            </Link>
          </div>
          <p className="text-xs mt-2">
            <span className="font-bold">FREE. </span>
            No sign-up required
          </p>
        </div>
      </Fade>
      <Slide
        triggerOnce
        direction="right"
        className="order-1 md:order-2 self-center md:self-start"
      >
        <div className="w-[200px] md:w-[400px] lg:w-[500px]">
          <img src={hero} alt="girl meditating" />
        </div>
      </Slide>
    </header>
  );
}
