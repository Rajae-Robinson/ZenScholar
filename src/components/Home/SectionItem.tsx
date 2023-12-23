import { Link } from "react-router-dom";

interface ISectionItem {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export default function SectionItem({
  icon,
  title,
  description,
  linkText,
  linkHref,
}: ISectionItem) {
  return (
    <div className="space-y-2">
      <img src={icon} alt="" />
      <h3 className="text-heading text-sm">{title}</h3>
      <p className="leading-relaxed">{description}</p>
      <Link
        to={linkHref}
        className="text-accent font-medium hover:underline transition-all"
      >
        {linkText}
      </Link>
    </div>
  );
}
