const STORAGE_KEY = "lifeDecisionHistory";

export const saveDecision = (data) => {
  const existing = getHistory();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([data, ...existing]));
};

export const updateDecision = (decisionId, updates) => {
  const existing = getHistory();
  const updated = existing.map((item) =>
    item.id === decisionId ? { ...item, ...updates } : item
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getHistory = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};
