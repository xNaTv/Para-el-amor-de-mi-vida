// Función para crear corazones cayendo
function crearCorazones() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(crearCorazones, 300);

// Manejo de cajas
document.querySelectorAll(".box button").forEach(button => {
  button.addEventListener("click", () => {
    const box = button.parentElement;
    const correctCode = box.getAttribute("data-code").toLowerCase();
    const content = box.getAttribute("data-content");
    const titleLink = box.querySelector("a");
    const url = titleLink.href;
    const userCode = prompt("Ingresá el código secreto:").toLowerCase();

    let audio = new Audio('https://www.myinstants.com/media/sounds/success-fanfare-trumpets.mp3');
    audio.play();

    if (userCode === correctCode) {
      box.innerHTML = `
        <div class="desbloqueada">
          <a class="title" href="${url}" target="_blank">${titleLink.textContent}</a>
          <p>${content}</p>
        </div>`;
    } else {
      alert("Código incorrecto 😢");
    }
  });
});
