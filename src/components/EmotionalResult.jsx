/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const EmotionalResult = () => {
  const { emotionalResult, setStage, resetFlow } = useContext(AppContext);

  if (!emotionalResult) {
    return (
      <div className="screen">
        <h2>צריך קודם לענות על שאלות הפתיחה.</h2>
        <button type="button" onClick={() => setStage("emotionalCheck")}>
          להתחיל שאלות
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <p className="eyebrow">המצב שלך כרגע</p>
      <section className="result-card">
        <h2>{emotionalResult.state}</h2>

        <div className="soft-divider" />

        <div className="result-block">
          <span>שיקוף מצב</span>
          <p>{emotionalResult.reflection}</p>
        </div>

        <div className="result-block">
          <span>נרמול עדין</span>
          <p>{emotionalResult.normalization}</p>
        </div>

        <div className="direction-box">
          <span>כיוון ברור</span>
          <p>{emotionalResult.direction}</p>
        </div>

        <p className="encouragement-box">{emotionalResult.encouragement}</p>

        <div className="action-plan">
          <h3>צעדים קטנים</h3>
          {emotionalResult.steps.map((step, index) => (
            <article className="action-step" key={step.title}>
              <span>{index + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
                <small>{step.action}</small>
              </div>
            </article>
          ))}
        </div>

        <button
          className="action-button"
          type="button"
          onClick={() => setStage("startRefinement")}
        >
          תכוון אותי עוד קצת
        </button>
      </section>

      <div className="actions">
        <button type="button" onClick={resetFlow}>
          להתחיל מחדש
        </button>
        <button className="secondary-button" type="button" onClick={() => setStage("category")}>
          לעבור לבחירת תחום
        </button>
      </div>
    </div>
  );
};

export default EmotionalResult;
