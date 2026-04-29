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

        <p className="result-explanation">{result.explanation || result.summary}</p>

        <div className="soft-divider" />

        <div className="direction-box">
          <span>מה נכון לעשות עכשיו</span>
          <p>{result.direction || result.recommendation}</p>
        </div>

        <button className="action-button" type="button">
          התחל פעולה
        </button>

        <div className="action-plan">
          <h3>מה לעשות עכשיו</h3>
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
