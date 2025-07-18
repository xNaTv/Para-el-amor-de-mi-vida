document.querySelectorAll(".box button").forEach(button => {
  button.addEventListener("click", () => {
    const box = button.parentElement;
    const correctCode = box.getAttribute("data-code").toLowerCase();
    const content = box.getAttribute("data-content");

    const userCode = prompt("Ingresá el código secreto:").toLowerCase();
    
    if (userCode === correctCode) {
      let audio = new Audio('https://www.myinstants.com/media/sounds/success-fanfare-trumpets.mp3');
      audio.play();

      box.innerHTML = `
        <div class="open-animation">
          <span class="title">✅ Desbloqueada</span>
          <p>${content}</p>
        </div>`;
    } else {
      alert("Código incorrecto 😢");
    }
  });
});
