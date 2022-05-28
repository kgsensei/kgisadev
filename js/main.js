window.onbeforeunload = function() {
    window.scrollTo(0, 0)
}
hasRun = false
//setInterval('cursorAnimation()', 600)
lineSpaceingHasRun = false
OcL = $('#refObj').position()

function blastOff(classTarget) {
    var icons = document.getElementsByClassName(classTarget)
    for(let i = 0; i < icons.length; i++){
        var cL = $(icons[i]).position()
        var aA = 200
        var top = kg.randomInt(cL.top - aA, cL.top + aA)
        var left = kg.randomInt(cL.left - aA, cL.left + aA)
        $(icons[i]).animate({"top": top, "left": left}, 1000)
    }
}

function onClickScroll(id) {
    document.getElementById(id).scrollIntoView(
        {
            behavior: "smooth",
            block: "end"
        }
    )
}

window.onscroll = async function() {
    if($("#refObj").isOnScreen()) {
        if(hasRun == false){
            hasRun = true
            await kg.sleep(50)
            blastOff('programmingIcon')
        }
    }
    if($('#socialLinksContainer').isOnScreen()) {
        if(lineSpaceingHasRun == false){
            lineSpaceingHasRun = true
            await kg.sleep(50)
            $('#socialLinksContainer').animate({letterSpacing: "2vw"}, 750)
        }
    }
}

function move(elem) {
    var aA = 200
    var top = kg.randomInt(OcL.top - aA, OcL.top + aA)
    var left = kg.randomInt(OcL.left - aA, OcL.left + aA)
    $(elem).animate({"top": top, "left": left}, 500)
}

function cursorAnimation() {
    $('#cursor').stop(true)
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing')
}
