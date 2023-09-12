var x=false;
var caveData ={
	info:{
		layout:[
			[13,14,14,14,14,15,14,14,14,14,14,15,14,14,14,15,14,14,14,15,14,15,14,15,14,14,14,14,14,14,14,14,14,14,16],
			[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10],
			[1,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,11],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,11],
			[4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,12],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`Cave spritesheet.png`,
	},
	states:
	[		
		//tokyo panel 0
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			//gunmodoki panel 1 1
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			// gunmodoki panel 2 2
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			//shattered front blank panel 1  3
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			// shattered front blank panel 2 4
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:64}]
			},
			// good soup 5
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:64}]
			},
			// dithered panel 1 6
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:64}]
			},
			// dithered panel 2 7
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:64}]
			},
			// full glass panel 1 8
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:128}]
			},
			// happy food man 9 
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:128}]
			},
			// shattered panel exit top 10
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:128}]
			},
			// shattered panel exit mid 11
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:128}]
			},
			// shattered panel exit bottom 12
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:192}]
			},
			// roof panel start  13
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:192}]
			},
			// roof panel mid 14
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:192}]
			},
			// chimney stock 15
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:192}]
			},
			// roof panel end 16
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:256}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,x],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,x],
			[x,8,8,8,8,x,x,x,x,x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,x],
			[x,8,8,8,8,x,x,x,x,x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,x],
			[x,8,8,8,8,x,x,x,x,x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,x],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,x],
			],
			src:`images/Cave spritesheet.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
					
					
				],
				src:`imagesCave spritesheet.png`,
			},
			states:caveData.states
			
			}