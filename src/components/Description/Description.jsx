import s from "./Description.module.css";
import { SiCoffeescript } from "react-icons/si";
const Description = () => {
  return (
    <div className={s.title_box}>
      <h1 className={s.title}>
        Sip Happens Café
        <span className={s.image}>
          <SiCoffeescript />
        </span>
      </h1>

      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
