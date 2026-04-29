import { decisionRules } from "./decisionRules";

export const generateResult = (score, categoryLabel) => {
  const decision = decisionRules(score, categoryLabel);

  return {
    pattern: decision.stateName,
    reflection: decision.reflection,
    internalAnalysis: decision.internalAnalysis,
    conclusion: decision.conclusion,
    actionStep: decision.actionStep,
    summary: decision.reflection,
    recommendation: decision.conclusion,
    nextSteps: [decision.actionStep]
  };
};
