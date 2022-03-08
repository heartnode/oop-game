/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//When "Start Game" is pushed game will start
document.getElementById('btn__reset').addEventListener('click',()=>{
    //Instantiate a game object to keep track of all the game states
    const game = new Game();
    //Start the game UI
    game.startGame();
    //Setup handle interaction
    game.handleInteraction();    
    //Hides the start message overlay
    document.querySelector('.start').style.display='none';
});

// Exceed Expectation listen for Keyboard event
const keyHandler = (e)=>{
//Accepts a-z keys only
if (/^[a-z]$/i.test(e.key)){
    //Find the key in the corresponding letter button on the UI and triggers the click event.
    const keyed = e.key.toLowerCase();
    const simulateButton = [...document.querySelectorAll('#qwerty .key')].find(key=>key.textContent === keyed);
    simulateButton.click();
}
};
// Enable listening for keyboard event
document.addEventListener('keyup',keyHandler);