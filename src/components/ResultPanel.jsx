import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const scoreLabels = {
  stability: "יציבות",
  money: "כסף",
  stress: "לחץ",
  urgency: "דחיפות",
  risk: "סיכון"
};

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

  return (
    <div className="screen">
      <p className="eyebrow">המסקנה שלך</p>
      <h2>{result.recommendation}</h2>
      <p className="lead">{result.summary}</p>

      <div className="score-grid">
        {Object.entries(result.score).map(([key, value]) => (
          <div className="score-item" key={key}>
            <span>{scoreLabels[key]}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="next-steps">
        <h3>צעדים הבאים</h3>
        <ul>
          {result.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>

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
