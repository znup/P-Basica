const options = ['piedra', 'papel', 'tijera'];
const playerNames = ['Piedra', 'Papel', 'Tijera'];

// Eleccion de la PC
const getRandomChoices = (choices) => {
  // los parentesis son para declarar la funcion o para ejecutarla
  return Math.floor(Math.random() * choices.length);
};

// Mostrar mensajes del resultado

const showResultMessage = (playerChoice, pcChoice, playerNames) => {
  const outcomes = {
    '1,0': 'win', // Piedra vence Tijera
    '2,1': 'win', // Papel vence Piedra
    '0,2': 'win', // Tijera vence Papel
    '0,1': 'lose', // Piedra pierde contra Papel
    '1,2': 'lose', // Papel pierde contra Tijera
    '2,0': 'lose', // Tijera pierde contra Piedra
  };
  const result = outcomes[`${playerChoice - 1},${pcChoice}`];
  const resultMessages = {
    draw: 'Empate!',
    win: `Ganaste con ${playerNames[playerChoice - 1]}! 🎉`,
    lose: `PERDISTE ☹️ 💔 PC ganó con ${playerNames[pcChoice]}`,
  };
  return resultMessages[result] || '';
};

const playGame = (options, playerNames) => {
  const randomIndex = getRandomChoices(options);
  const playerChoice = Number(
    prompt(
      `Elige:
    1. Piedra 🪨
    2. Papel 📃
    3. Tijera ✂️`
    )
  );
  if (playerChoice >= 1 && playerChoice <= 3) {
    const pcChoice = randomIndex;
    const resultMessage = showResultMessage(
      playerChoice,
      pcChoice,
      playerNames
    );
    alert(`Elegiste ${playerNames[playerChoice - 1]}`);
    alert(`PC eligió ${playerNames[pcChoice]}`);
    alert(resultMessage);
  } else {
    alert('Perdiste, opción inválida. 👎');
  }
};

playGame(options, playerNames);
