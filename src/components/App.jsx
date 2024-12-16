import Options from "./Options/Options.jsx";
import Description from "./Description/Description.jsx";
import Feedback from "./Feedback/Feedback.jsx";

const App = () => {
  return (
    <div className="main-box">
      <Description></Description>
      <Options></Options>
      <Feedback></Feedback>
    </div>
  );
};
export default App;
