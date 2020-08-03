import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#box", {
  duration: 5,
  motionPath: {
    curviness: 2,
    path: [
      { x: 100, y: 200 },
      { x: 300, y: 200 },
      { x: 300, y: 400 },
    ],
  },
});
