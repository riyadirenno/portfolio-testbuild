const $card = document.querySelector(".card-about-me-index");
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  $card.style.transform = `
    scale3d(1.03, 1.03, 1.03)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
}

$card.addEventListener("mouseenter", () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener("mousemove", rotateToMouse);
});

$card.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", rotateToMouse);
  $card.style.transform = "";
  $card.style.background = "";
});

document.getElementById("card-mousehover-glow").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card-about-me-index")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
