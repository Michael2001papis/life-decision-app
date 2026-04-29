/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const planSections = [
  { key: "mainStep", title: "הצעד הראשון שלך" },
  { key: "reason", title: "למה דווקא הצעד הזה" },
  { key: "todayTask", title: "מה לעשות היום" },
  { key: "weekTask", title: "מה לעשות השבוע" },
  { key: "warning", title: "ממה להיזהר" },
  { key: "finalBoost", title: "משפט חיזוק לסיום" }
];

const PersonalActionPlan = () => {
  const { personalActionPlan, setStage, resetFlow } = useContext(AppContext);

  if (!personalActionPlan) {
    return (
      <div className="screen">
        <h2>עדיין אין תוכנית פעולה אישית.</h2>
        <button type="button" onClick={() => setStage("result")}>
          חזרה לתוצאה
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <p className="eyebrow">המשך אישי</p>
      <section className="result-card">
        <h2>{personalActionPlan.title}</h2>
        <p className="result-category">מסלול קצר להתחלה נכונה</p>

        <div className="soft-divider" />

        <div className="personal-plan">
          {planSections.map((section) => (
            <article className="plan-section" key={section.key}>
              <span>{section.title}</span>
              <p>{personalActionPlan[section.key]}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="actions">
        <button type="button" onClick={resetFlow}>
          להתחיל החלטה חדשה
        </button>
        <button className="secondary-button" type="button" onClick={() => setStage("history")}>
          לצפות בהיסטוריה
        </button>
      </div>
    </div>
  );
};

export default PersonalActionPlan;
