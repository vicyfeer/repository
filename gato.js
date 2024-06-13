let currentPlayer = "X"; // currentPlayer es inicializado como "X" para que el primer jugador sea "X"
let cells = document.querySelectorAll("td"); // Selecciona todos los elementos "td" y los almacena en la variable "cells"

cells.forEach(function (cell) {
  // Itera sobre cada elemento "td" y agrega un evento "click" a cada uno
  cell.addEventListener("click", function () {
    // Cuando se hace click en un elemento "td", se ejecuta la función anónima
    if (cell.textContent === "") {
      // Si el elemento "td" no tiene texto, se agrega el texto del jugador actual
      cell.textContent = currentPlayer; // Agrega el texto del jugador actual al elemento "td"
      cell.classList.add(currentPlayer); // Agrega la clase del jugador actual al elemento "td"
      if (checkWin()) {
        // Si checkWin() retorna true, se muestra un mensaje de victoria y se reinicia el juego
        alert(currentPlayer + " wins!"); // Muestra un mensaje de victoria
        reset(); // Reinicia el juego
      } else if (checkDraw()) {
        // Si checkDraw() retorna true, se muestra un mensaje de empate y se reinicia el juego
        alert("It's a draw!"); // Muestra un mensaje de empate
        reset(); // Reinicia el juego
      } else {
        // Si no se cumple ninguna de las condiciones anteriores, se cambia el jugador actual
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Si el jugador actual es "X", se cambia a "O", de lo contrario, se cambia a "X"
      }
    }
  });
});

// checkWin() retorna true si el jugador actual tiene 3 celdas en línea
function checkWin() {
  // win es inicializado como false
  let win = false;
  // winningCombos contiene todas las combinaciones de celdas que pueden ganar
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Itera sobre cada combinación de celdas
  for (let combo of winningCombos) {
    // Si el contenido de la celda en la posición 0, 1 y 2 de la combinación actual es igual al jugador actual,
    // se retorna true
    if (
      cells[combo[0]].textContent === currentPlayer &&
      cells[combo[1]].textContent === currentPlayer &&
      cells[combo[2]].textContent === currentPlayer
    ) {
      win = true;
      break;
    }
  }

  // Retorna true si el jugador actual tiene 3 celdas en línea
  return win;
}

// checkDraw() retorna true si todas las celdas están llenas
function checkDraw() {
  let draw = true;

  // Itera sobre cada celda
  for (let cell of cells) {
    // Si la celda actual está vacía, se retorna false
    if (cell.textContent === "") {
      draw = false;
      break;
    }
  }

  return draw;
}

// reset() reinicia el juego
function reset() {
  // Itera sobre cada celda
  cells.forEach(function (cell) {
    // Elimina el texto de la celda actual y elimina la clase "X" o "O"
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
  // Reinicia el jugador actual
  currentPlayer = "X";
}
