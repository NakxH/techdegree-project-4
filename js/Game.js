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
      new Phrase('james bond'),
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
    this.resetGame();
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  resetGame(){
    this.missed = 0;
    const phraseSection = document.querySelector('#phrase ul');
    phraseSection.innerHTML = '';
    const keys = document.querySelectorAll('.key');
    for(let i = 0; i < keys.length; i++){
      keys[i].classList.remove('chosen', 'wrong');
      keys[i].disabled = false;
    }
    const lostImgs = document.querySelectorAll('.tries img[src*="images/lostHeart.png"]');
    for(let i = 0; i < lostImgs.length; i++){
      lostImgs[i].src = 'images/liveHeart.png';
    }
  }

  handleInteraction(element){
    const overlay = document.querySelector('#overlay')
    if(overlay.style.display === 'block'){
      return
    }
    const chosenLetter = element.textContent;
    if (this.activePhrase.checkLetter(chosenLetter)){
      this.activePhrase.showMatchedLetter(chosenLetter);
      element.classList.add('chosen');
      if(this.checkForWin()){
        this.gameOver();
      }
    } else {
      element.classList.add('wrong');
      this.removeLife();
    }
    element.disabled = true;
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