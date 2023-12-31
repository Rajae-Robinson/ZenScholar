import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

interface IHomeSection {
  img: string;
  heading: string;
  body: string;
  btnText?: string;
  btnHref?: string;
}

export default function HomeSection({
  img,
  heading,
  body,
  btnText,
  btnHref,
}: IHomeSection) {
  return (
    <Fade triggerOnce>
      <section className="flex flex-col mt-6 lg:space-x-20 lg:flex-row">
        <img
          src={img}
          className="w-[300px] xl:w-[500px] self-center lg:self-start"
          alt=""
        />
        <div className="space-y-4">
          <h2 className="text-heading text-2xl font-medium lg:text-lg lg:font-normal">
            {heading}
          </h2>
          <p className="lg:w-[70%] leading-relaxed">{body}</p>
          {btnText && btnHref ? (
            <Link to={btnHref}>
              <button className="text-white bg-primary mt-6 py-2 px-4 hover:bg-accent whitespace-nowrap">
                {btnText}
              </button>
            </Link>
          ) : null}
        </div>
      </section>
    </Fade>
  );
}
