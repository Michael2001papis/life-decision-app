const initialScore = {
  stability: 0,
  money: 0,
  stress: 0,
  urgency: 0,
  risk: 0
};

export const calculateScore = (answers, activeQuestions) => {
  const score = { ...initialScore };

  activeQuestions.forEach((question) => {
    const answer = answers[question.id];
    const option = question.options.find((item) => item.text === answer);

    if (option?.impact) {
      Object.keys(option.impact).forEach((key) => {
        score[key] += option.impact[key];
      });
    }
  });

  return score;
};
