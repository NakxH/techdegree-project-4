/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase){
    this.phrase = phrase
  }

  addPhraseToDisplay(){
    const phraseSection = document.querySelector('#phrase ul');
    let letter = this.phrase
      .split('')
      .reduce(
        (acc, letter) => acc += `<li class="${letter === ' ' ? 'space' : `letter hide ${letter}`}">${letter}</li>`,
        ''
      );
    phraseSection.innerHTML = letter;
  }

  checkLetter(letter){
    return this.phrase.includes(letter)
  }

  showMatchedLetter(letter){
    const matchingLetters = document.querySelectorAll(`.${letter}`);
    for(let i = 0; i < matchingLetters.length; i++){
      matchingLetters[i].classList.remove('hide');
      matchingLetters[i].classList.add('show');
    }
  }
}