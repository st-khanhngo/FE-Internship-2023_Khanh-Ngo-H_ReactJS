export const StorageKeys = {
  CART: 'cart'
}

export function getLocalStorage<T>(key: string) {
  return JSON.parse(localStorage.getItem(key)!)
}
