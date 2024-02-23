import { APP_PREFIX } from "../constants/APP_PREFIX"

function set(key: string, value: string) {
    return localStorage.setItem(`${APP_PREFIX}/${key}`, value)
}

function get(key: string) {
    const value = localStorage.getItem(`${APP_PREFIX}/${key}`)
    if (!value) {
        console.warn(`@${APP_PREFIX} storage: ${key} not found in storage`)
        return;
    }
    return value
}

function remove(key: string) {
    const value = localStorage.getItem(`${APP_PREFIX}/${key}`)
    if (!value) {
        console.warn(`@${APP_PREFIX} storage: ${key} is already empty`)
    }
    return localStorage.removeItem(`${APP_PREFIX}/${key}`)
}

function setJSON<T extends object>(key: string, value: T) {
    const jsonParsedValue = JSON.stringify(value);
    if (!jsonParsedValue) {
        console.warn(`@${APP_PREFIX} storage: value couldn't be converted.`)
        return;
    }
    return localStorage.setItem(`${APP_PREFIX}/${key}`, jsonParsedValue)
}

function getJSON<T extends object>(key: string) {
    const stringValue = localStorage.getItem(`${APP_PREFIX}/${key}`)
    if (!stringValue) {
        console.warn(`@${APP_PREFIX} storage: not found in storage.`)
        return;
    }
    const jsonParsedValue: T = JSON.parse(stringValue)
    
    return jsonParsedValue
}

const storage = {
    get,
    set,
    remove,
    setJSON,
    getJSON
}

export default storage