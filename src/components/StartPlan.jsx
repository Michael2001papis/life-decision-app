import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const startPlanSections = [
  { key: "mainStep", title: "הצעד הראשון שלך" },
  { key: "reason", title: "למה זה מתאים לך" },
  { key: "todayTask", title: "מה לעשות היום" },
  { key: "tomorrowTask", title: "מה לעשות מחר" },
  { key: "warning", title: "ממה להימנע" },
  { key: "finalBoost", title: "חיזוק" }
];

const StartPlan = () => {
  const { startPlan, setStage, resetFlow } = useContext(AppContext);

  if (!startPlan) {
    return (
      <div className="screen">
        <h2>עדיין אין תוכנית התחלה.</h2>
        <button type="button" onClick={() => setStage("emotionalResult")}>
          חזרה לתוצאה
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <p className="eyebrow">התחלה קטנה</p>
      <section className="result-card">
        <h2>{startPlan.title}</h2>
        <p className="result-category">צעד קטן ובר ביצוע</p>

        <div className="soft-divider" />

        <div className="personal-plan">
          {startPlanSections.map((section) => (
            <article className="plan-section" key={section.key}>
              <span>{section.title}</span>
              <p>{startPlan[section.key]}</p>
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

export default StartPlan;
