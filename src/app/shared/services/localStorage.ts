export enum StorageKeys {
  CART = "cart",
}

export function getLocalStorage(key: StorageKeys) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

export function saveToLocalStorage<T>(key: StorageKeys, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}
