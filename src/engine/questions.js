export const categories = [
  { id: "work", label: "עבודה" },
  { id: "relationship", label: "זוגיות" },
  { id: "studies", label: "לימודים" },
  { id: "personal", label: "מצב אישי" }
];

export const questions = {
  work: [
    {
      id: "energy",
      question: "כמה אנרגיה יש לך כרגע לעבודה?",
      options: [
        { text: "נמוכה", impact: { stress: 2, stability: 1, urgency: 1 } },
        { text: "בינונית", impact: { stability: 1, money: 1 } },
        { text: "גבוהה", impact: { money: 2, risk: 1 } }
      ]
    },
    {
      id: "income",
      question: "עד כמה הכנסה היא גורם דחוף בהחלטה?",
      options: [
        { text: "לא דחוף", impact: { stability: 2 } },
        { text: "חשוב", impact: { money: 2, urgency: 1 } },
        { text: "דחוף מאוד", impact: { money: 3, urgency: 3, stress: 1 } }
      ]
    },
    {
      id: "change",
      question: "כמה אתה מוכן לשינוי משמעותי?",
      options: [
        { text: "מעדיף יציבות", impact: { stability: 3, risk: -1 } },
        { text: "פתוח בזהירות", impact: { stability: 1, risk: 1 } },
        { text: "מוכן לקפוץ קדימה", impact: { risk: 3, money: 2 } }
      ]
    },
    {
      id: "pressure",
      question: "כמה לחץ יש סביב ההחלטה?",
      options: [
        { text: "מעט", impact: { stability: 2 } },
        { text: "בינוני", impact: { urgency: 1, stress: 1 } },
        { text: "גבוה", impact: { urgency: 3, stress: 3, risk: 1 } }
      ]
    },
    {
      id: "support",
      question: "כמה תמיכה יש לך לביצוע המהלך?",
      options: [
        { text: "מעטה", impact: { risk: 2, stress: 2 } },
        { text: "מסוימת", impact: { stability: 1 } },
        { text: "חזקה", impact: { stability: 3, risk: -1 } }
      ]
    }
  ],
  relationship: [
    {
      id: "clarity",
      question: "עד כמה ברור לך מה אתה מרגיש?",
      options: [
        { text: "לא ברור", impact: { stress: 2, urgency: 1 } },
        { text: "די ברור", impact: { stability: 1 } },
        { text: "ברור מאוד", impact: { stability: 2, urgency: 1 } }
      ]
    },
    {
      id: "communication",
      question: "איך התקשורת ביניכם?",
      options: [
        { text: "קשה", impact: { stress: 3, risk: 2 } },
        { text: "סבירה", impact: { stability: 1 } },
        { text: "פתוחה", impact: { stability: 3, risk: -1 } }
      ]
    },
    {
      id: "future",
      question: "יש התאמה לגבי העתיד?",
      options: [
        { text: "לא", impact: { risk: 3, stress: 2 } },
        { text: "חלקית", impact: { urgency: 1, stability: 1 } },
        { text: "כן", impact: { stability: 3 } }
      ]
    },
    {
      id: "effort",
      question: "כמה מאמץ שני הצדדים מוכנים להשקיע?",
      options: [
        { text: "מעט", impact: { risk: 2 } },
        { text: "בינוני", impact: { stability: 1 } },
        { text: "הרבה", impact: { stability: 3, stress: -1 } }
      ]
    },
    {
      id: "timing",
      question: "כמה דחוף לקבל החלטה?",
      options: [
        { text: "אפשר לחכות", impact: { stability: 2 } },
        { text: "די דחוף", impact: { urgency: 2 } },
        { text: "דחוף מאוד", impact: { urgency: 4, stress: 2 } }
      ]
    }
  ],
  studies: [
    {
      id: "interest",
      question: "כמה התחום באמת מעניין אותך?",
      options: [
        { text: "מעט", impact: { stress: 2, risk: 1 } },
        { text: "בינוני", impact: { stability: 1 } },
        { text: "מאוד", impact: { stability: 2, money: 1 } }
      ]
    },
    {
      id: "time",
      question: "כמה זמן פנוי יש לך להשקיע?",
      options: [
        { text: "מעט", impact: { stress: 3, risk: 1 } },
        { text: "מספיק", impact: { stability: 2 } },
        { text: "הרבה", impact: { stability: 3, money: 1 } }
      ]
    },
    {
      id: "career",
      question: "כמה הלימודים מקדמים מטרה מקצועית?",
      options: [
        { text: "לא ברור", impact: { risk: 2 } },
        { text: "קצת", impact: { stability: 1 } },
        { text: "מאוד", impact: { money: 3, stability: 1 } }
      ]
    },
    {
      id: "cost",
      question: "איך העלות משפיעה עליך?",
      options: [
        { text: "כבדה", impact: { stress: 3, risk: 2 } },
        { text: "אפשרית", impact: { stability: 1 } },
        { text: "לא בעיה", impact: { stability: 2, risk: -1 } }
      ]
    },
    {
      id: "deadline",
      question: "האם יש דדליין קרוב?",
      options: [
        { text: "לא", impact: { stability: 2 } },
        { text: "כן, אבל יש זמן", impact: { urgency: 1 } },
        { text: "כן, קרוב מאוד", impact: { urgency: 4, stress: 2 } }
      ]
    }
  ],
  personal: [
    {
      id: "balance",
      question: "כמה איזון יש לך בתקופה הזאת?",
      options: [
        { text: "מעט", impact: { stress: 3, risk: 1 } },
        { text: "סביר", impact: { stability: 1 } },
        { text: "טוב", impact: { stability: 3, stress: -1 } }
      ]
    },
    {
      id: "need",
      question: "כמה הצורך בשינוי מורגש?",
      options: [
        { text: "חלש", impact: { stability: 2 } },
        { text: "בינוני", impact: { urgency: 1 } },
        { text: "חזק", impact: { urgency: 3, stress: 1 } }
      ]
    },
    {
      id: "resources",
      question: "כמה משאבים יש לך עכשיו?",
      options: [
        { text: "מעט", impact: { risk: 2, stress: 2 } },
        { text: "מספיק", impact: { stability: 1 } },
        { text: "הרבה", impact: { stability: 2, risk: -1 } }
      ]
    },
    {
      id: "confidence",
      question: "כמה ביטחון יש לך בהחלטה?",
      options: [
        { text: "נמוך", impact: { stress: 2, risk: 1 } },
        { text: "בינוני", impact: { stability: 1 } },
        { text: "גבוה", impact: { stability: 3, urgency: 1 } }
      ]
    },
    {
      id: "action",
      question: "איזה סוג פעולה הכי מתאים לך?",
      options: [
        { text: "צעד קטן", impact: { stability: 2, risk: -1 } },
        { text: "שינוי הדרגתי", impact: { stability: 1, urgency: 1 } },
        { text: "מהלך גדול", impact: { risk: 3, urgency: 2 } }
      ]
    }
  ]
};
