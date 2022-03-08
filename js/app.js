/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let isRefresh = false;
const game = new Game();

document.getElementById('btn__reset').addEventListener('click',()=>{
    game.startGame();
    if (!isRefresh){
        isRefresh = true;
        game.handleInteraction();
        document.addEventListener('keyup',(e)=>{
            const phrase = game.activePhrase;
            if (/^[a-z]$/i.test(e.key)){
                const keyed = e.key.toLowerCase();
                const simulateButton = [...document.querySelectorAll('#qwerty .key')].find(key=>key.textContent === keyed);
                simulateButton.click();
            }
        });
    }
    document.querySelector('.start').style.display='none';
});

