/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import { calculateScore } from "../engine/calculateScore";
import { categories, questions } from "../engine/questions";
import { generateResult } from "../engine/generateResult";
import { saveDecision } from "../storage/storageService";

const QuestionFlow = () => {
  const {
    user,
    category,
    answers,
    setAnswers,
    setResult,
    setCurrentDecisionId,
    setRefinementAnswers,
    setPersonalActionPlan,
    setStage
  } = useContext(AppContext);
  const [questionIndex, setQuestionIndex] = useState(0);

  const activeQuestions = questions[category] || [];
  const activeQuestion = activeQuestions[questionIndex];
  const categoryLabel = useMemo(
    () => categories.find((item) => item.id === category)?.label || "כללי",
    [category]
  );

  if (!activeQuestion) {
    return (
      <div className="screen">
        <h2>לא נמצאו שאלות לתחום הזה.</h2>
        <button type="button" onClick={() => setStage("category")}>
          לבחור תחום אחר
        </button>
      </div>
    );
  }

  const answerQuestion = (answerText) => {
    const nextAnswers = {
      ...answers,
      [activeQuestion.id]: answerText
    };

    setAnswers(nextAnswers);

    if (questionIndex < activeQuestions.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    const score = calculateScore(nextAnswers, activeQuestions);
    const decisionResult = generateResult(score, categoryLabel);

    const decisionId = crypto.randomUUID();
    const savedDecision = {
      id: decisionId,
      createdAt: new Date().toISOString(),
      user,
      category: categoryLabel,
      initialAnswers: nextAnswers,
      firstResult: {
        stateTitle: decisionResult.stateTitle,
        reflection: decisionResult.reflection,
        analysis: decisionResult.analysis,
        conclusion: decisionResult.conclusion,
        encouragement: decisionResult.encouragement,
        firstSteps: decisionResult.firstSteps
      },
      refinementAnswers: {},
      actionPlan: null,
      answers: nextAnswers,
      score,
      result: decisionResult
    };

    saveDecision(savedDecision);
    setCurrentDecisionId(decisionId);
    setRefinementAnswers({});
    setPersonalActionPlan(null);
    setResult({ ...decisionResult, score });
    setStage("result");
  };

  const goBack = () => {
    if (questionIndex === 0) {
      setStage("category");
      return;
    }

    setQuestionIndex((current) => current - 1);
  };

  return (
    <div className="screen" key={activeQuestion.id}>
      <p className="eyebrow">נמשיך צעד קטן</p>
      <h2>{activeQuestion.question}</h2>
      <div className="options-list">
        {activeQuestion.options.map((option) => (
          <button
            className={`option-button ${
              answers[activeQuestion.id] === option.text ? "selected" : ""
            }`}
            type="button"
            key={option.text}
            onClick={() => answerQuestion(option.text)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button className="link-button" type="button" onClick={goBack}>
        חזרה
      </button>
    </div>
  );
};

export default QuestionFlow;
