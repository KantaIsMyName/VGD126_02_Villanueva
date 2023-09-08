/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/TrueSpriteSheetChar.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:112, height:125, startX:0, startY:0},
				{width:112, height:125, startX:111, startY:0},
				{width:112, height:125, startX:222, startY:0},
				{width:112, height:125, startX:333, startY:0},
				{width:112, height:125, startX:444, startY:0},
				{width:112, height:125, startX:555, startY:0},
				{width:112, height:125, startX:666, startY:0},
				{width:112, height:125, startX:777, startY:0},
				{width:112, height:125, startX:888, startY:0}
				
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:8,
			cycle:true,
			frames:
			[
				{width:112, height:125, startX:0, startY:125},
				{width:112, height:125, startX:111, startY:125},
				{width:112, height:125, startX:222, startY:125},
				{width:112, height:125, startX:333, startY:125},
				{width:112, height:125, startX:444, startY:125},
				{width:112, height:125, startX:555, startY:125}
			]
		},
		//The jump animation 
		jump:
		{
			fps:3,
			cycle:false,
			frames:
			[
				{width:112, height:125, startX:0, startY:375},
				{width:112, height:125, startX:222, startY:375},
				{width:112, height:125, startX:333, startY:375},
				{width:112, height:125, startX:444, startY:375},
				{width:112, height:125, startX:555, startY:375}			
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:112, height:125, startX:555, startY:375},
				{width:112, height:125, startX:333, startY:375},
				{width:112, height:125, startX:222, startY:375}
				
			]
		},
		//The attack animation 
		attack:
		{
			fps:10,
			cycle:true,
			//width:300,
			frames:
			[
				{width:112, height:125, startX:111, startY:250},
				{width:112, height:125, startX:222, startY:250},
				
			]
		},

		//The bullets animation 
		bullets:
		{
			fps:10,
			cycle:true,
			//width:300,
			frames:
			[
				{width:112, height:125, startX:0, startY:500},
				{width:112, height:125, startX:111, startY:500},
				{width:112, height:125, startX:222, startY:500},
				{width:112, height:125, startX:333, startY:500}
				
			]
		}
	}
		
}