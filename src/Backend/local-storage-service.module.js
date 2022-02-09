export const getItem = (key) => JSON.parse(localStorage.getItem(key))

export const setItem = (key, value) => localStorage.setItem(key, value);

export const removeOneItem = (key) => localStorage.removeItem(key);