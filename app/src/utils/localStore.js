const setLocalStorageKey = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const getLocalStorageKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export {
  setLocalStorageKey,
  getLocalStorageKey
}