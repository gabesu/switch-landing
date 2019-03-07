// Function for miving card in 3d space based on cursor position
let cards = document.querySelectorAll(".card");
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;
const myCursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  let x2 = e.clientX,
    y2 = e.clientY,
    x1 = windowWidth / 2,
    y1 = windowHeight / 2,
    // calculate angle of rotation
    angleRads = Math.atan2(y2 - y1, x2 - x1),
    angleDeg = angleRads * (180 / Math.PI) + 90,
    // calculate translateX for triangle outline
    strokeMove = -5 * ((angleDeg - 90) / 90);

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `rotate(-5deg) translateX(${-strokeMove *
      (i + 1) +
      "px"}) translateY(${strokeMove * (i + 1) + "px"})`;
  }

  // Transform position of myCursor using the x & y coordinates of the mouse position
  myCursor.style.transform = `translate(${e.clientX -
    myCursor.clientWidth / 2}px, ${e.clientY +
    window.scrollY -
    myCursor.clientHeight / 2}px)`;
});
// link hover animation to shrink cursor size
let links = document.getElementsByTagName("a");
// console.log(links);
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  // Shrink cursor on mouse over
  link.addEventListener("mouseover", e => {
    console.log(e.target, myCursor);
    myCursor.style.width = "4px";
    myCursor.style.height = "4px";

    // Get dimenstion and location of the link
    let shape = link.getBoundingClientRect();
    myCursor.style.transform = `translate(${shape.x}px, ${shape.y}px)`;
  });
  // Grow cursor on mouse over
  link.addEventListener("mouseout", () => {
    myCursor.style.width = "20px";
    myCursor.style.height = "20px";
  });
}

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
