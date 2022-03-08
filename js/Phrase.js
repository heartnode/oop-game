/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    /**
     * Phrase class accepts a phrase
     * @param {string} phrase 
     */
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.ul = document.querySelector('#phrase ul');
    }
    addPhraseToDisplay(){
        this.phrase.split('').forEach((character) =>{
           const li = document.createElement('li');
           if (character === ' '){
            li.setAttribute('class','space');
           } else {
            li.setAttribute('class', `hide letter ${character}`);
            li.textContent = character;
           }
           this.ul.appendChild(li);
        })
    }
    checkLetter(letter){
        return this.ul.querySelector(`li.${letter}`) !== null;
    }
    showMatchedLetter(letter){
        const allMatched = this.ul.querySelectorAll(`li.${letter}`);
        const revealLetter = node => {
            node.classList.remove('hide');
            node.classList.add('show')
        };
        [...allMatched].forEach(match=>revealLetter(match));
    }
}