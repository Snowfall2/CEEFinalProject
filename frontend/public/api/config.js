export const BACKEND_URL = "http://localhost:3000";

// window.myAppData

localStorage.setItem('myName', '')

export function setMyName(name) {
    localStorage.setItem('myName', name)
}

localStorage.setItem('myPIN', '')

export function setMyPIN(pin) {
    localStorage.setItem('myPIN', pin)
}
