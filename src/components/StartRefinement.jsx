/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  emotionalRefinementQuestions,
  generateStartPlan
} from "../engine/emotionalStart";
import { updateDecision } from "../storage/storageService";

const StartRefinement = () => {
  const {
    currentDecisionId,
    emotionalResult,
    emotionalRefinementAnswers,
    setEmotionalRefinementAnswers,
    setStartPlan,
    setStage
  } = useContext(AppContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const activeQuestion = emotionalRefinementQuestions[questionIndex];

  if (!emotionalResult) {
    return (
      <div className="screen">
        <h2>צריך קודם להשלים את שלב הפתיחה.</h2>
        <button type="button" onClick={() => setStage("emotionalCheck")}>
          להתחיל פתיחה
        </button>
      </div>
    );
  }

  const answerQuestion = (answerText) => {
    const nextAnswers = {
      ...emotionalRefinementAnswers,
      [activeQuestion.id]: answerText
    };

    setEmotionalRefinementAnswers(nextAnswers);

    if (questionIndex < emotionalRefinementQuestions.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    const plan = generateStartPlan(emotionalResult, nextAnswers);
    setStartPlan(plan);

    if (currentDecisionId) {
      updateDecision(currentDecisionId, {
        refinementAnswers: nextAnswers,
        actionPlan: plan
      });
    }

    setStage("startPlan");
  };

  const goBack = () => {
    if (questionIndex === 0) {
      setStage("emotionalResult");
      return;
    }

    setQuestionIndex((current) => current - 1);
  };

  return (
    <div className="screen" key={activeQuestion.id}>
      <p className="eyebrow">עוד רגע קטן של דיוק</p>
      <h2>{activeQuestion.question}</h2>
      <p className="lead">נבחר יחד משהו פשוט יותר להתחלה, בלי להעמיס.</p>

      <div className="options-list">
        {activeQuestion.options.map((option) => (
          <button
            className={`option-button ${
              emotionalRefinementAnswers[activeQuestion.id] === option ? "selected" : ""
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

export default StartRefinement;
