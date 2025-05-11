import { atom } from "nanostores"

export const $smoothScroll = atom<any>(null)

export function setSmoothscroll(smoothScroll: any): void {
  $smoothScroll.set(smoothScroll)
}
