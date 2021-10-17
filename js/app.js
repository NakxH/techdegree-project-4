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

document.addEventListener('keyup', (e) => {
  const keys = Array.from(document.querySelectorAll('.key')).filter(key => key.textContent.toLowerCase() === e.key.toLowerCase());
  if(keys.length > 0 && keys[0].disabled === false){
    game.handleInteraction(keys[0]);
  }
})