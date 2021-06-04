/**
	State that loads all the resources for the game.
	Code by Rob Kleffner, 2011
*/

Mario.LoadingState = function() {
    this.Images = [];
    this.ImagesLoaded = false;
    this.ScreenColor = 0;
    this.ColorDirection = 1;
    this.ImageIndex = 0;
    this.SoundIndex = 0;
};

Mario.LoadingState.prototype = new Enjine.GameState();

Mario.LoadingState.prototype.Enter = function() {
    var i = 0;
    for (i = 0; i < 15; i++) {
        this.Images[i] = {};
    }
    
    this.Images[0].name = "background";
    this.Images[1].name = "endScene";
    this.Images[2].name = "enemies";
    this.Images[3].name = "fireMario";
    this.Images[4].name = "font";
    this.Images[5].name = "gameOverGhost";
    this.Images[6].name = "items";
    this.Images[7].name = "logo";
    this.Images[8].name = "map";
    this.Images[9].name = "mario";
    this.Images[10].name = "particles";
    this.Images[11].name = "racoonMario";
    this.Images[12].name = "smallMario";
    this.Images[13].name = "title";
    this.Images[14].name = "worldMap";
    if(RTXof == false) {
        this.Images[0].src = "images/RTXf/bgsheet.png";
        this.Images[1].src = "images/RTXf/endscene.gif";
        this.Images[2].src = "images/RTXf/enemysheet.png";
        this.Images[3].src = "images/RTXf/firemariosheet.png";
        this.Images[4].src = "images/RTXf/font.gif";
        this.Images[5].src = "images/RTXf/gameovergost.gif";
        this.Images[6].src = "images/RTXf/itemsheet.png";
        this.Images[7].src = "images/RTXf/logo.gif";
        this.Images[8].src = "images/RTXf/mapsheet.png";
        this.Images[9].src = "images/RTXf/mariosheet.png";
        this.Images[10].src = "images/RTXf/particlesheet.png";
        this.Images[11].src = "images/RTXf/racoonmariosheet.png";
        this.Images[12].src = "images/RTXf/smallmariosheet.png";
        this.Images[13].src = "images/RTXf/title.gif";
        this.Images[14].src = "images/RTXf/worldmap.png";
    }else{
        this.Images[0].src = "images/RTXo/bgsheet.png";
        this.Images[1].src = "images/RTXo/endscene.gif";
        this.Images[2].src = "images/RTXo/enemysheet.png";
        this.Images[3].src = "images/RTXo/firemariosheet.png";
        this.Images[4].src = "images/RTXo/font.gif";
        this.Images[5].src = "images/RTXo/gameovergost.gif";
        this.Images[6].src = "images/RTXo/itemsheet.png";
        this.Images[7].src = "images/RTXo/logo.gif";
        this.Images[8].src = "images/RTXo/mapsheet.png";
        this.Images[9].src = "images/RTXo/mariosheet.png";
        this.Images[10].src = "images/RTXo/particlesheet.png";
        this.Images[11].src = "images/RTXo/racoonmariosheet.png";
        this.Images[12].src = "images/RTXo/smallmariosheet.png";
        this.Images[13].src = "images/RTXo/title.gif";
        this.Images[14].src = "images/RTXo/worldmap.png";
    }
    
    Enjine.Resources.AddImages(this.Images);
	if(soundOG == true) {
        Enjine.Resources.AddSound("1up", "sounds/Sound1/1-up.mp3", 1)
            .AddSound("breakblock", "sounds/Sound1/breakblock.mp3")
            .AddSound("bump", "sounds/Sound1/bump.mp3", 4)
            .AddSound("cannon", "sounds/Sound1/cannon.mp3")
            .AddSound("coin", "sounds/Sound1/coin.mp3", 5)
            .AddSound("death", "sounds/Sound1/death.mp3", 1)
            .AddSound("exit", "sounds/Sound1/exit.mp3", 1)
            .AddSound("fireball", "sounds/Sound1/fireball.mp3", 1)
            .AddSound("jump", "sounds/Sound1/jump.mp3")
            .AddSound("kick", "sounds/Sound1/kick.mp3")
            .AddSound("pipe", "sounds/Sound1/pipe.mp3", 1)
            .AddSound("powerdown", "sounds/Sound1/powerdown.mp3", 1)
            .AddSound("powerup", "sounds/Sound1/powerup.mp3", 1)
            .AddSound("sprout", "sounds/Sound1/sprout.mp3", 1)
            .AddSound("stagestart", "sounds/Sound1/stagestart.mp3", 1)
            .AddSound("stomp", "sounds/Sound1/stomp.mp3", 2);
    }else{
        Enjine.Resources.AddSound("1up", "sounds/Sound2/1-up.mp3", 1)
            .AddSound("breakblock", "sounds/Sound2/breakblock.mp3")
            .AddSound("bump", "sounds/Sound2/bump.mp3", 4)
            .AddSound("cannon", "sounds/Sound2/cannon.mp3")
            .AddSound("coin", "sounds/Sound2/coin.mp3", 5)
            .AddSound("death", "sounds/Sound2/death.mp3", 1)
            .AddSound("exit", "sounds/Sound2/exit.mp3", 1)
            .AddSound("fireball", "sounds/Sound2/fireball.mp3", 1)
            .AddSound("jump", "sounds/Sound2/jump.mp3")
            .AddSound("kick", "sounds/Sound2/kick.mp3")
            .AddSound("pipe", "sounds/Sound2/pipe.mp3", 1)
            .AddSound("powerdown", "sounds/Sound2/powerdown.mp3", 1)
            .AddSound("powerup", "sounds/Sound2/powerup.mp3", 1)
            .AddSound("sprout", "sounds/Sound2/sprout.mp3", 1)
            .AddSound("stagestart", "sounds/Sound2/stagestart.mp3", 1)
            .AddSound("stomp", "sounds/Sound2/stomp.mp3", 2);
    }
    
    //load the array of tile behaviors
    Mario.Tile.LoadBehaviors();
};

Mario.LoadingState.prototype.Exit = function() {
    delete this.Images;
};

Mario.LoadingState.prototype.Update = function(delta) {
    if (!this.ImagesLoaded) {
        this.ImagesLoaded = true;
        var i = 0;
        for (i = 0; i < this.Images.length; i++) {
            if (Enjine.Resources.Images[this.Images[i].name].complete !== true) {
                this.ImagesLoaded = false;
                break;
            }
        }
    }
    
    this.ScreenColor += this.ColorDirection * 255 * delta;
    if (this.ScreenColor > 255) {
        this.ScreenColor = 255;
        this.ColorDirection = -1;
    } else if (this.ScreenColor < 0) {
        this.ScreenColor = 0;
        this.ColorDirection = 1;
    }
};

Mario.LoadingState.prototype.Draw = function(context) {
    if (!this.ImagesLoaded) {
        var color = parseInt(this.ScreenColor, 10);
        context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
        context.fillRect(0, 0, 640, 480);
    } else {
        context.fillStyle = "rgb(0, 0, 0)";
        context.fillRect(0, 0, 640, 480);
    }
};

Mario.LoadingState.prototype.CheckForChange = function(context) {
    if (this.ImagesLoaded) {
		//set up the global map state variable
		Mario.GlobalMapState = new Mario.MapState();
	
        context.ChangeState(new Mario.TitleState());
    }
};