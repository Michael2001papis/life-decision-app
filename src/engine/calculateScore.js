/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

const initialScore = {
  energyLevel: 0,
  mentalLoad: 0,
  riskTolerance: 0,
  clarity: 0,
  urgency: 0,
  stabilityNeed: 0
};

const legacyImpactMap = {
  stability: "stabilityNeed",
  money: "clarity",
  stress: "mentalLoad",
  urgency: "urgency",
  risk: "riskTolerance"
};

const inferDeepImpact = (answerText) => {
  const impact = {};

  if (["נמוכה", "מעט", "מעטה", "מעטה", "מעט"].includes(answerText)) {
    impact.energyLevel = -2;
    impact.mentalLoad = 1;
  }

  if (["גבוהה", "גבוה", "הרבה", "מאוד", "חזק"].includes(answerText)) {
    impact.energyLevel = 2;
  }

  if (["לא ברור", "חלקית", "קשה", "נמוך"].includes(answerText)) {
    impact.clarity = -2;
    impact.mentalLoad = 1;
  }

  if (["ברור מאוד", "פתוחה", "כן", "טוב"].includes(answerText)) {
    impact.clarity = 2;
  }

  if (["מעדיף יציבות", "צעד קטן", "אפשר לחכות"].includes(answerText)) {
    impact.stabilityNeed = 2;
    impact.riskTolerance = -1;
  }

  if (["מוכן לקפוץ קדימה", "מהלך גדול"].includes(answerText)) {
    impact.riskTolerance = 2;
    impact.stabilityNeed = -1;
  }

  return impact;
};

export const calculateScore = (answers, activeQuestions) => {
  const score = { ...initialScore };

  activeQuestions.forEach((question) => {
    const answer = answers[question.id];
    const option = question.options.find((item) => item.text === answer);

    if (option?.impact) {
      Object.keys(option.impact).forEach((key) => {
        const scoreKey = legacyImpactMap[key] || key;

        if (scoreKey in score) {
          score[scoreKey] += option.impact[key];
        }
      });
    }

    if (option?.deepImpact) {
      Object.keys(option.deepImpact).forEach((key) => {
        if (key in score) {
          score[key] += option.deepImpact[key];
        }
      });
    }

    const inferredImpact = inferDeepImpact(answer);

    Object.keys(inferredImpact).forEach((key) => {
      score[key] += inferredImpact[key];
    });
  });

  return score;
};
