import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import WelcomeScreen from "../components/WelcomeScreen";
import ProfileBox from "../components/ProfileBox";
import CategorySelector from "../components/CategorySelector";
import QuestionFlow from "../components/QuestionFlow";
import ResultPanel from "../components/ResultPanel";
import HistoryPanel from "../components/HistoryPanel";
import ActionRefinement from "../components/ActionRefinement";
import PersonalActionPlan from "../components/PersonalActionPlan";
import EmotionalCheck from "../components/EmotionalCheck";
import EmotionalResult from "../components/EmotionalResult";
import StartRefinement from "../components/StartRefinement";
import StartPlan from "../components/StartPlan";

const App = () => {
  const { stage } = useContext(AppContext);

  const renderStage = () => {
    switch (stage) {
      case "welcome":
        return <WelcomeScreen />;
      case "category":
        return <CategorySelector />;
      case "emotionalCheck":
        return <EmotionalCheck />;
      case "emotionalResult":
        return <EmotionalResult />;
      case "startRefinement":
        return <StartRefinement />;
      case "startPlan":
        return <StartPlan />;
      case "questions":
        return <QuestionFlow />;
      case "result":
        return <ResultPanel />;
      case "actionRefinement":
        return <ActionRefinement />;
      case "personalActionPlan":
        return <PersonalActionPlan />;
      case "history":
        return <HistoryPanel />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <main className="app-shell">
      <section className="app-card">
        <ProfileBox />
        {renderStage()}
      </section>
    </main>
  );
};

export default App;
