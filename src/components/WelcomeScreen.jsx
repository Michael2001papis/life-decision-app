import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";

const greetingVariants = [
  {
    button: "כן, רוצה לשתף",
    getTitle: (name) => `שלום ${name}`,
    text: "איך אתה מרגיש היום? רוצה לשתף אותי במה שעובר עליך"
  },
  {
    button: "בוא נתחיל",
    getTitle: (name) => `${name}, טוב שחזרת`,
    text: "איך היום שלך מרגיש? רוצה לספר לי קצת"
  },
  {
    button: "אני רוצה לעשות סדר",
    getTitle: (name) => `שלום ${name}`,
    text: "איך אתה היום באמת? אפשר לקחת רגע ולסדר את מה שעובר עליך"
  },
  {
    button: "אני צריך כיוון",
    getTitle: (name) => `${name}, אני כאן איתך`,
    text: "איך אתה מרגיש היום? רוצה שנעשה קצת סדר"
  }
];

const generalGreeting = {
  button: "אני רוצה לעשות סדר",
  getTitle: () => "שלום",
  text: "איך אתה מרגיש היום? אפשר לקחת רגע ולסדר את מה שעובר עליך"
};

const WelcomeScreen = () => {
  const { setUser, setStage } = useContext(AppContext);
  const [name, setName] = useState("");
  const [showPersonalGreeting, setShowPersonalGreeting] = useState(false);

  const greeting = useMemo(
    () => greetingVariants[Math.floor(Math.random() * greetingVariants.length)],
    [showPersonalGreeting]
  );
  const trimmedName = name.trim();
  const activeGreeting = trimmedName ? greeting : generalGreeting;

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser(trimmedName);
    setShowPersonalGreeting(true);
  };

  if (showPersonalGreeting) {
    return (
      <div className="screen welcome-flow">
        <h1 className="welcome-title">{activeGreeting.getTitle(trimmedName)}</h1>
        <p className="lead welcome-text">{activeGreeting.text}</p>
        <button className="welcome-action" type="button" onClick={() => setStage("emotionalCheck")}>
          {activeGreeting.button}
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <p className="eyebrow">רגע לעצמך</p>
      <h1>בוא נעשה קצת סדר.</h1>
      <p className="lead">
        אפשר להתחיל בעדינות, בלי לחץ ובלי להרגיש שבוחנים אותך.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">איך לקרוא לך? אפשר גם להשאיר ריק</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="השם שלך"
        />
        <button type="submit">בוא נתחיל</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
