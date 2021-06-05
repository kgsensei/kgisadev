/*
urls=[
     "https://quizizz.com/api/main/game/ + roomhash",
     "https://quizizz.com/api/main/game/60bbb4ea0251bd001d74d356"
]
let vue=document.querySelector("body > div").__vue__;
let info={
     roomHash: vue.$store._vm._data.$$state.game.data.roomHash,
     playerId: vue.$store._vm._data.$$state.game.player.playerId,
     quizID: vue.$store._vm._data.$$state.game.data.quizId,
     roomCode: vue.$store._vm._data.$$state.game.data.roomCode,
     questionID: vue.$store._vm._data.$$state.game.questions.currentId,
}
*/

function findAnswers() {
     //60bbc967c9b522001d7f4ebd
     const gamehash=document.getElementById("input1").value;
     fetch('https://quizizz.com/api/main/game/'+gamehash)
          .then(response=>response.json())
               .then(data=>gameData=data)
               .then(()=>console.log(fetched))
}
