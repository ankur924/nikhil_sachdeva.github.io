import { profile } from "../data/portfolio";

export function PortraitCard() {
  return (
    <figure className="portrait-card portrait-card--photo">
      <img src={profile.portraitUrl ?? "/images/nikhil-sachdeva-new.jpg"} alt="Dr. Nikhil Sachdeva" />
      <figcaption>Portrait</figcaption>
    </figure>
  );
}
