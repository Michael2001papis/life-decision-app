import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const WelcomeScreen = () => {
  const { setUser, setStage } = useContext(AppContext);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    setUser(name.trim());
    setStage("category");
  };

  return (
    <div className="screen">
      <p className="eyebrow">Life Decision App</p>
      <h1>קבל החלטה ברורה בלי עומס.</h1>
      <p className="lead">
        הזן שם, בחר תחום, ענה על כמה שאלות וקבל כיוון פעולה ממוקד.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">איך קוראים לך?</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="השם שלך"
        />
        <button type="submit">להתחיל</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
