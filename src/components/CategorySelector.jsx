import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { categories } from "../engine/questions";

const CategorySelector = () => {
  const { setCategory, setAnswers, setResult, setStage } = useContext(AppContext);

  const selectCategory = (categoryId) => {
    setCategory(categoryId);
    setAnswers({});
    setResult(null);
    setStage("questions");
  };

  return (
    <div className="screen">
      <p className="eyebrow">בחירת תחום</p>
      <h2>באיזה נושא תרצה לקבל החלטה?</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <button
            className="category-card"
            type="button"
            key={category.id}
            onClick={() => selectCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
