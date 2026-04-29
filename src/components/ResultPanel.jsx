import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const scoreLabels = {
  energyLevel: "אנרגיה",
  mentalLoad: "עומס",
  riskTolerance: "סיכון",
  clarity: "בהירות",
  urgency: "דחיפות",
  stabilityNeed: "יציבות"
};

const resultSections = [
  { key: "reflection", title: "שיקוף מצב" },
  { key: "internalAnalysis", title: "ניתוח פנימי" },
  { key: "conclusion", title: "מסקנה ברורה" },
  { key: "actionStep", title: "צעד פעולה" }
];

const getSectionContent = (result, key) => {
  if (result[key]) {
    return result[key];
  }

  if (key === "reflection") {
    return result.summary;
  }

  if (key === "conclusion") {
    return result.recommendation;
  }

  if (key === "actionStep") {
    return result.nextSteps?.[0];
  }

  return "";
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
      <h2>{result.pattern || "כיוון פעולה ברור"}</h2>
      <p className="lead">{result.recommendation}</p>

      <div className="result-story">
        {resultSections.map((section, index) => (
          <article className="result-section" key={section.key}>
            <span>{index + 1}</span>
            <div>
              <h3>{section.title}</h3>
              <p>{getSectionContent(result, section.key)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="score-grid">
        {Object.entries(result.score).map(([key, value]) => (
          <div className="score-item" key={key}>
            <span>{scoreLabels[key] || key}</span>
            <strong>{value}</strong>
          </div>
        ))}
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
