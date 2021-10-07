/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(){
    this.missed
    this.phrases = this.createPhrases()
    this.activePhrase
  }
  createPhrases() {
    let phrases = [
      {
        phrase: 'starwars'
      },
      {
        phrase: 'forest gump'
      },
      {
        phrase: 'titanic'
      },
      {
        phrase: 'green mile'
      },
      {
        phrase: 'shawshank redemption'
      }
    ]
    return phrases
  }
  getRandomPhrase(){
    let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
}