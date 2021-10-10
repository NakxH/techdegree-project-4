/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(){
    this.missed = 0
    this.phrases = this.createPhrases()
    this.activePhrase = null
  }

  createPhrases(){
    let phrases = [
      new Phrase('starwars'),
      new Phrase('forest gump'),
      new Phrase('titanic'),
      new Phrase('green mile'),
      new Phrase('shawshank redemption')
    ]
    return phrases
  }

  getRandomPhrase(){
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  startGame(){
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(){
    const keyboard = document.querySelector('#qwerty');
    keyboard.addEventListener('click', e => {
      const chosenLetter = e.target.textContent;
      if (this.activePhrase.checkLetter(chosenLetter)){
        this.activePhrase.showMatchedLetter(chosenLetter);
        if(this.checkForWin()){
          this.gameOver();
        }
      } else {
        this.removeLife()
      }
    })
  }

  checkForWin(){
    return document.querySelectorAll('.hide').length === 0;
  }

  removeLife(){
    this.missed++;
    const heartImg = document.querySelector('.tries img[src*="images/liveHeart.png"]');
    heartImg.src = 'images/lostHeart.png';
    if(this.missed === 5){
      this.gameOver();
    }
  }

  gameOver(){
    const overlay = document.querySelector('#overlay');
    const overlayTitle = document.querySelector('#game-over-message')
    overlay.style.display = 'block';
    if (this.missed === 5){
      overlayTitle.innerHTML = 'You Lost!'
      overlay.classList = 'lose'
    } else {
      overlayTitle.innerHTML = 'You Won!'
      overlay.classList = 'win'
    }
  }
}