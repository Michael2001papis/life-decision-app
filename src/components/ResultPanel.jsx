import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ResultPanel = () => {
  const { result, setStage, resetFlow } = useContext(AppContext);

  if (!result) {
    return (
      <div className="screen">
        <h2>אין עדיין תוצאה.</h2>
        <button type="button" onClick={() => setStage("category")}>
          להתחיל החלטה
        </button>
      </div>
    );
  }

  const actionPlan = result.actionPlan?.length
    ? result.actionPlan
    : [{ title: "התחל בצעד אחד", description: result.action || result.nextSteps?.[0] }];

  return (
    <div className="screen">
      <p className="eyebrow">המצב שלך כרגע</p>

      <section className="result-card">
        <h2>{result.state || result.pattern || "כיוון ברור"}</h2>
        <p className="result-category">{result.category || "תוצאה אישית"}</p>

        <div className="soft-divider" />

        <div className="result-block">
          <span>שיקוף מצב</span>
          <p>{result.reflection || result.explanation || result.summary}</p>
        </div>

        <div className="result-block">
          <span>ניתוח ברור</span>
          <p>{result.analysis || result.internalAnalysis || result.explanation || result.summary}</p>
        </div>

        <div className="soft-divider" />

        <div className="direction-box">
          <span>מסקנה חד־משמעית</span>
          <p>{result.conclusion || result.direction || result.recommendation}</p>
        </div>

        {result.encouragement && <p className="encouragement-box">{result.encouragement}</p>}

        <div className="action-plan">
          <h3>צעדים ראשונים</h3>
          {actionPlan.map((step, index) => (
            <article className="action-step" key={`${step.title}-${index}`}>
              <span>{index + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          className="action-button"
          type="button"
          onClick={() => setStage("actionRefinement")}
        >
          דייק לי את הצעד הבא
        </button>
      </section>

      <div className="actions">
        <button type="button" onClick={resetFlow}>
          להתחיל מחדש
        </button>
        <button className="secondary-button" type="button" onClick={() => setStage("history")}>
          לצפות בהיסטוריה
        </button>
      </div>
    </div>
  );
};

export default ResultPanel;
