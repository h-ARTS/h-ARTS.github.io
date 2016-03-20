/* Remember these numbers:
	canvas width: 606
	canvas heigth: 707
*/

// Enemies our player must avoid
var surprise = 'images/surprise.jpg';
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x = x;
	this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //This crash function is when the player is crashing with the enemy then the player goes back to the start.
	this.crash = function(){ 
		if (((this.y > player.y - 30) && 
			(this.y < player.y + 30))&&
			((this.x > player.x - 50) && 
			(this.x < player.x + 30))){
				player.x = 300;
				player.y = 489;
		}
	};
	//This is the space between every row of the bugs.
	if (this.x < 606){
		this.x = (this.x + dt * Math.floor(Math.random()* 600)); 
		this.crash();
    } 
    else {
		this.x = Math.floor(Math.random() * (-400)) - 300;
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var spawn;
for (spawn = 0; spawn < 4; spawn++) { 
   		allEnemies[spawn] = new Enemy(Math.floor(Math.random()), ((spawn+1)*55)+(spawn*30));
};

// This is our kitten girl player.
var Player = function() {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 489;
    this.score = 0;
};

var player = new Player();
//This is the surprise after getting 50 points
Player.prototype.update = function(dt){

	//Whenever the player reaches water, you'll get score
	if (this.y <= 60) { 
        this.score += 1;
        player.x = 200;
		player.y = 489;
	}
};

//To render the Counter for the score and to render the player
Player.prototype.render = function() {
    	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		ctx.font = 'bold 25px Arial';
    	ctx.fillText('SCORE: ' + this.score, 460, 90);
    	//When the score reaches 10, you'll see a picture!
    	if (this.score === 10){
			ctx.drawImage(Resources.get(surprise), 0, 120);
			ctx.font = 'bold 75px Impact';
			ctx.fillStyle = 'white';
			ctx.fillText('GAME OVER!', 120, 190);
			ctx.fillText('BE A FREAK!', 120, 600);
			ctx.strokeText('GAME OVER!', 120, 190);
			ctx.strokeText('BE A FREAK!', 120, 600);
	 	} 
};
//Borders here in game!! Do not cross!!
Player.prototype.handleInput = function(direction){
	if (((player.y < 60) && (direction === "up"))||
		((player.y > 450) && (direction === "down"))||
		((player.x < 0) && (direction === "left"))||
		((player.x > 450) && (direction === "right")))
	{
		return;
	}
	
//With if statements you can move the player!	
		if (direction === "up"){
			player.y = player.y - 83;
			}
		else if (direction === "down"){
			player.y = player.y + 83;	
			}			
		else if (direction === "right"){
			player.x = player.x + 101;	
			}
		else if (direction === "left"){
			player.x = player.x - 101;	
			}
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        65: 'left',
        38: 'up',
        87: 'up',
        39: 'right',
        68: 'right',
        40: 'down',
        83: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
