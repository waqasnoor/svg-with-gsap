import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
const tl = gsap.timeline({ repeat: 30, repeatDelay: 1 });
tl.timeScale(0.5);
tl.to(".green", {
  scale: 0.5,
  y: 200,
  stagger: 0.5,
  ease: "elastic",
  rotation: 60,
})
  .addLabel("orangeAndBlue")
  .to(
    ".orange",
    { scale: 0.5, y: 200, stagger: 0.5, ease: "bounce", rotation: 120 },
    "orangeAndBlue"
  )
  .to(
    ".blue",
    {
      duration: 0.5,
      scale: 0.5,
      y: 200,
      ease: "bounce",
      rotation: 180,
    },
    "orangeAndBlue"
  );
