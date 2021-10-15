/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const game = new Game()
// game.startGame()

const startGameButton = document.querySelector('#btn__reset');
const game = new Game();
startGameButton.addEventListener('click', () => {
  game.startGame()
});

const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.tagName === 'BUTTON'){
    game.handleInteraction(e.target);
  }
})