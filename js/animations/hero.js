import { TimelineMax, Animation, Power2 } from "gsap";
import "typesplit";

let heroHeading = new SplitType(".hero-content h1", {
  split: "lines"
});
let heroCaption = new SplitType(".hero-content p", {
  split: "lines"
});

//Animation for Hero frame

let heroAnimation = new TimelineMax();

heroAnimation
  .staggerFrom(
    heroHeading.lines,
    1,
    { y: 20, opacity: 0, ease: Back.easeOut.config(1.7) },
    0.3
  )
  .from(".phone", 1, { x: -20, opacity: 0, ease: Back.easeOut.config(1.7) })
  .staggerFrom(
    heroCaption.lines,
    0.5,
    { y: 20, opacity: 0, ease: Back.easeOut.config(1.7) },
    0.05
  )
  .from(".hero-content .button", 1, {
    y: 10,
    opacity: 0,
    ease: Back.easeOut.config(1.7)
  })
  .from(".navigation", 0.3, { y: -10, opacity: 0, ease: Power2.easOut });
