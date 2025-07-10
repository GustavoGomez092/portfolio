import { persistentAtom, setPersistentEngine } from "@nanostores/persistent"

export const $introComplete = persistentAtom<Boolean>("introShown", false, {
  encode: JSON.stringify,
  decode: JSON.parse,
})

let listeners: Array<(...args: any[]) => void> = []

const events = {
  addEventListener(key: string, callback: (...args: any[]) => void) {
    listeners.push(callback)
  },
  removeEventListener(key: string, callback: (...args: any[]) => void) {
    listeners = listeners.filter((i) => i !== callback)
  },
  // window dispatches "storage" events for any key change
  // => One listener for all map keys is enough
  perKey: false,
}

setPersistentEngine(sessionStorage, events)

export function setIntroComplete(complete: Boolean): void {
  $introComplete.set(complete)
}
