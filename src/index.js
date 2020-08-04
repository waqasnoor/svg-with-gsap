import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#box", {
  duration: 5,
  motionPath: {
    curviness: 2,
    path: [
      { x: 100, y: 100 },
      { x: 400, y: 100 },
      { x: 400, y: 400 },
      { x: 100, y: 400 },
      { x: 100, y: 100 },
    ],
  },
});
