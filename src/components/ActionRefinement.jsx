import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { generatePersonalActionPlan } from "../engine/generatePersonalActionPlan";
import { refinementQuestions } from "../engine/refinementQuestions";
import { updateDecision } from "../storage/storageService";

const ActionRefinement = () => {
  const {
    result,
    currentDecisionId,
    refinementAnswers,
    setRefinementAnswers,
    setPersonalActionPlan,
    setStage
  } = useContext(AppContext);
  const [questionIndex, setQuestionIndex] = useState(0);

  const activeQuestion = refinementQuestions[questionIndex];

  if (!result) {
    return (
      <div className="screen">
        <h2>צריך קודם להשלים תוצאה ראשונית.</h2>
        <button type="button" onClick={() => setStage("category")}>
          להתחיל מחדש
        </button>
      </div>
    );
  }

  const answerQuestion = (answerText) => {
    const nextAnswers = {
      ...refinementAnswers,
      [activeQuestion.id]: answerText
    };

    setRefinementAnswers(nextAnswers);

    if (questionIndex < refinementQuestions.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    const actionPlan = generatePersonalActionPlan(result, nextAnswers);

    setPersonalActionPlan(actionPlan);

    if (currentDecisionId) {
      updateDecision(currentDecisionId, {
        refinementAnswers: nextAnswers,
        actionPlan
      });
    }

    setStage("personalActionPlan");
  };

  const goBack = () => {
    if (questionIndex === 0) {
      setStage("result");
      return;
    }

    setQuestionIndex((current) => current - 1);
  };

  return (
    <div className="screen" key={activeQuestion.id}>
      <p className="eyebrow">
        דיוק הצעד הבא {questionIndex + 1} מתוך {refinementQuestions.length}
      </p>
      <h2>{activeQuestion.question}</h2>
      <p className="lead">ענה בקצרה לפי מה שהכי נכון לך עכשיו. זה יעזור לבנות תוכנית פעולה מדויקת יותר.</p>

      <div className="options-list">
        {activeQuestion.options.map((option) => (
          <button
            className={`option-button ${
              refinementAnswers[activeQuestion.id] === option ? "selected" : ""
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

export default ActionRefinement;
