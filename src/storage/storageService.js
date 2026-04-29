const STORAGE_KEY = "lifeDecisionHistory";

export const saveDecision = (data) => {
  const existing = getHistory();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([data, ...existing]));
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
