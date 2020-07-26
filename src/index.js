import gsap from "gsap";
const tl = gsap.timeline({ repeat: 30, repeatDelay: 1 });

tl.add(
  gsap.to(".green", { scale: 0.5, y: 200, stagger: 0.5, ease: "elastic" })
);
tl.add(
  gsap.to(".orange", { scale: 0.5, y: 200, stagger: 0.5, ease: "bounce" })
);
tl.add(
  gsap.to(".blue", {
    duration: 0.5,
    scale: 0.5,
    y: 200,
    ease:
      "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
  })
);
