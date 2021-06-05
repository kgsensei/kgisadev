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
const gamehash="60bbc967c9b522001d7f4ebd"
fetch("https://quizizz.com/api/main/game/"+gamehash,{
     headers:{
          "Content-Type":"application/json"
     },
     "referrer":"https://quizizz.com/api/main/game/"+gamehash,
     "body":null,
     "mode":"no-cors",
     "method":"GET"
})
.then(function(response){
     return(response.json())
})
.then(function(json){
     console.log(json.data.questions)
});
