import gsap from "gsap";

gsap.to(".element", 1, {
  scale: 0.5,
  stagger: { amount: 1.5, grid: "auto", from: "center" },
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
