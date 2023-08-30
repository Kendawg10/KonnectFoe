const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/** 
 * Listens for direction to move token
 */
 document.addEventListener('keydown', function(event){
    game.handleKeydown(event);
 });

 /**
 *  Starts a new game 
 */
  document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    this.style.display = 'none';
    document.getElementById('game-over').style.visibility = 'hidden';
    return false;
  });