import { TimelineMax, Animation } from "gsap";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

// Animation for .switch-account frame
let accountTl = new TimelineMax({ paused: true });

accountTl
  .from(".switch-account .content", 0.5, { scaleX: 0 })
  .from(".switch-account h1", 0.5, { y: 20, opacity: 0 }, "+=0.5")
  .staggerFrom(".switch-account li", 0.5, { y: 100, opacity: 0 }, 0.1)
  .staggerFrom(".switch-account .card", 0.3, { y: 100, opacity: 0 }, 0.1)
  .from(".switch-account .info", 0.3, { y: 10, opacity: 0 }, "+=0.5");

let accountController = new ScrollMagic.Controller({ addIndicators: false });
let accountScene = new ScrollMagic.Scene({
  triggerElement: ".switch-account .content",
  triggerHook: 0.6,
  duration: "50%"
}).addTo(accountController); // add setTween(timeline) if you want to animate based on scroll

accountScene.on("enter", function(event) {
  accountTl.play();
});
