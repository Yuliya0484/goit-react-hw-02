import s from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <div className={s.button_box}>
      {options.map((option) => (
        <button
          key={option}
          className={s.vote_button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {hasFeedback && (
        <button className={s.resetButton} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
