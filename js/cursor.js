// Function for miving card in 3d space based on cursor position
let cards = document.querySelectorAll(".card");
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;
const myCursor = document.getElementById("cursor");

// Calculation for custom cursor translate position
const CursorFollow = e => {
  myCursor.style.transform = `translate(${e.clientX -
    myCursor.clientWidth / 2}px, ${e.clientY +
    window.scrollY -
    myCursor.clientHeight / 2}px)`;
};

// Calculate custom cursor position on scroll/wheel
document.addEventListener("wheel", e => {
  CursorFollow(e);
  let scrollDistance = e.deltaY; // Change in scroll

  let cursorTranslate = myCursor.style.transform; // Get curso translate properties
  let resY = cursorTranslate.split("px")[1];
  let resX = cursorTranslate.split(", ");
  let translateX = resX[0].split("translate(")[1].split("px")[0]; // Split to get X translate property
  let translateY = resY.split(", ")[1]; // Split to get Y translate property

  // Subtract scroll distance to translate Y property to get new cursor position after scroll
  myCursor.style.transform = `translate(${translateX}px, ${translateY -
    scrollDistance}px)`;
});

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
  CursorFollow(e);
});

// link hover animation to shrink cursor size
let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  // Shrink cursor on mouse over
  link.addEventListener("mouseover", e => {
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
