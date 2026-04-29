import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { clearHistory, getHistory } from "../storage/storageService";

const HistoryPanel = () => {
  const { setStage, resetFlow } = useContext(AppContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
  };

  return (
    <div className="screen">
      <p className="eyebrow">היסטוריה</p>
      <h2>החלטות קודמות</h2>

      {history.length === 0 ? (
        <p className="lead">עדיין אין החלטות שמורות.</p>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <article className="history-card" key={item.id}>
              <div>
                <strong>{item.category}</strong>
                <span>{new Date(item.createdAt).toLocaleDateString("he-IL")}</span>
              </div>
              <p>{item.result.recommendation}</p>
            </article>
          ))}
        </div>
      )}

      <div className="actions">
        <button type="button" onClick={resetFlow}>
          החלטה חדשה
        </button>
        <button className="secondary-button" type="button" onClick={() => setStage("category")}>
          חזרה לבחירת תחום
        </button>
        {history.length > 0 && (
          <button className="danger-button" type="button" onClick={handleClearHistory}>
            ניקוי היסטוריה
          </button>
        )}
      </div>
    </div>
  );
};

export default HistoryPanel;
