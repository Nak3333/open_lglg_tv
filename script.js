const target = document.getElementById("target");
const yes = document.getElementById("yes");

// yes.addEventListener("click", () => {
//   alert("See you soon idol 😘🥰😍");
// });

function moveTarget() {
  const container = document.getElementById("container");
  const maxWidth = container.clientWidth - target.offsetWidth;
  const maxHeight = container.clientHeight - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

let moveCount = 0;
let hasAlerted = false;

// For desktop (hover)
target.addEventListener("mouseenter", () => {
  if (moveCount < 5) {
    moveTarget();
    moveCount++;
  }
  if (moveCount >= 5 && !hasAlerted) {
    hasAlerted = true;
    setTimeout(() => {
      alert("Jm Why you say No 😭💔");
    }, 200); // slight delay after last move
  }
});

// For mobile (tap)
target.addEventListener("touchstart", (e) => {
  if (moveCount < 3) {
    e.preventDefault(); // prevent accidental click
    moveTarget();
    moveCount++;
  }
  if (moveCount >= 3 && !hasAlerted) {
    hasAlerted = true;
    setTimeout(() => {
      alert("Why you say No 😭💔");
    }, 200);
  }
});
