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

  const resetFlow = () => {
    setStage("welcome");
    setUser("");
    setCategory("");
    setAnswers({});
    setResult(null);
    setCurrentDecisionId(null);
    setRefinementAnswers({});
    setPersonalActionPlan(null);
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
        resetFlow
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
