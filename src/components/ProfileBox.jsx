/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { categories } from "../engine/questions";

const ProfileBox = () => {
  const { user, category, stage, setStage } = useContext(AppContext);
  const categoryLabel = categories.find((item) => item.id === category)?.label;

  if (stage === "welcome") {
    return null;
  }

  return (
    <header className="profile-box">
      <div>
        <span>משתמש</span>
        <strong>{user}</strong>
      </div>
      {categoryLabel && (
        <div>
          <span>תחום</span>
          <strong>{categoryLabel}</strong>
        </div>
      )}
      <button className="ghost-button" type="button" onClick={() => setStage("history")}>
        היסטוריה
      </button>
    </header>
  );
};

export default ProfileBox;
