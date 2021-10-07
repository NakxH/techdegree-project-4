/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const game = new Game()
// game.startGame()

const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', () => {
  const game = new Game()
  game.startGame()
  game.handleInteraction()
});
