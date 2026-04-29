import { decisionRules } from "./decisionRules";

export const generateResult = (score, categoryLabel) => {
  const recommendation = decisionRules(score);

  return {
    summary: `המערכת זיהתה את מצבך בתחום ${categoryLabel} על בסיס התשובות שלך.`,
    recommendation,
    nextSteps: [
      "בחר צעד אחד לביצוע ב-24 השעות הקרובות",
      "בדוק מה המחיר ומה הרווח של הצעד",
      "אל תישאר ללא פעולה, גם אם הצעד קטן"
    ]
  };
};
