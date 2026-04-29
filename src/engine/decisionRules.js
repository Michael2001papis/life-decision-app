export const detectDecisionPattern = (score) => {
  if (score.mentalLoad >= 6 && score.energyLevel <= 0) {
    return "overload";
  }

  if (score.clarity <= 1 && score.urgency >= 3) {
    return "confusion";
  }

  if (score.stabilityNeed >= 6 && score.riskTolerance <= 2) {
    return "securityNeed";
  }

  if (score.riskTolerance >= 5 && score.energyLevel >= 2) {
    return "riskReady";
  }

  if (score.mentalLoad >= 5 && score.clarity <= 2) {
    return "emotionalFatigue";
  }

  if (score.urgency >= 4 && score.clarity <= 3) {
    return "stuck";
  }

  return "directionSearch";
};

export const decisionRules = (score, categoryLabel) => {
  const pattern = detectDecisionPattern(score);

  const rules = {
    overload: {
      stateName: "עומס יתר",
      reflection: `מהתשובות שלך, נראה שבתחום ${categoryLabel} יש רצון להתקדם, אבל כרגע המחיר המנטלי של עוד עומס מורגש מאוד.`,
      internalAnalysis:
        "הדפוס המרכזי כאן הוא עומס יתר: יש יותר מדי משקל על ההחלטה ופחות אנרגיה פנויה להחזיק מהלך גדול.",
      conclusion:
        "הבחירה הנכונה עבורך כרגע היא להקטין את ההחלטה ולבחור מסלול פשוט, יציב ובר ביצוע.",
      actionStep:
        "בחר פעולה אחת קטנה לביצוע השבוע, וסגור מראש שהיא לא חייבת להיות הבחירה הסופית שלך."
    },
    confusion: {
      stateName: "בלבול",
      reflection: `מהתשובות שלך, נראה שבתחום ${categoryLabel} יש דחיפות מסוימת, אבל התמונה עדיין לא מספיק מסודרת בראש.`,
      internalAnalysis:
        "זה קורה כשיש לחץ לבחור כיוון לפני שהמידע הפנימי התייצב. במצב כזה החלטה גדולה מייצרת עוד רעש במקום בהירות.",
      conclusion:
        "הכיוון הנכון עבורך הוא לעצור את הלחץ לרגע ולבחור צעד שמייצר בהירות, לא התחייבות כבדה.",
      actionStep:
        "כתוב שלוש אפשרויות אמיתיות, מחק אחת שלא מתאימה, ובחר את האפשרות שהכי קל לבדוק השבוע."
    },
    directionSearch: {
      stateName: "חיפוש כיוון",
      reflection: `מהתשובות שלך, נראה שאתה מחפש כיוון ברור יותר בתחום ${categoryLabel}, בלי להיכנס למהלך גדול מדי מוקדם מדי.`,
      internalAnalysis:
        "הדפוס המרכזי הוא צורך בתנועה מדודה: יש רצון להתקדם, אבל חשוב לך להבין שהצעד הבא באמת מתאים לך.",
      conclusion:
        "הבחירה הנכונה עבורך היא להתחיל מניסוי קטן שייתן לך מידע אמיתי על ההמשך.",
      actionStep:
        "בחר ניסיון קצר של שבוע עד שבועיים, עם נקודת בדיקה ברורה בסוף התקופה."
    },
    securityNeed: {
      stateName: "צורך בביטחון",
      reflection: `מהתשובות שלך, נראה שבתחום ${categoryLabel} חשוב לך להרגיש יציבות לפני שאתה עושה שינוי משמעותי.`,
      internalAnalysis:
        "הדפוס כאן הוא צורך בביטחון. זה לא חוסר אומץ, אלא צורך לבנות בסיס לפני שמוסיפים סיכון.",
      conclusion:
        "הבחירה הנכונה עבורך היא מסגרת יציבה ופשוטה, גם אם היא לא מושלמת.",
      actionStep:
        "בחר אפשרות אחת שמרגישה בטוחה מספיק, והגדר לה התחייבות קצרה במקום החלטה לכל החיים."
    },
    riskReady: {
      stateName: "מוכנות לסיכון",
      reflection: `מהתשובות שלך, נראה שבתחום ${categoryLabel} יש לך אנרגיה ורצון להתקדם מעבר לבחירה הבטוחה ביותר.`,
      internalAnalysis:
        "הדפוס המרכזי הוא מוכנות לסיכון מחושב. יש מקום לזוז קדימה, כל עוד המחיר והגבולות ברורים מראש.",
      conclusion:
        "הכיוון הנכון עבורך הוא לבחור מהלך מתקדם יותר, אבל רק כזה שיש לו גבול סיכון ברור.",
      actionStep:
        "הגדר מראש מה אתה מוכן להשקיע, מה סימן העצירה שלך, ומה ייחשב הצלחה אחרי שבועיים."
    },
    stuck: {
      stateName: "תקיעות",
      reflection: `מהתשובות שלך, נראה שבתחום ${categoryLabel} אתה מרגיש צורך לזוז, אבל משהו בהחלטה עצמה עוצר את ההתקדמות.`,
      internalAnalysis:
        "הדפוס כאן הוא תקיעות: לא חסר רצון, חסרה פעולה קטנה מספיק כדי להתחיל בלי להרגיש שזה סוגר את כל העתיד.",
      conclusion:
        "הבחירה הנכונה עבורך היא פעולה קטנה שמחזירה תחושת שליטה ותנועה.",
      actionStep:
        "בצע היום פעולה אחת של עד 20 דקות שקשורה להחלטה, בלי לדרוש ממנה לפתור הכל."
    },
    emotionalFatigue: {
      stateName: "עייפות רגשית",
      reflection: `מהתשובות שלך, נראה שבתחום ${categoryLabel} יש עומס רגשי שמקשה לראות את הצעד הבא בפשטות.`,
      internalAnalysis:
        "זה קורה כשנמצאים יותר מדי זמן בתוך מחשבות, השוואות או התלבטות. המערכת הפנימית צריכה פחות לחץ ויותר סדר.",
      conclusion:
        "הבחירה הנכונה עבורך היא לא להכריח החלטה גדולה, אלא לבחור פעולה מרגיעה שמחזירה בהירות.",
      actionStep:
        "קבע זמן קצר לחשיבה מסודרת, כתוב מה באמת חשוב לך, ורק אחר כך בחר צעד אחד."
    }
  };

  return rules[pattern];
};
