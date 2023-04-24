const gameContainer = document.getElementById("game-container");
const player = document.getElementById("player");
const scoreValue = document.getElementById("score-value");
let score = 0;

function createFallingObject() {
  const fallingObject = document.createElement("div");
  fallingObject.classList.add("falling-object");
  fallingObject.style.left = Math.floor(Math.random() * (gameContainer.offsetWidth - fallingObject.offsetWidth)) + "px";
  gameContainer.appendChild(fallingObject);

  const fallAnimation = fallingObject.animate(
    [
      { transform: "translateY(0)" },
      { transform: `translateY(${gameContainer.offsetHeight - fallingObject.offsetHeight}px)` }
    ],
    {
      duration: 3000,
      easing: "linear",
      fill: "forwards"
    }
  );

  fallAnimation.onfinish = () => {
    if (fallingObject.parentNode) {
      fallingObject.parentNode.removeChild(fallingObject);
      score--;
      scoreValue.innerText = score;
    }
  }
}

setInterval(() => {
  createFallingObject();
}, 1000);

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.style.left = Math.max(player.offsetLeft - 50, 0) + "px";
  } else if (event.code === "ArrowRight") {
    player.style.left = Math.min(player.offsetLeft + 50, gameContainer.offsetWidth - player.offsetWidth) + "px";
  }
});

setInterval(() => {
  score++;
  scoreValue.innerText = score;
}, 1000);


