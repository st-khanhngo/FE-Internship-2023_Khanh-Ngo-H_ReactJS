export const StorageKeys = {
  CART: 'cart'
}

export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export function saveToLocalStorage<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}
