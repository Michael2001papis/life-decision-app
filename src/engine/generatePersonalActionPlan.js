const getTodayTask = (answers) => {
  if (answers.actionType === "פעולה מול אנשים") {
    return "שלח הודעה אחת לאדם שיכול לעזור לך להבין את הצעד הבא.";
  }

  if (answers.actionType === "פעולה כלכלית") {
    return "כתוב מספר אחד ברור: כמה כסף, זמן או מאמץ אתה מוכן להשקיע כרגע.";
  }

  if (answers.actionType === "פעולה לימודית") {
    return "בחר מקור אחד ללמוד ממנו והקדש לו זמן קצר היום.";
  }

  if (answers.actionType === "פעולה של סדר ותכנון") {
    return "כתוב שלוש אפשרויות בלבד וסדר אותן מהקלה ביותר לכבדה ביותר.";
  }

  return "בחר פעולה קטנה ושקטה שאפשר לסיים היום בלי לפתוח עוד התלבטויות.";
};

const getWeekTask = (answers) => {
  if (answers.speed === "היום") {
    return "בצע שלוש פעולות קטנות השבוע כדי לייצר תנועה ברורה ומהירה.";
  }

  if (answers.speed === "השבוע") {
    return "קבע שני זמנים קצרים השבוע להמשך הפעולה שבחרת.";
  }

  if (answers.speed === "החודש") {
    return "בחר מסגרת בדיקה לחודש הקרוב וסמן נקודת בדיקה בסוף השבוע.";
  }

  return "שמור על קצב רגוע, אבל קבע תאריך ברור לבדיקה כדי לא להישאר באוויר.";
};

const getWarning = (answers) => {
  if (answers.blocker === "פחד לטעות" || answers.blocker === "אני מפחד להיכשל") {
    return "היזהר מלחכות לביטחון מלא. הוא יגיע אחרי פעולה קטנה, לא לפני.";
  }

  if (answers.blocker === "אין לי כוח להתחיל") {
    return "היזהר מצעד גדול מדי. הוא יגביר עומס במקום לפתוח תנועה.";
  }

  if (answers.blocker === "אני לא יודע במה לבחור") {
    return "היזהר מפתיחת עוד אפשרויות. כרגע עדיף לצמצם ולא להרחיב.";
  }

  return "היזהר מלדחות רק כדי להרגיש בטוח יותר. דחייה ארוכה מדי מחזירה תקיעות.";
};

export const generatePersonalActionPlan = (firstResult, refinementAnswers) => {
  const mainStep =
    refinementAnswers.need === "יציבות" || refinementAnswers.need === "מסגרת ברורה"
      ? "להתחיל מבחירה אחת יציבה וברורה, בלי לפתוח יותר מדי אפשרויות במקביל."
      : "להתחיל מצעד קטן שמייצר תנועה אמיתית ומחזיר לך תחושת שליטה.";

  const reason =
    refinementAnswers.need === "שקט נפשי"
      ? "כי כרגע הדבר החשוב הוא להוריד רעש פנימי ולבחור פעולה שלא מוסיפה עומס."
      : "כי כרגע ההתקדמות שלך תלויה פחות בהחלטה מושלמת ויותר בצעד ברור שאפשר לבצע.";

  return {
    title: "תוכנית הפעולה האישית שלך",
    mainStep,
    reason,
    todayTask: getTodayTask(refinementAnswers),
    weekTask: getWeekTask(refinementAnswers),
    warning: getWarning(refinementAnswers),
    finalBoost:
      firstResult?.encouragement ||
      "אתה לא צריך להיות בטוח במאה אחוז כדי להתחיל. אתה צריך להתחיל מספיק נכון כדי לקבל בהירות."
  };
};
