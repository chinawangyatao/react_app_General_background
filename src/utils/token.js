const key = "pc-key";
export function setToken(token) {
  return window.localStorage.setItem(key, token);
}
export function getToken() {
  return window.localStorage.getItem(key);
}
export function removeToken() {
  return window.localStorage.removeItem(key);
}
