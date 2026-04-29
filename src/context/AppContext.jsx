import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [stage, setStage] = useState("welcome");
  const [user, setUser] = useState("");
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentDecisionId, setCurrentDecisionId] = useState(null);
  const [refinementAnswers, setRefinementAnswers] = useState({});
  const [personalActionPlan, setPersonalActionPlan] = useState(null);
  const [emotionalAnswers, setEmotionalAnswers] = useState({});
  const [emotionalResult, setEmotionalResult] = useState(null);
  const [emotionalRefinementAnswers, setEmotionalRefinementAnswers] = useState({});
  const [startPlan, setStartPlan] = useState(null);

  const resetFlow = () => {
    setStage("welcome");
    setUser("");
    setCategory("");
    setAnswers({});
    setResult(null);
    setCurrentDecisionId(null);
    setRefinementAnswers({});
    setPersonalActionPlan(null);
    setEmotionalAnswers({});
    setEmotionalResult(null);
    setEmotionalRefinementAnswers({});
    setStartPlan(null);
  };

  return (
    <AppContext.Provider
      value={{
        stage,
        setStage,
        user,
        setUser,
        category,
        setCategory,
        answers,
        setAnswers,
        result,
        setResult,
        currentDecisionId,
        setCurrentDecisionId,
        refinementAnswers,
        setRefinementAnswers,
        personalActionPlan,
        setPersonalActionPlan,
        emotionalAnswers,
        setEmotionalAnswers,
        emotionalResult,
        setEmotionalResult,
        emotionalRefinementAnswers,
        setEmotionalRefinementAnswers,
        startPlan,
        setStartPlan,
        resetFlow
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
