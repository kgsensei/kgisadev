Mario.PlayTitleMusic = function() {
	document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/titleScreen.mp3" type="audio/mpeg"></audio>'
};

Mario.PlayMapMusic = function() {
	document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/mainmap.mp3" type="audio/mpeg"></audio>'
};

Mario.PlayOvergroundMusic = function() {
	document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/actual_overworld.mp3" type="audio/mpeg"></audio>'
};

Mario.PlayUndergroundMusic = function() {
	document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/overworld.mp3" type="audio/mpeg"></audio>'
};

Mario.PlayCastleMusic = function() {
	document.getElementById("musicContent").innerHTML = '<audio autoplay loop><source src="sounds/castle.mp3" type="audio/mpeg"></audio>'
};

Mario.StopMusic = function() {
	document.getElementById("musicContent").innerHTML = ""
};