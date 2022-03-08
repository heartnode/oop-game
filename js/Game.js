/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [
            "How are you",
            "Good game my friend",
            "Want some cheese",
            "Matching phrase game",
            "Play more play often"
        ].map(phrase => new Phrase(phrase));
        this.activePhrase = null;
    }
    startGame(){
        const phrase = this.getRandomPhrase();
        this.activePhrase = phrase;
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    handleInteraction(){
        const qwerty = document.getElementById('qwerty');
        qwerty.addEventListener('click',(event) =>{
            if (event.target.classList.contains('key')){
                const buttonClicked = event.target;
                buttonClicked.setAttribute('disabled','');
                const keyed = event.target.textContent;
                if (this.activePhrase.checkLetter(keyed)){
                    buttonClicked.classList.add('chosen');
                    this.activePhrase.showMatchedLetter(keyed);
                    if (this.checkForWin()){
                        this.gameOver('win');
                    }
                } else {
                    buttonClicked.classList.add('wrong');
                    this.removeLife();
                }
            }
        });
    }
    removeLife(){
        const tries = [...document.querySelectorAll(".tries")];
        const removingLife = tries.findLast(tryElem => tryElem.querySelector('img[src$="liveHeart.png"]') !== null);
        if (removingLife){
            removingLife.firstChild.src = 'images/lostHeart.png';
        } 
        if (document.querySelector('.tries img[src$="liveHeart.png"]')===null){
            // No more lives
            this.gameOver('lose');
        }
    }
    /**
     * To win the game all letters have to be shown
     * @return {bool} Determine if all letters have reveal
     */
    checkForWin(){
        return (document.querySelectorAll('#phrase .hide').length === 0);
    }
    gameOver(status){
        const start = document.querySelector('.start');
        const gameOverMessage = document.getElementById('game-over-message');
        switch(status){
            case 'lose':
                start.removeAttribute('style');
                start.classList.remove('win');
                start.classList.add('lose');
                gameOverMessage.textContent = 'You lose!';
                break;
            case 'win':
                start.removeAttribute('style');
                start.classList.remove('lose');
                start.classList.add('win');
                gameOverMessage.textContent = 'You win!';
                break;
        }
        this.resetGame();
    }
    resetGame (){
        const ul = document.querySelector('#phrase ul');
        ul.innerHTML = '';
    
        const keys = [...document.querySelectorAll('#qwerty .key')];
        keys.forEach(key=>{key.className="key";key.removeAttribute('disabled')});
    
        const hearts = [...document.querySelectorAll('.tries img')];
        hearts.forEach(heart=>heart.src="images/liveHeart.png");
    }
}