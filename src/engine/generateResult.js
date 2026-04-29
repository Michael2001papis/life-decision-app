import { decisionRules } from "./decisionRules";

export const generateResult = (score, categoryLabel) => {
  const decision = decisionRules(score, categoryLabel);

  return {
    state: decision.stateName,
    category: categoryLabel,
    explanation: decision.reflection,
    direction: decision.conclusion,
    action: decision.actionStep,
    actionPlan: decision.actionPlan,
    pattern: decision.stateName,
    summary: decision.reflection,
    recommendation: decision.conclusion,
    nextSteps: decision.actionPlan.map((step) => step.description)
  };
};
