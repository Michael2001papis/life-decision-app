import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { emotionalQuestions, generateEmotionalResult } from "../engine/emotionalStart";
import { saveDecision } from "../storage/storageService";

const EmotionalCheck = () => {
  const {
    user,
    emotionalAnswers,
    setEmotionalAnswers,
    setEmotionalResult,
    setCurrentDecisionId,
    setStage
  } = useContext(AppContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const activeQuestion = emotionalQuestions[questionIndex];

  const answerQuestion = (answerText) => {
    const nextAnswers = {
      ...emotionalAnswers,
      [activeQuestion.id]: answerText
    };

    setEmotionalAnswers(nextAnswers);

    if (questionIndex < emotionalQuestions.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    const result = generateEmotionalResult(nextAnswers);
    const decisionId = crypto.randomUUID();

    saveDecision({
      id: decisionId,
      type: "emotional_start",
      createdAt: new Date().toISOString(),
      user,
      category: "מצב אישי",
      state: result.state,
      answers: nextAnswers,
      result,
      actionPlan: null
    });

    setCurrentDecisionId(decisionId);
    setEmotionalResult(result);
    setStage("emotionalResult");
  };

  const goBack = () => {
    if (questionIndex === 0) {
      setStage("welcome");
      return;
    }

    setQuestionIndex((current) => current - 1);
  };

  return (
    <div className="screen" key={activeQuestion.id}>
      <p className="eyebrow">ניקח את זה בעדינות</p>
      <h2>{activeQuestion.question}</h2>
      <p className="lead">בחר את מה שהכי קרוב למה שקורה אצלך עכשיו. אין כאן נכון או לא נכון.</p>

      <div className="options-list">
        {activeQuestion.options.map((option) => (
          <button
            className={`option-button ${
              emotionalAnswers[activeQuestion.id] === option ? "selected" : ""
            }`}
            type="button"
            key={option}
            onClick={() => answerQuestion(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button className="link-button" type="button" onClick={goBack}>
        חזרה
      </button>
    </div>
  );
};

export default EmotionalCheck;
