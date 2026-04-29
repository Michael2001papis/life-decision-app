export const decisionRules = (score) => {
  if (score.urgency > 5 && score.stability >= score.risk) {
    return "כדאי לבחור פתרון יציב ובטוח ולפעול כבר עכשיו בצעד מוגדר.";
  }

  if (score.money > 5 && score.risk > 3) {
    return "אפשר לשקול מהלך עם סיכון גבוה יותר, אבל רק אחרי בדיקת מחיר ברור.";
  }

  if (score.stress > 6 && score.risk >= score.stability) {
    return "עדיף לא לקבל החלטה חדה מתוך לחץ. בחר צעד קטן שמחזיר שליטה.";
  }

  if (score.stability > score.risk + 2) {
    return "הכיוון הנכון הוא פעולה יציבה, הדרגתית וברורה.";
  }

  return "כדאי לעצור, לנתח מחדש ולבחור צעד קטן שאפשר לבצע השבוע.";
};
