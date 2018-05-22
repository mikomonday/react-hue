export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('settings', serializedState);
  } catch (err) {
    // Ignore errors for now
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('settings');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};