// Animación de corazones
function crearCorazones() {
  const container = document.querySelector(".heart-container");
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(crearCorazones, 300);

// Caja mágica
document.querySelectorAll(".box button").forEach(button => {
  button.addEventListener("click", () => {
    const box = button.parentElement;
    const correctCode = box.getAttribute("data-code").toLowerCase();
    const content = box.getAttribute("data-content");
    const userCode = prompt("Ingresá el código secreto:").toLowerCase();

    if (userCode === correctCode) {
      box.innerHTML = `
        <span class="title">🎁 Caja Abierta</span>
        <p>${content}</p>`;
      let audio = new Audio('https://www.myinstants.com/media/sounds/success-fanfare-trumpets.mp3');
      audio.play();
    } else {
      alert("Código incorrecto 😢");
    }
  });
});
