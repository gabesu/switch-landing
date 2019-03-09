import { TimelineMax, Animation } from "gsap";
import ScrollMagic from "scrollmagic";

// Animation for Why Switch frame
let whyTl = new TimelineMax({ paused: true });

whyTl
  .from(".why-switch .bg-rect", 0.5, { scaleX: 0 })
  .from(".why-switch h1", 0.5, { y: 20, opacity: 0 })
  .to(".why-switch .image", 1, {
    clipPath: "inset(0% 0% 0% 0%)",
    webkitClipPath: "inset(0% 0% 0% 0%)",
    ease: Power4.easeOut
  })
  .staggerFrom(".reasons li", 0.5, { y: 100, opacity: 0 }, 0.1);

let whyController = new ScrollMagic.Controller({ addIndicators: false });
let whyScene = new ScrollMagic.Scene({
  triggerElement: ".why-switch .bg-rect",
  triggerHook: 0.6,
  duration: "50%"
}).addTo(whyController); // add setTween(timeline) if you want to animate based on scroll

whyScene.on("enter", function(event) {
  whyTl.play();
});
