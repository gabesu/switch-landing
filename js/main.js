// Function for miving card in 3d space based on cursor position
let cards = document.querySelectorAll(".card");
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

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

  const myCursor = document.getElementById("cursor");
  // Transform position of myCursor using the x & y coordinates of the mouse position
  myCursor.style.transform = `translate(${e.clientX -
    myCursor.clientWidth / 2}px, ${e.clientY +
    window.scrollY -
    myCursor.clientHeight / 2}px)`;
});
