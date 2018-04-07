console.log("loadstate reached");
var loadState={

	preload: function(){
		var loadingLabel= game.add.text(80,150,'Loading...',{font: '30px Courier',fill: '#ffffff'});


				//game.load.image('sky', 'assets/sky.png');
				game.load.image('sky', 'https://ufosc.github.io/marston-vs-west/States/Assets/TestStage2.png');
				//game.load.image('ground', 'assets/platform.png');
				//game.load.image('ground', 'assets/platform2.png');
				game.load.image('ground', 'https://ufosc.github.io/marston-vs-west/States/Assets/floorblock.png');
				game.load.image('star', 'https://ufosc.github.io/marston-vs-west/States/Assets/star.png');
				//game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

				//game.load.spritesheet('dude', 'https://ufosc.github.io/marston-vs-west/States/Assets/Fighter1master.png', 36, 42);
				//game.load.spritesheet('chick', 'https://ufosc.github.io/marston-vs-west/States/Assets/Fighter2master.png', 36, 42);
				
				game.load.spritesheet('dude', 'https://ufosc.github.io/marston-vs-west/States/Assets/TESTFIGHTER1.png', 64, 84);
				game.load.spritesheet('chick', 'https://ufosc.github.io/marston-vs-west/States/Assets/TESTFIGHTER2.png', 64, 84);
		
				game.load.image('hitboxTest', 'https://ufosc.github.io/marston-vs-west/States/Assets/testHitbox.png');
				game.load.spritesheet('baddie', 'https://ufosc.github.io/marston-vs-west/States/Assets/baddie.png', 32, 32 );
				game.load.spritesheet('slash', 'https://ufosc.github.io/marston-vs-west/States/Assets/slash (1).png', 64, 64 );
				game.load.spritesheet('slash2', 'https://ufosc.github.io/marston-vs-west/States/Assets/slash.png', 32, 32 );
				game.load.spritesheet('helmet', 'https://ufosc.github.io/marston-vs-west/States/Assets/helmet.png', 32, 32 );
				game.load.spritesheet('bottle', 'https://ufosc.github.io/marston-vs-west/States/Assets/bottle.png', 32, 32 );
				game.load.spritesheet('book', 'https://ufosc.github.io/marston-vs-west/States/Assets/book.png', 32, 32 );
				game.load.spritesheet('Sandbag', 'https://ufosc.github.io/marston-vs-west/States/Assets/sandbag.png', 32, 32 );
				
				//Virtual controller assets
				game.load.image('leftButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonLeftbig.png');
				game.load.image('rightButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonRightbig.png');
				game.load.image('upButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonUpbig.png');
				game.load.image('downButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonDownbig.png');

				game.load.image('aButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonAbig.png');
				game.load.image('bButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonBbig.png');
				game.load.image('xButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonXbig.png');
				game.load.image('yButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/ButtonYbig.png');
		
				//Menu assets
				game.load.image('startButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/startButton.png');
				game.load.image('optionsButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/optionsButton.png');
				game.load.image('quitButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/quitButton.png');
				game.load.image('creditsButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/creditsButton.png');
				game.load.image('menuButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/menuButton.png');
				this.game.load.audio('creditsMusic', 'https://ufosc.github.io/marston-vs-west/States/Assets/creditsTestMusic.ogg');
				this.game.load.audio('menuMusic', 'https://ufosc.github.io/marston-vs-west/States/Assets/creditsTestMusic.ogg');
				this.game.load.audio('allstar', 'https://ufosc.github.io/marston-vs-west/States/Assets/fight.ogg');
				game.load.image('marstonPic', 'https://ufosc.github.io/marston-vs-west/States/Assets/thegreatestlibrary.jpeg');
				game.load.image('westPic', 'https://ufosc.github.io/marston-vs-west/States/Assets/theworstlibrary.jpg');
				game.load.image('fullScreenButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/fullScreenButton.png');
				game.load.image('displayButton1', 'https://ufosc.github.io/marston-vs-west/States/Assets/displayButton1.png');
				game.load.image('displayButton2', 'https://ufosc.github.io/marston-vs-west/States/Assets/displayButton2.png');
				game.load.image('displayButton3', 'https://ufosc.github.io/marston-vs-west/States/Assets/displayButton3.png');
				game.load.image('displayButton4', 'https://ufosc.github.io/marston-vs-west/States/Assets/displayButton4.png');
				game.load.image('player1cssIcon', 'https://ufosc.github.io/marston-vs-west/States/Assets/player1cssIcon.png');
				game.load.image('player2cssIcon', 'https://ufosc.github.io/marston-vs-west/States/Assets/player2cssIcon.png');
				game.load.image('minusButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/minusButton.png');
				game.load.image('plusButton', 'https://ufosc.github.io/marston-vs-west/States/Assets/plusButton.png');
				game.load.image('dudeIcon', 'https://ufosc.github.io/marston-vs-west/States/Assets/dudeIcon.png');
				game.load.image('chickIcon', 'https://ufosc.github.io/marston-vs-west/States/Assets/chickIcon.png');
				game.load.spritesheet('crowd', 'https://ufosc.github.io/marston-vs-west/States/Assets/dude.png', 32, 48);
				game.load.image('vsIcon', 'https://ufosc.github.io/marston-vs-west/States/Assets/vsIcon.png');
				game.load.image('computerIcon', 'https://ufosc.github.io/marston-vs-west/States/Assets/aiImage.jpg')

		},
	create: function(){
		music = game.add.audio('menuMusic');
		music.loopFull();
		game.state.start('menu');

	}
};
