import hero from "../../assets/img/hero.svg";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <header className="flex flex-col text-center leading-9 lg:leading-normal lg:text-left lg:flex-row lg:h-screen overflow-hidden">
      <Fade className="order-2 lg:order-1" triggerOnce>
        <div className="space-y-5">
          <h1 className="lg:mt-16 text-heading leading-10 lg:leading-[60px] text-3xl font-thin">
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
          <div className="mt-12 flex flex-col items-center space-y-5 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-4">
            <Link to="/screening">
              <button className="w-[280px] lg:w-auto text-white bg-primary py-2 px-4 hover:bg-accent whitespace-nowrap">
                Go to Depression Screening Test
              </button>
            </Link>
            <Link to="/resources">
              <button className="w-[280px] lg:w-auto border-primary border-2 py-2 px-4 hover:shadow-lg whitespace-nowrap">
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
        className="order-1 lg:order-2 self-center lg:self-start lg:my-[20%] xl:my-0"
      >
        <div className="w-[200px] lg:w-[350px] xl:w-[500px]">
          <img src={hero} alt="girl meditating" />
        </div>
      </Slide>
    </header>
  );
}
