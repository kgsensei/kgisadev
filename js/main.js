window.onbeforeunload = function() {
    window.scrollTo(0, 0)
}

helloLanguages = ["Hello I'm", "Hola Soy", "Bonjour je Suis", "Hallo ich Bin", "Hei, Olen"]
helloLangIndex = 0
hasRun = false
lineSpaceingHasRun = false

function onClickScroll(id) {
    document.getElementById(id).scrollIntoView(
        {
            behavior: "smooth",
            block: "end"
        }
    )
}

setInterval(helloInNewLang, 2500)

window.onscroll = async function() {
    if($('#socialLinksContainer').isOnScreen()) {
        if(lineSpaceingHasRun == false){
            lineSpaceingHasRun = true
            await kg.sleep(50)
            $('#socialLinksContainer').animate({letterSpacing: "2vw"}, 750)
        }
    }
}

function animateWaypoint(elem, delay, animationAction, animTime){
	$(elem).waypoint({
		handler: (direction) => {
			$(elem).delay(delay).animate(animationAction, animTime)
		},
		offset: '85%'
	})
}

animateWaypoint('#aboutMe-FadeInOne', 0, {"opacity": "1", "transform": "translate(0%, 0%);"}, 500)
animateWaypoint('#aboutMe-FadeInTwo', 50, {"opacity": "1", "transform": "translate(0%, 0%);"}, 500)
animateWaypoint('#aboutMe-FadeInThree', 100, {"opacity": "1", "transform": "translate(0%, 0%);"}, 500)
animateWaypoint('#aboutMe-FadeInFour', 150, {"opacity": "1", "transform": "translate(0%, 0%);"}, 500)

$('#mySkills-Title').waypoint({
	handler: (direction) => {
		$('#jsSkill').delay(0).animate({"width": "95%"}, 750)
		$('#csSkill').delay(100).animate({"width": "92%"}, 750)
		$('#pySkill').delay(200).animate({"width": "84%"}, 750)
		$('#htSkill').delay(300).animate({"width": "82%"}, 750)
		$('#s2Skill').delay(400).animate({"width": "80%"}, 750)
		$('#hpSkill').delay(500).animate({"width": "74%"}, 750)
		$('#ilSkill').delay(600).animate({"width": "68%"}, 750)
		$('#psSkill').delay(700).animate({"width": "60%"}, 750)
		$('#ppSkill').delay(800).animate({"width": "45%"}, 750)
	},
	offset: '50%'
})

function helloInNewLang() {
	$("#langHello").fadeOut(200, () => {
		helloLangIndex = helloLangIndex + 1
		if(helloLangIndex >= helloLanguages.length) {
			helloLangIndex = 0
		}
		$("#langHello").html(helloLanguages[helloLangIndex])
	})
	$("#langHello").fadeIn(200)
}
