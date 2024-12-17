import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.feedback_box}>
      <ul className={s.vote_list}>
        <li className={s.vote_item}>Good: {feedback.good}</li>
        <li className={s.vote_item}>Neutral: {feedback.neutral}</li>
        <li className={s.vote_item}>Bad: {feedback.bad}</li>
        <li className={s.vote_item}>Total: {totalFeedback}</li>
        <li className={s.vote_item}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
