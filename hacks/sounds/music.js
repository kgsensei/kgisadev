Mario.PlayTitleMusic = function() {
	if(soundOG == true) {
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound1/titleScreen.mp3" type="audio/mpeg"></audio>'
	}else{
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound2/titleScreen.mp3" type="audio/mpeg"></audio>'
	}
};

Mario.PlayMapMusic = function() {
	if(soundOG == true) {
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound1/mainmap.mp3" type="audio/mpeg"></audio>'
	}else{
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound2/mainmap.mp3" type="audio/mpeg"></audio>'
	}
};

Mario.PlayOvergroundMusic = function() {
	if(soundOG == true) {
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound1/actual_overworld.mp3" type="audio/mpeg"></audio>'
	}else{
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound2/actual_overworld.mp3" type="audio/mpeg"></audio>'
	}
	
};

Mario.PlayUndergroundMusic = function() {
	if(soundOG == true) {
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound1/overworld.mp3" type="audio/mpeg"></audio>'
	}else{
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound2/overworld.mp3" type="audio/mpeg"></audio>'
	}
};

Mario.PlayCastleMusic = function() {
	if(soundOG == true) {
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound1/castle.mp3" type="audio/mpeg"></audio>'
	}else{
		document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/Sound2/castle.mp3" type="audio/mpeg"></audio>'
	}
};

Mario.StopMusic = function() {
	document.getElementById("musicContent").innerHTML = ""
};