import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import { useState, useEffect } from "react";
import s from "./App.module.css";
import { SiCoffeescript } from "react-icons/si";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={s.container}>
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
      <Options
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        hasFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
