import { gsap } from "gsap"
import { ScrollTrigger, ScrollSmoother } from "gsap/all"
import { setSmoothscroll } from "../stores/smoothScrollStore"

// Initializes smooth scrolling with Lenis.
// Function to set up smooth scrolling.
export const initSmoothScrolling = (): void => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const smooth = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true,
  })

  setSmoothscroll(smooth)
}
