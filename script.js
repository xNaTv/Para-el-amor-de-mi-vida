document.querySelectorAll(".box button").forEach(button => {
  button.addEventListener("click", () => {
    const box = button.parentElement;
    const correctCode = box.getAttribute("data-code").toLowerCase();
    const content = box.getAttribute("data-content");
    const link = box.querySelector(".title").getAttribute("href");
    const titulo = box.querySelector(".title").innerText;

    const userCode = prompt("Ingresá el código secreto:").toLowerCase();

    // Sonido de éxito
    let audio = new Audio('https://www.myinstants.com/media/sounds/success-fanfare-trumpets.mp3');
    audio.play();

    if (userCode === correctCode) {
      box.innerHTML = `
        <div class="desbloqueada">
          <a href="${link}" class="title" target="_blank">${titulo}</a>
          <p>${content}</p>
        </div>`;
    } else {
      alert("Código incorrecto 😢");
    }
  });
});
