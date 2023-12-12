import hero from "../assets/img/hero.svg";
import bg from "../assets/img/hero-bg.svg";

export default function Home() {
  return (
    <>
      <header className="flex min-h-screen">
        <div>
          <h1 className="mt-16 text-heading text-3xl font-thin">
            <span className="font-bold">ZenScholar:</span>
            Tools & Resources for Student Mental Wellness
          </h1>
          <p className="text-body mt-2">
            Ever felt the weight of university life impacting your mental
            well-being? You&apos;re not alone. Our mission is to shed light on
            the silent mental struggles of Jamaican university students. Join us
            in breaking the stigma and discovering the support you deserve. Take
            our depression test, explore mental health resources, and take the
            first step towards a brighter and more balanced campus life.
          </p>
          <div className="mt-12 flex space-x-4">
            <button className="text-white bg-primary py-2 px-4 hover:bg-accent whitespace-nowrap">
              Go to Depression Screening Test
            </button>
            <button className="border-primary border-2 py-2 px-4 hover:shadow-md whitespace-nowrap">
              Mental Health Resources
            </button>
          </div>
          <p className="text-xs mt-2">
            <span className="font-bold">FREE. </span>
            No sign-up required
          </p>
        </div>
        <img src={hero} />
      </header>
      <img
        src={bg}
        className="absolute top-0 h-full w-full -z-20 object-cover object-center"
        aria-hidden="true"
      />
    </>
  );
}
