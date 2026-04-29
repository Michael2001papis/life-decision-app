export const emotionalQuestions = [
  {
    id: "energy",
    question: "כמה אנרגיה יש לך היום?",
    options: ["כמעט ואין", "מעט", "בינונית", "גבוהה"]
  },
  {
    id: "starting",
    question: "כמה קשה לך להתחיל דברים?",
    options: ["מאוד קשה", "קשה", "בינוני", "קל"]
  },
  {
    id: "feeling",
    question: "מה אתה מרגיש יותר כרגע?",
    options: ["לחץ", "עייפות", "בלבול", "ריקנות", "שילוב"]
  },
  {
    id: "need",
    question: "מה אתה צריך עכשיו יותר?",
    options: ["שקט", "כיוון", "יציבות", "התחלה קטנה"]
  }
];

export const emotionalRefinementQuestions = [
  {
    id: "blocker",
    question: "מה הכי עוצר אותך?",
    options: ["פחד", "חוסר כוח", "חוסר כיוון", "דחיינות"]
  },
  {
    id: "smallSuccess",
    question: "מה ירגיש כמו הצלחה קטנה עבורך היום?",
    options: ["לסיים משהו", "להתחיל משהו", "להבין משהו", "להירגע"]
  }
];

const mapEmotionalState = (answers) => {
  if (answers.feeling === "בלבול" || answers.need === "כיוון") {
    return "confusion";
  }

  if (answers.energy === "כמעט ואין" || answers.energy === "מעט" || answers.feeling === "עייפות") {
    return "low_energy";
  }

  if (answers.starting === "מאוד קשה" || answers.starting === "קשה") {
    return "stuck";
  }

  return "overload";
};

const stateContent = {
  overload: {
    state: "עומס מנטלי",
    reflection:
      "נראה שאתה בתקופה לא פשוטה, ויש שם גם עומס וגם צורך להוריד קצת רעש לפני שמתקדמים.",
    normalization: "זה מצב שקורה להרבה אנשים כשיש עומס או חוסר בהירות לאורך זמן.",
    direction:
      "מה שנכון לך עכשיו זה לא לנסות לפתור הכול, אלא להחזיר לעצמך שליטה קטנה.",
    encouragement: "אתה לא צריך כוח גדול כדי להתחיל. אתה צריך צעד אחד אפשרי.",
    steps: [
      {
        title: "בחר פעולה אחת בלבד",
        description: "תבחר דבר אחד קטן שאתה יכול לסיים היום.",
        action: "כתוב אותו במשפט אחד."
      },
      {
        title: "הגדר זמן קצר",
        description: "תן לעצמך זמן מוגבל כדי לא להפוך את זה לדבר כבד.",
        action: "קבע 20 דקות בלבד."
      },
      {
        title: "סיים משהו קטן",
        description: "עדיף לסיים משהו קטן מאשר להתחיל משהו גדול.",
        action: "סגור פעולה אחת עד הסוף."
      }
    ]
  },
  stuck: {
    state: "תקיעות",
    reflection:
      "נראה שיש רצון לזוז, אבל ההתחלה עצמה מרגישה כבדה מדי או לא מספיק ברורה.",
    normalization: "תקיעות לא אומרת שאין יכולת. הרבה פעמים היא סימן שהצעד פשוט גדול מדי כרגע.",
    direction: "הצעד החכם כרגע הוא להקטין את ההתחלה עד שהיא מרגישה אפשרית.",
    encouragement: "תנועה קטנה עדיפה על ניסיון לפתור הכול בראש.",
    steps: [
      {
        title: "הקטן את הצעד",
        description: "אל תבחר משימה גדולה. בחר התחלה קטנה מאוד.",
        action: "בחר פעולה של עד 10 דקות."
      },
      {
        title: "התחל בלי לשפוט",
        description: "זה לא מבחן הצלחה, זו התחלה של תנועה.",
        action: "בצע את הפעולה בלי למדוד תוצאה."
      },
      {
        title: "סמן שהתחלת",
        description: "חשוב לתת למוח סימן שהתנועה כבר התחילה.",
        action: "כתוב בסוף: התחלתי."
      }
    ]
  },
  low_energy: {
    state: "אנרגיה נמוכה",
    reflection:
      "נראה שהאנרגיה שלך נמוכה היום, ולכן גם החלטות פשוטות יכולות להרגיש כבדות יותר.",
    normalization: "זה מצב טבעי כשיש עייפות או עומס. לא צריך להילחם בזה בכוח.",
    direction: "מה שנכון עבורך עכשיו הוא לבחור פעולה קלה שלא דורשת מאמץ גדול.",
    encouragement: "גם צעד קטן מאוד יכול להחזיר תחושת שליטה.",
    steps: [
      {
        title: "בחר פעולה קלה",
        description: "אל תתחיל מהדבר הכי קשה ברשימה.",
        action: "בחר פעולה שאפשר לסיים בלי מאמץ גדול."
      },
      {
        title: "קצר את הזמן",
        description: "זמן קצר מוריד התנגדות ומקל על התחלה.",
        action: "תן לזה 10 עד 15 דקות."
      },
      {
        title: "עצור בזמן",
        description: "המטרה היא להתחיל נכון, לא להישחק.",
        action: "סיים כשנגמר הזמן."
      }
    ]
  },
  confusion: {
    state: "חוסר כיוון",
    reflection:
      "נראה שאתה מחפש כיוון, אבל יש יותר מדי מחשבות או אפשרויות שמקשות לבחור.",
    normalization: "חוסר כיוון קורה כשמנסים לראות את כל הדרך לפני שמתחילים את הצעד הראשון.",
    direction: "מה שנכון לך עכשיו הוא לבחור כיוון זמני לבדיקה, לא החלטה סופית.",
    encouragement: "בהירות נבנית תוך כדי תנועה, לא תמיד לפני שמתחילים.",
    steps: [
      {
        title: "צמצם אפשרויות",
        description: "אל תפתח עכשיו עוד כיוונים.",
        action: "כתוב שלוש אפשרויות בלבד."
      },
      {
        title: "בחר אחת לבדיקה",
        description: "הבחירה לא חייבת להיות סופית כדי להיות מועילה.",
        action: "סמן אפשרות אחת לשבוע הקרוב."
      },
      {
        title: "בדוק לפי מציאות",
        description: "אל תשפוט רק לפי מחשבות. בדוק מה קורה בפועל.",
        action: "עשה פעולה אחת שקשורה לאפשרות שבחרת."
      }
    ]
  }
};

export const generateEmotionalResult = (answers) => {
  const stateKey = mapEmotionalState(answers);

  return {
    stateKey,
    ...stateContent[stateKey]
  };
};

export const generateStartPlan = (result, refinementAnswers) => {
  const mainStep =
    refinementAnswers.blocker === "חוסר כוח"
      ? "להתחיל מפעולה קצרה וקלה, בלי לדרוש מעצמך אנרגיה שאין כרגע."
      : "לבחור פעולה אחת קטנה וברורה שמחזירה לך תנועה ושליטה.";

  const todayTask =
    refinementAnswers.smallSuccess === "להירגע"
      ? "בחר פעולה אחת שמורידה עומס, כמו לסדר משהו קטן או לכתוב מה יושב לך בראש."
      : "בחר פעולה אחת שאפשר לסיים היום, והתחייב רק אליה.";

  return {
    title: "תוכנית התחלה אישית",
    mainStep,
    reason: `זה מתאים לך כי המצב המרכזי שעלה הוא ${result.state}, ולכן התחלה קטנה תעזור בלי להוסיף עומס.`,
    todayTask,
    tomorrowTask: "מחר תחזור לאותה פעולה או תבחר פעולה אחת קרובה אליה, בלי לפתוח רשימה חדשה.",
    warning: "הימנע מלנסות לפתור הכול בבת אחת. זה עלול להחזיר עומס ותקיעות.",
    finalBoost: result.encouragement
  };
};
