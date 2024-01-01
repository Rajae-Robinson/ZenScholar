import { Link } from "react-router-dom";

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
    <section className="flex flex-col mt-6 md:flex-row">
      <img
        src={img}
        className="w-[300px] md:w-[500px] self-center md:self-start"
        alt=""
      />
      <div className="space-y-4">
        <h2 className="text-heading text-2xl font-medium">{heading}</h2>
        <p>{body}</p>
        {btnText && btnHref ? (
          <Link to={btnHref}>
            <button className="text-white bg-primary mt-6 py-2 px-4 hover:bg-accent whitespace-nowrap">
              {btnText}
            </button>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
