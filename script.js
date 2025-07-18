function abrirCaja(numero) {
  const codigo = prompt(`Ingresa el código para abrir la caja ${numero}:`);
  const regalo = document.getElementById("regalo");

  if (codigo === `caja${numero}`) {
    regalo.innerHTML = `🎉 ¡Has abierto la caja ${numero}! Aquí tienes tu regalo especial 💖`;
  } else {
    regalo.innerHTML = `❌ Código incorrecto para la caja ${numero}. Intenta de nuevo.`;
  }
}
