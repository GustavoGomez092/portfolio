import { magicMouse } from "magicmouse.js"

export default function initMagicMouse() {
  const options = {
    outerStyle: "circle",
    hoverEffect: "pointer-blur",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 41,
    outerHeight: 41,
  }
  magicMouse(options)
}
