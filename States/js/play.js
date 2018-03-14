class crowd{
  constructor(startx, starty)
  {
 this.crowdsprite = game.add.sprite(startx, starty, 'crowd');
 game.physics.arcade.enable(this.crowdsprite);
 this.people = game.add.weapon(5, 'dude');
   this.people.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
   this.people.bulletLifespan = 300;
   this.people.bulletSpeed = 0;
   this.people.fireRate = 50;
   this.people.trackSprite(this.crowdsprite, 10, -30, true);
   this.crowdsprite.anchor.setTo(0.5,0);
 }
}
class Fighter {
  constructor(character,health,lives,startx,starty,controlnum) {


       this.character = game.add.sprite(startx, starty, character);//player character variable to access sprite from phaser and all its properties character variable is name of spritesheet to use
       this.health = health;//player start health
       this.lives = lives;

       //Respawn Animation Activator Switch
       this.respawnSwitch = false;
       //m is the respawn animation counter
       this.m = 0;

       this.startx = startx;
       this.starty = starty;

       this.controlnum = controlnum;

       this.state = 0; //player state for state machine?

       this.jumps = 0;

       this.character.anchor.setTo(0.5,0);

           //  We need to enable physics on the player
       game.physics.arcade.enable(this.character);

       //  Player physics properties. Give the little guy a slight bounce.
       this.character.body.bounce.y = 0;//0.2;
       this.character.body.gravity.y = 400;
       this.character.body.collideWorldBounds = false;
     this.character.body.setSize(20, 42, 10, 0)

       this.character.animations.add('right', [2, 3, 0], 10, true);

       //idle animation
       this.character.animations.add('idle', [0, 1], 5, true);

       //jump animation
       this.character.animations.add('jump', [8, 9], 5, true); //need to adjust animation speed

       //shield animation
       this.character.animations.add('shield', [7], 5, true);

       //punch animations
       this.character.animations.add('punch', [5], 5, true);

       //kick
       this.character.animations.add('kick', [6], 5, true);

       //player got hit animation
       this.character.animations.add('ko', [7], 5, true);


       this.character.scale.x = 2;
       this.character.scale.y = 2;

       //this.controller1 = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D , 'punch': Phaser.KeyCode.T, 'kick': Phaser.KeyCode.R});

       if(controlnum == 1)
       {
       this.controller1 = new Object;
       controller1 = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D , 'punch': Phaser.KeyCode.T, 'kick': Phaser.KeyCode.R});
     }
     else if(controlnum == 2)
     {
     this.controller2 = new Object;
     controller2 = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT , 'punch': Phaser.KeyCode.P, 'kick': Phaser.KeyCode.O});
     }



       this.weapon1 = game.add.weapon(1, 'slash');
       this.weapon1.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
       this.weapon1.bulletLifespan = 50; //50
       this.weapon1.bulletSpeed = 0; //0
       this.weapon1.fireRate = 100;
       this.weapon1.trackSprite(this.character, 28, 40, true);
       return this;
     }
  }




var playState={

  hit: function()
  {
    Player2.health=Player2.health-5;
  },
/**
  //fighter class
   Fighter: function(character,health,lives,startx,starty,controlnum)
      {

      this.character = game.add.sprite(startx, starty, character);//player character variable to access sprite from phaser and all its properties character variable is name of spritesheet to use
      this.health = health;//player start health
      this.lives = lives;

      //Respawn Animation Activator Switch
      this.respawnSwitch = false;
      //m is the respawn animation counter
      this.m = 0;

      this.startx = startx;
      this.starty = starty;

      this.controlnum = controlnum;

      this.state = 0; //player state for state machine?

      this.jumps = 0;

      this.character.anchor.setTo(0.5,0);

          //  We need to enable physics on the player
      game.physics.arcade.enable(this.character);

      //  Player physics properties. Give the little guy a slight bounce.
      this.character.body.bounce.y = 0;//0.2;
      this.character.body.gravity.y = 400;
      this.character.body.collideWorldBounds = false;
    this.character.body.setSize(20, 42, 10, 0)

      this.character.animations.add('right', [2, 3, 0], 10, true);

      //idle animation
      this.character.animations.add('idle', [0, 1], 5, true);

      //jump animation
      this.character.animations.add('jump', [8, 9], 5, true); //need to adjust animation speed

      //shield animation
      this.character.animations.add('shield', [7], 5, true);

      //punch animations
      this.character.animations.add('punch', [5], 5, true);

      //kick
      this.character.animations.add('kick', [6], 5, true);

      //player got hit animation
      this.character.animations.add('ko', [7], 5, true);


      this.character.scale.x = 2;
      this.character.scale.y = 2;

      //this.controller1 = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D , 'punch': Phaser.KeyCode.T, 'kick': Phaser.KeyCode.R});

      if(controlnum == 1)
      {
      this.controller1 = new Object;
      controller1 = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D , 'punch': Phaser.KeyCode.T, 'kick': Phaser.KeyCode.R});
    }
    else if(controlnum == 2)
    {
    this.controller2 = new Object;
    controller2 = game.input.keyboard.addKeys({ 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT , 'punch': Phaser.KeyCode.P, 'kick': Phaser.KeyCode.O});
    }



      this.weapon1 = game.add.weapon(1, 'slash');
      this.weapon1.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
      this.weapon1.bulletLifespan = 50; //50
      this.weapon1.bulletSpeed = 0; //0
      this.weapon1.fireRate = 100;
      this.weapon1.trackSprite(this.character, 28, 40, true);
      return this;
    };

*/

  updateInput: function(controller,Fighter,cooldownNum)
  {
      if (controller.left.isDown && !(Fighter.m < 120 && Fighter.m != 0))
      {
          //  Move to the left

          if (Fighter.character.scale.x > 0 ){
          Fighter.character.scale.x *=-1;
          Fighter.weapon1.trackSprite(Fighter.character, 28, -40, true);
          }

          Fighter.character.body.velocity.x = -250;
          Fighter.character.animations.play('right');
      }

      else if (controller.right.isDown && !(Fighter.m < 120 && Fighter.m != 0))
      {
          //  Move to the right

          //logic to change direction facing
          if (Fighter.character.scale.x < 0 ){
          Fighter.character.scale.x *=-1;
          Fighter.weapon1.trackSprite(Fighter.character, 28, 40, true);
          }

          Fighter.character.body.velocity.x = 250;
          Fighter.character.animations.play('right');
      }
      //else if (controller.up.isDown && Fighter.character.body.touching.down)
      else if (controller.up.isDown && Fighter.jumps <= 5 && controller.up.downDuration(80) && !(Fighter.m < 120 && Fighter.m != 0))
      {
          Fighter.character.body.velocity.y = -350;
          Fighter.jumps += 1;
      }
       else if (controller.down.isDown && Fighter.character.body.touching.down)
      {
        Fighter.character.body.velocity.x = 0;
          Fighter.character.animations.play('shield');
      }
      else if (controller.punch.isDown && controller.punch.downDuration(80) && !(Fighter.m < 120 && Fighter.m != 0))
      {
          //logic to change direction facing
          if (Fighter.character.scale.x < 0 ){
         Fighter.character.body.velocity.x = -250;
          }
          else
          {
          Fighter.character.body.velocity.x = 250;
          }

          Fighter.character.animations.play('punch');
          Fighter.weapon1.fire();
          Fighter.health += 1;


      }
      else if (controller.kick.isDown && controller.kick.downDuration(200) && !(Fighter.m < 120 && Fighter.m != 0))
      {
          //  Move to the right

          //logic to change direction facing
          if (Fighter.character.scale.x < 0 ){
         Fighter.character.body.velocity.x = -350;
          }
          else
          {
          Fighter.character.body.velocity.x = 350;
          }

          Fighter.character.animations.play('kick');
          Fighter.weapon1.fire();

          if(Fighter.character.body.touching.down)
          {
            Fighter.character.body.velocity.y = -200;
        }

      }

      else
      {
          Fighter.character.body.velocity.x = 0;
          Fighter.character.animations.play('idle');

          if(Fighter.character.body.touching.down)
          {
            Fighter.jumps = 0;
        }
      }

  },



  item: function(type, startx, starty){
    this.type = game.add.sprite(startx, starty, type);

    game.physics.arcade.enable(this.type);

    this.type.body.bounce.y = 0;//0.2;
      this.type.body.gravity.y = 400;
      this.type.body.collideWorldBounds = false;
      return this;
  },

  respawn: function(Fighter){
      console.log("Beginning of respawn");
      //this.Fighter = Fighter;
      var test = Fighter.controlnum;
      console.log(Fighter);

      if(Fighter.controlnum == 1 ){
          console.log("controlnum = 1");
          //Fighter.character.body.position.x = 200;
          Fighter.character.x = 200;
          Fighter.character.y = 300;
          Fighter.respawnSwitch = true;
          Fighter.m = 0;
      }

      else if(Fighter.controlnum == 2 ){
          console.log("controlnum = 2");
          Fighter.character.x = 600;
          Fighter.character.y = 300;
          Fighter.respawnSwitch = true;
          Fighter.m = 0;
      }

      Fighter.health = 0;
      Fighter.lives += -1;
      Fighter.character.body.velocity.x = 0;
      Fighter.character.body.velocity.y = 0;
  },

  respawnEvent: function(Fighter){
    //Respawn Switch is activated during the KO function
    if (Fighter.respawnSwitch == true){
        Fighter.m += 1;

        //Invisible moment
        if (Fighter.m < 60 && Fighter.m != 0){
          Fighter.character.body.gravity.y = 0;
          Fighter.character.visible = false;
        }
        //Book Crashing down Animation
        else if(Fighter.m >= 60 && Fighter.m < 120){
          Fighter.character.body.gravity.y = 800;
          Fighter.character.visible = true;
        }
        else{
          Fighter.character.body.gravity.y = 400;
        }

        //Makes character alpha to signify invulnerability
        if (Fighter.m <= 360){
          Fighter.character.alpha = 0.5;
        }
        else{
          Fighter.character.alpha = 1;
          Fighter.m = 0;
          Fighter.respawnSwitch = false;
        }
      }
  },

  KO:function(Fighter){
      if(Fighter.character.body.position.x < -50 || Fighter.character.body.position.x > 900){
         this.respawn(Fighter);
         addOnce(this.start,this);
      }
      else if(Fighter.character.body.position.y > 700 || Fighter.character.body.position.y < -100){
         this.respawn(Fighter);
      }
  },

  render: function () {
          // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
          if (timer.running) {
            //  game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), game.world.width * .5, 15, "#ffffff");
          }
          else {
              game.debug.text("Done!", 2, 14, "#0f0");
          }
      },

 create: function() {

      //  We're going to be using physics, so enable the Arcade Physics system
      w= 800;
      h = 600;
      game.time.advandedTiming = true;

      timer = game.time.create(false);
      timerEvent = timer.add(Phaser.Timer.MINUTE * gameMinutes + Phaser.Timer.SECOND * gameSeconds, this.timeOutGame, this);
      timer.start();

      music = game.add.audio('allstar');
      music.loopFull();

      //  A simple background for our game
      game.add.sprite(0, 0, 'sky');

      //  The platforms group contains the ground and the 2 ledges we can jump on
      platforms = game.add.group();

      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;

      // Here we create the ground.
      var ground = platforms.create(110, game.world.height - 30, 'ground');

      //  Scale it to fit the width of the game (the original sprite is ? in size)
      ground.scale.setTo(18, 1);

      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      //  Now let's create two ledges
     // var ledge = platforms.create(400, 400, 'ground');
      //ledge.body.immovable = true;

      //ledge = platforms.create(-150, 250, 'ground');
      //ledge.body.immovable = true;


      //Player1 = new Fighter('dude',  0, 3, 200,400,1);
      //Player2 = new Fighter('chick', 0, 3, 600,400,2);

    Player1 =  new Fighter('dude',  0, 3, game.world.width*0.25,game.world.height*0.5,1);
      //   Fighter: function(character,health,lives,startx,starty,controlnum)
    //  console.log(Player1);
    Player2 =  new Fighter('chick', 0, 3, game.world.width*0.75,game.world.height*0.5,2);


     	bottle = this.item('bottle', 300, 200);

      mob = new crowd(0,0);


      healthtext1 = game.add.text(0,0, `DMG ${Player1.health}`,style);

      healthtext2 = game.add.text(650,0, `DMG ${Player2.health}`,style);

      livetext1 = game.add.text(0,30, `Lives ${Player1.lives}`,style);

      livetext2 = game.add.text(650,30, `Lives ${Player2.lives}`,style);



      pauseLabel = game.add.text(game.world.width * .5, game.world.height * .15, 'Pause', {font: '50px Arial',fill: '#ffffff'});
      pauseLabel.anchor.setTo(.5,.5);
      pauseLabel.inputEnabled = true;
      pauseLabel.events.onInputUp.add(function() {
        game.paused = true;
        //Pause menu
        pauseMenu = game.add.sprite(w/2, h-250, 'menuButton');
        pauseMenu.anchor.setTo(.5,.5);

        choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
      });
      game.input.onDown.add(unpause, self);
      function unpause(event)
      {
        //only act if isPaused
        if(game.paused)
        {
          //Calculate corners of menu
          var x1 = w/2 - 270/2;
          var x2 = w/2 + 270/2;
          var y1 = h/2 - 180/2;
          var y2 = h/2 + 180/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 )
            {
              // The choicemap is an array that will help us see which item was clicked
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90); //So it finds where in the "array" the click was using this algorithm
                // Display the choice
                choiseLabel.text = 'You chose menu item: ' + choisemap[choise] + '\n' + 'Click near the edge of the screen to unpause';
            }
            else {
              // Remove the menu and the label
                pauseMenu.destroy();
                choiseLabel.destroy();

                // Unpause the game
                game.paused = false;
            }
        }
      };

timerText = game.add.text(game.world.width * .5, 40,`Time: ${timer.duration}`,{font: '40px Arial',fill: '#000000'});
timerText.anchor.setTo(.5,.5);

  },

  formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    },


  timeOutGame: function()
  {
    timer.stop();
    game.state.start('win');
  },

  update: function() {

    game.physics.arcade.overlap(Player1.character, this.win, this.Win, null, this);
    game.physics.arcade.overlap(Player2.character, this.win, this.Win, null, this);

      //  Collide the players with the platforms and eachother
    game.physics.arcade.collide(Player1.character, platforms );
    game.physics.arcade.collide(Player2.character, platforms );
    game.physics.arcade.collide(Player1.character,Player2.character);
  	game.physics.arcade.collide(Player1.weapon1.bullets, Player2.character, this.hit);
  	game.physics.arcade.collide(Player2.weapon1.bullets, Player1.character, this.hit);
  	//overlap(object1, object2, overlapCallback, processCallback, callbackContext)
      //Enable items collisions
    game.physics.arcade.collide(bottle.type, platforms);
    game.physics.arcade.collide(Player1.character, bottle.type);
  	game.physics.arcade.collide(Player2.character, bottle.type);

     	this.updateInput(controller1,Player1,cooldown1);
     	this.updateInput(controller2,Player2,cooldown2);
      this.crowdupdate(mob);


       healthtext1.text = `DMG ${Player1.health}`;
       healthtext2.text = `DMG ${Player2.health}`;

       livetext1.text = `Lives ${Player1.lives}`;
       livetext2.text = `Lives ${Player2.lives}`;


      //healthtext2 = game.add.text(690,0, `Lives ${Player2.health}`,style);
      this.KO(Player1);
      this.KO(Player2);

      this.respawnEvent(Player1);
      this.respawnEvent(Player2);
      //If out of lives, end the game
      if(Player1.lives == 0)
      {
        game.state.start('win');
      }
      if(Player2.lives == 0)
      {
        game.state.start('win');
      }

timerText.text = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));

  },

//actually is the win function
  start: function(){
   game.state.start('win');

 },

crowdupdate: function(){
	// modify x direction of mob
    if(mob.crowdsprite.body.position.x < 50){
     if(mob.crowdsprite.scale.x > 0 ){
        mob.crowdsprite.scale.x *=-1;
        mob.people.trackSprite(mob.crowdsprite, 10, -30, true);
        mob.people.bulletSpeed = 0;
        }
        mob.crowdsprite.body.velocity.x = 200;
    }
    else if(mob.crowdsprite.body.position.x > 600){
        if(mob.crowdsprite.scale.x < 0 ){
        mob.crowdsprite.scale.x *=-1;
        mob.people.trackSprite(mob.crowdsprite, 10, 30, true);
        mob.people.bulletSpeed =0;
        }
                mob.crowdsprite.body.velocity.x = -200;
    }

    // modify y direction of mob
    if(mob.crowdsprite.body.position.y < 100){
        mob.crowdsprite.body.velocity.y = 200;
    }
    else if(mob.crowdsprite.body.position.y > 500){
        mob.crowdsprite.body.velocity.y = -200;
    }
    mob.people.fire();
}

};