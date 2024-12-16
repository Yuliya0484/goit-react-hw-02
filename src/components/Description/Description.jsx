import s from "./Description.module.css";
const Description = () => {
  return (
    <div className={s.title_box}>
      <h1 className={s.title}>Sip happens cafe</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options bellow
      </p>
    </div>
  );
};
export default Description;
