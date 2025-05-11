import { atom } from "nanostores"

export const $introComplete = atom<Boolean>(false)

export function setIntroComplete(complete: Boolean): void {
  $introComplete.set(complete)
}
