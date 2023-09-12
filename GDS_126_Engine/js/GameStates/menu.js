/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.makeSprite(buttonData)
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/start_screen_.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`background`)
		}

		//Hover Effect Graffic
		startButton.changeState(`hover`)
	}
	else
	{
		//Default Button Graphic
		startButton.changeState (`idle`)
	}
	
	menuBackground.drawStaticImage();
	startButton.render(`drawSprite`)
}