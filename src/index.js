import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.to("circle", {
  duration: 5,
  motionPath: "m119.5,260.05c219,-4 27,-220 282,-7c255,213 374,-63 296,-66",
});
