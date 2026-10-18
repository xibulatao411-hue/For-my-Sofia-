
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password === "092409") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
  } else {
    message.textContent = "Wrong password, baby. Try again ♡";
  }
});

const noButton = document.getElementById("no");
const buttonArea = document.getElementById("buttonArea");

function moveNoButton() {
  const area = buttonArea.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();

  const maxX = Math.max(0, (area.width - button.width) / 2);
  const x = (Math.random() * 2 - 1) * maxX;
  const y = Math.random() * 70 - 35;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

noButton.addEventListener("pointerenter", moveNoButton);

noButton.addEventListener("touchstart", function(event) {
  event.preventDefault();
  moveNoButton();
}, { passive: false });

noButton.addEventListener("click", function(event) {
  event.preventDefault();
  moveNoButton();
});

document.getElementById("yes").addEventListener("click", function() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");

  // Floating heart celebration
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");

    heart.textContent = ["♡", "♥", "✦"][
      Math.floor(Math.random() * 3)
    ];

    heart.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -30px;
      color: #a5d6a7;
      font-size: 24px;
      pointer-events: none;
      z-index: 10;
      transition: transform 3s linear, opacity 3s;
    `;

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        \`translateY(\${innerHeight + 60}px) rotate(360deg)\`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 3200);
  }
});
