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
    <section className="flex">
      <img src={img} className="w-[500px]" alt="" />
      <div className="space-y-4">
        <h2 className="text-heading text-lg">{heading}</h2>
        <p>{body}</p>
        {btnText && btnHref ? (
          <Link to={btnHref}>
            <button className="text-white bg-primary mt-2 py-2 px-4 hover:bg-accent whitespace-nowrap">
              {btnText}
            </button>
          </Link>
        ) : null}
      </div>
    </section>
  );
}